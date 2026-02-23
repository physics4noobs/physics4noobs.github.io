/* ============================================
   AUTH GATE — Restrict pages to logged-in users

   Mode 1: Add data-auth-required to a content wrapper.
           Shows login prompt in-place until sign-in.

   Mode 2: Add data-auth-redirect="url" to <body>.
           Redirects unauthenticated users to that URL.

   If neither attribute exists, the script does nothing.
   ============================================ */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // Bypass auth gate offline only if user has previously logged in on this device
    if (!navigator.onLine) {
      try {
        if (localStorage.getItem('ae-auth-verified')) return;
      } catch(e) {}
    }

    var gated = document.querySelector('[data-auth-required]');
    var redirect = document.body.getAttribute('data-auth-redirect');

    // Mode 1: In-page gate with login prompt
    if (gated) {
      gated.style.display = 'none';

      var prompt = document.createElement('div');
      prompt.className = 'auth-gate';
      prompt.innerHTML =
        '<div class="auth-gate-inner">' +
          '<div class="auth-gate-icon">&#128274;</div>' +
          '<h2>Sign In Required</h2>' +
          '<p>This section is available to registered users. Sign in with Google to access flashcards, simulations, track your progress, and climb the leaderboard.</p>' +
          '<div class="auth-gate-perks">' +
            '<div class="auth-gate-perk"><span>&#9889;</span> Full access to all simulations</div>' +
            '<div class="auth-gate-perk"><span>&#127183;</span> Spaced-repetition flashcards</div>' +
            '<div class="auth-gate-perk"><span>&#127942;</span> Achievement tracking &amp; rank progression</div>' +
            '<div class="auth-gate-perk"><span>&#128200;</span> Personal progress dashboard</div>' +
          '</div>' +
          '<button class="auth-gate-btn" id="auth-gate-login">' +
            '<svg class="google-icon" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>' +
            'Sign in with Google' +
          '</button>' +
          '<p class="auth-gate-note">Free forever. Your progress syncs across devices.</p>' +
        '</div>';

      gated.parentNode.insertBefore(prompt, gated);

      var loginBtn = document.getElementById('auth-gate-login');
      if (loginBtn && typeof firebase !== 'undefined' && firebase.auth) {
        loginBtn.addEventListener('click', function() {
          firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .catch(function(e) { console.error('Auth error:', e.message); });
        });
      }

      if (typeof firebase === 'undefined' || !firebase.auth) return;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          prompt.style.display = 'none';
          gated.style.display = '';
          try { localStorage.setItem('ae-auth-verified', '1'); } catch(e) {}
        } else {
          prompt.style.display = '';
          gated.style.display = 'none';
          try { localStorage.removeItem('ae-auth-verified'); } catch(e) {}
        }
      });
      return;
    }

    // Mode 2: Redirect unauthenticated users
    if (redirect) {
      if (typeof firebase === 'undefined' || !firebase.auth) return;
      firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          window.location.href = redirect;
        }
      });
    }
  });
})();
