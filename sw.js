/* ============================================
   SERVICE WORKER — Physics for Noobs PWA

   Strategy:
   - App shell (HTML, CSS, JS) → Cache-first, network fallback
   - Firebase/Google APIs → Network-only (auth must be live)
   - Images → Cache-first with network fallback
   - Everything else → Network-first with cache fallback
   ============================================ */

var CACHE_NAME = 'p4n-v50';

// Core app shell to pre-cache on install
var APP_SHELL = [
  '/',
  '/index.html',
  '/flashcards.html',
  '/simulations.html',
  '/progress.html',
  '/about.html',
  '/tests.html',
  '/tests/ray-optics-dts.html',
  '/css/style.css',
  '/js/main.js',
  '/js/theme.js',
  '/js/flashcards.js',
  '/js/auth-gate.js',
  '/images/icon-192.svg',
  '/images/icon-512.svg'
];

// Install: cache the app shell
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(APP_SHELL);
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(name) {
          return name !== CACHE_NAME;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: routing strategy
self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Network-only for Firebase, Google APIs, and auth-related requests
  if (url.hostname.indexOf('googleapis.com') !== -1 ||
      url.hostname.indexOf('gstatic.com') !== -1 ||
      url.hostname.indexOf('firebaseapp.com') !== -1 ||
      url.hostname.indexOf('firebaseio.com') !== -1 ||
      url.hostname.indexOf('google.com') !== -1) {
    return;
  }

  // Cache-first for images
  if (event.request.destination === 'image' ||
      url.pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico)$/)) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        if (cached) return cached;
        return fetch(event.request).then(function(response) {
          if (response.ok) {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, clone);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // Cache-first for CSS and JS (app shell)
  if (url.pathname.match(/\.(css|js)$/) && url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        if (cached) return cached;
        return fetch(event.request).then(function(response) {
          if (response.ok) {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, clone);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // Network-first for HTML pages (so content stays fresh)
  if (event.request.destination === 'document' ||
      event.request.headers.get('accept').indexOf('text/html') !== -1) {
    event.respondWith(
      fetch(event.request).then(function(response) {
        if (response.ok) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(function() {
        return caches.match(event.request).then(function(cached) {
          return cached || caches.match('/index.html');
        });
      })
    );
    return;
  }
});
