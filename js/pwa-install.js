/* ============================================
   PWA INSTALL PROMPT

   Shows a custom "Add to Home Screen" banner
   on mobile devices. Works on:
   - Android Chrome (intercepts beforeinstallprompt)
   - iOS Safari (shows manual instructions)

   The banner only appears after the user has
   logged in at least 3 times. Dismissed banners
   don't reappear for 7 days.
   ============================================ */
(function() {
  'use strict';

  var DISMISS_KEY = 'ae-pwa-dismiss';
  var LOGIN_COUNT_KEY = 'ae-login-count';
  var MIN_LOGINS = 3;
  var DISMISS_DAYS = 7;
  var DELAY_MS = 3000;

  // Don't show if already installed as PWA
  if (window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true) {
    return;
  }

  // Don't show on desktop
  if (!/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    return;
  }

  // Don't show if recently dismissed
  try {
    var dismissed = localStorage.getItem(DISMISS_KEY);
    if (dismissed && (Date.now() - parseInt(dismissed)) < DISMISS_DAYS * 86400000) {
      return;
    }
  } catch(e) {}

  // Detect platform
  var isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;

  // Capture the beforeinstallprompt event (Android Chrome)
  var deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferredPrompt = e;
  });

  // Track login count and only show banner after MIN_LOGINS
  function trackLoginAndShow() {
    if (typeof firebase === 'undefined' || !firebase.auth) return;
    var counted = false;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user && !counted) {
        counted = true;
        try {
          var count = parseInt(localStorage.getItem(LOGIN_COUNT_KEY) || '0') + 1;
          localStorage.setItem(LOGIN_COUNT_KEY, count.toString());
          if (count >= MIN_LOGINS) {
            setTimeout(createBanner, DELAY_MS);
          }
        } catch(e) {}
      }
    });
  }

  // Build the banner
  function createBanner() {
    var banner = document.createElement('div');
    banner.id = 'pwa-install-banner';
    banner.innerHTML =
      '<div class="pwa-banner-content">' +
        '<div class="pwa-banner-icon">' +
          '<img src="/images/icon-192.svg" alt="" width="44" height="44">' +
        '</div>' +
        '<div class="pwa-banner-text">' +
          '<strong>Physics for Noobs</strong>' +
          '<span>' + (isIOS ? 'Add to your home screen for the best experience' : 'Install our app for quick access') + '</span>' +
        '</div>' +
        '<div class="pwa-banner-actions">' +
          '<button class="pwa-banner-install" id="pwa-install-btn">' +
            (isIOS ? 'How to Install' : 'Install') +
          '</button>' +
          '<button class="pwa-banner-close" id="pwa-close-btn" aria-label="Dismiss">&times;</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(banner);

    // Animate in
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        banner.classList.add('pwa-banner-visible');
      });
    });

    // Close button
    document.getElementById('pwa-close-btn').addEventListener('click', function() {
      dismissBanner(banner);
    });

    // Install button
    document.getElementById('pwa-install-btn').addEventListener('click', function() {
      if (isIOS) {
        showIOSInstructions(banner);
      } else if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function(result) {
          deferredPrompt = null;
          dismissBanner(banner);
        });
      }
    });
  }

  function showIOSInstructions(banner) {
    var content = banner.querySelector('.pwa-banner-content');
    content.innerHTML =
      '<div class="pwa-ios-steps">' +
        '<div class="pwa-ios-step">' +
          '<span class="pwa-ios-num">1</span>' +
          '<span>Tap the <strong>Share</strong> button <span style="font-size:1.2em">&#9757;</span> at the bottom of Safari</span>' +
        '</div>' +
        '<div class="pwa-ios-step">' +
          '<span class="pwa-ios-num">2</span>' +
          '<span>Scroll down and tap <strong>"Add to Home Screen"</strong></span>' +
        '</div>' +
        '<div class="pwa-ios-step">' +
          '<span class="pwa-ios-num">3</span>' +
          '<span>Tap <strong>"Add"</strong> to install</span>' +
        '</div>' +
        '<button class="pwa-banner-close-text" id="pwa-ios-done">Got it</button>' +
      '</div>';

    document.getElementById('pwa-ios-done').addEventListener('click', function() {
      dismissBanner(banner);
    });
  }

  function dismissBanner(banner) {
    banner.classList.remove('pwa-banner-visible');
    try { localStorage.setItem(DISMISS_KEY, Date.now().toString()); } catch(e) {}
    setTimeout(function() {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    }, 400);
  }

  // Wait for auth to track logins, then show if threshold met
  if (document.readyState === 'complete') {
    trackLoginAndShow();
  } else {
    window.addEventListener('load', function() {
      trackLoginAndShow();
    });
  }
})();
