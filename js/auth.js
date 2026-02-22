/* ============================================
   PHYSICS FOR NOOBS - Google Auth
   ============================================ */
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof firebase === 'undefined' || !firebase.auth) return;

    var auth = firebase.auth();
    var provider = new firebase.auth.GoogleAuthProvider();
    var loginBtn = document.getElementById('auth-login-btn');
    var userMenu = document.getElementById('auth-user-menu');
    var userAvatar = document.getElementById('auth-user-avatar');
    var userName = document.getElementById('auth-user-name');
    var logoutBtn = document.getElementById('auth-logout-btn');

    if (!loginBtn || !userMenu) return;

    auth.onAuthStateChanged(function(user) {
      if (user) {
        loginBtn.style.display = 'none';
        userMenu.style.display = 'flex';
        if (userAvatar) userAvatar.src = user.photoURL || '';
        if (userName) userName.textContent = user.displayName || 'User';

        // Save theme preference to Firestore
        if (firebase.firestore) {
          var db = firebase.firestore();
          var theme = document.documentElement.getAttribute('data-theme') || 'dark';
          db.collection('users').doc(user.uid).set({ theme: theme }, { merge: true });
        }
      } else {
        loginBtn.style.display = 'flex';
        userMenu.style.display = 'none';
      }
    });

    loginBtn.addEventListener('click', function() {
      auth.signInWithPopup(provider).catch(function(err) {
        console.error('Auth error:', err.message);
      });
    });

    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        auth.signOut();
      });
    }
  });
})();
