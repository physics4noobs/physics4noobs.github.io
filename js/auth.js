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

    var profileFormShown = false; // Guard: only show profile form once per page load

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

        // Save profile to Firestore + check for first sign-in
        if (firebase.firestore) {
          var db = firebase.firestore();
          var theme = document.documentElement.getAttribute('data-theme') || 'dark';
          db.collection('users').doc(user.uid).set({
            theme: theme,
            displayName: user.displayName || '',
            email: user.email || '',
            photoURL: user.photoURL || ''
          }, { merge: true });

          // Check if profile is complete (studentName exists)
          if (!profileFormShown) {
            profileFormShown = true;
            // Always verify with Firestore on first page load per session
            if (!sessionStorage.getItem('pf-verified')) {
              db.collection('users').doc(user.uid).get().then(function(doc) {
                var data = doc.exists ? doc.data() : {};
                sessionStorage.setItem('pf-verified', '1');
                if (data.studentName) {
                  localStorage.setItem('pf-complete', '1');
                } else {
                  localStorage.removeItem('pf-complete');
                  showProfileForm(db, user.uid);
                }
              });
            } else if (!localStorage.getItem('pf-complete')) {
              showProfileForm(db, user.uid);
            }
          }
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

      // Use redirect on Safari/mobile (more reliable), popup on others
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isSafari || isMobile) {
        auth.signInWithRedirect(provider);
      } else {
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
      }
    });

    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('pf-complete');
        auth.signOut();
      });
    }
    if (mobileSignoutBtn) {
      mobileSignoutBtn.addEventListener('click', function() {
        localStorage.removeItem('pf-complete');
        auth.signOut();
      });
    }
  });

  // --- Profile Form (first sign-in) ---
  function showProfileForm(db, uid) {
    // Prevent duplicate forms
    if (document.querySelector('.profile-overlay')) return;

    // Load CSS if not already loaded
    if (!document.querySelector('link[href*="profile-form.css"]')) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      // Detect if we're in a subdirectory
      var isSubdir = window.location.pathname.indexOf('/chapters/') !== -1 ||
                     window.location.pathname.indexOf('/tests/') !== -1 ||
                     window.location.pathname.indexOf('/simulations/') !== -1;
      link.href = (isSubdir ? '../' : '') + 'css/profile-form.css';
      document.head.appendChild(link);
    }

    // Build form HTML
    var overlay = document.createElement('div');
    overlay.className = 'profile-overlay';
    overlay.innerHTML =
      '<div class="profile-card">' +
        '<h2>Complete Your Profile</h2>' +
        '<p class="profile-sub">Tell us a bit about yourself to get started.</p>' +
        '<div class="profile-field">' +
          '<label>Your Name <span class="required">*</span></label>' +
          '<input type="text" id="pf-name" placeholder="Enter your full name" autocomplete="name" maxlength="60">' +
          '<div class="profile-error">Please enter your name</div>' +
        '</div>' +
        '<div class="profile-field">' +
          '<label>Batch Code <span style="font-weight:400;text-transform:none;letter-spacing:0;">(optional)</span></label>' +
          '<input type="text" id="pf-batch" placeholder="e.g. BATCH-2026A" autocomplete="off" maxlength="30">' +
        '</div>' +
        '<button class="profile-submit" id="pf-submit">Continue</button>' +
      '</div>';

    document.body.appendChild(overlay);

    // Show with animation (next frame)
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        overlay.classList.add('show');
      });
    });

    var nameInput = document.getElementById('pf-name');
    var batchInput = document.getElementById('pf-batch');
    var submitBtn = document.getElementById('pf-submit');

    // Focus name input after animation
    setTimeout(function() { nameInput.focus(); }, 400);

    // Clear error on input
    nameInput.addEventListener('input', function() {
      nameInput.classList.remove('error');
    });

    // Submit handler
    submitBtn.addEventListener('click', function() {
      var studentName = nameInput.value.trim();
      var batchCode = batchInput.value.trim();

      if (!studentName) {
        nameInput.classList.add('error');
        nameInput.focus();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Saving...';

      // Set localStorage IMMEDIATELY so next page never shows form
      localStorage.setItem('pf-complete', '1');

      var updateData = { studentName: studentName };
      if (batchCode) updateData.batchCode = batchCode;

      db.collection('users').doc(uid).set(updateData, { merge: true }).then(function() {
        overlay.classList.remove('show');
        setTimeout(function() {
          overlay.remove();
        }, 350);
      }).catch(function(err) {
        console.error('Profile save error:', err);
        // Keep localStorage set even on error — prevents repeated popups
        submitBtn.disabled = false;
        submitBtn.textContent = 'Continue';
      });
    });

    // Enter key submits
    nameInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') submitBtn.click();
    });
    batchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') submitBtn.click();
    });
  }
})();
