/* ============================================
   PHYSICS FOR NOOBS - Google Auth
   ============================================ */
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof firebase === 'undefined' || !firebase.auth) {
      console.warn('Firebase SDK not loaded — auth disabled');
      return;
    }

    var auth = firebase.auth();
    var provider = new firebase.auth.GoogleAuthProvider();
    var loginBtn = document.getElementById('auth-login-btn');
    var userMenu = document.getElementById('auth-user-menu');
    var userAvatar = document.getElementById('auth-user-avatar');
    var userName = document.getElementById('auth-user-name');
    var logoutBtn = document.getElementById('auth-logout-btn');
    var mobileProgressBtn = document.getElementById('mobile-progress-btn');
    var mobileSignoutBtn = document.getElementById('mobile-signout-btn');

    if (!loginBtn || !userMenu) return;

    // Handle redirect result (for mobile / popup-blocked fallback)
    auth.getRedirectResult().then(function(result) {
      // Redirect sign-in succeeded — onAuthStateChanged will handle UI
    }).catch(function(err) {
      if (err.code !== 'auth/credential-already-in-use') {
        console.error('Redirect auth error:', err.code, err.message);
      }
    });

    auth.onAuthStateChanged(function(user) {
      if (user) {
        loginBtn.style.display = 'none';
        userMenu.style.display = 'flex';
        if (userAvatar) userAvatar.src = user.photoURL || '';
        if (userName) userName.textContent = user.displayName || 'User';

        if (mobileProgressBtn) mobileProgressBtn.style.display = '';
        if (mobileSignoutBtn) mobileSignoutBtn.style.display = '';

        // Save theme preference to Firestore
        if (firebase.firestore) {
          var db = firebase.firestore();
          var theme = document.documentElement.getAttribute('data-theme') || 'dark';
          db.collection('users').doc(user.uid).set({
            theme: theme,
            displayName: user.displayName || '',
            email: user.email || '',
            photoURL: user.photoURL || ''
          }, { merge: true });
        }
      } else {
        loginBtn.style.display = 'flex';
        userMenu.style.display = 'none';
        if (mobileProgressBtn) mobileProgressBtn.style.display = 'none';
        if (mobileSignoutBtn) mobileSignoutBtn.style.display = 'none';
      }
    });

    loginBtn.addEventListener('click', function() {
      loginBtn.disabled = true;
      loginBtn.style.opacity = '0.6';

      auth.signInWithPopup(provider).then(function() {
        loginBtn.disabled = false;
        loginBtn.style.opacity = '';
      }).catch(function(err) {
        loginBtn.disabled = false;
        loginBtn.style.opacity = '';
        console.error('Auth error:', err.code, err.message);

        // Popup blocked or unavailable — fall back to redirect
        if (err.code === 'auth/popup-blocked' ||
            err.code === 'auth/popup-closed-by-user' ||
            err.code === 'auth/cancelled-popup-request' ||
            err.code === 'auth/operation-not-supported-in-this-environment') {
          auth.signInWithRedirect(provider);
        }
      });
    });

    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        auth.signOut();
      });
    }
    if (mobileSignoutBtn) {
      mobileSignoutBtn.addEventListener('click', function() {
        auth.signOut();
      });
    }
  });
})();
