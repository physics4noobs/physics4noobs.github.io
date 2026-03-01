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

          // Check if profile is complete (username exists)
          if (!profileFormShown) {
            profileFormShown = true;
            // Always verify with Firestore on first page load per session
            if (!sessionStorage.getItem('pf-verified')) {
              db.collection('users').doc(user.uid).get().then(function(doc) {
                var data = doc.exists ? doc.data() : {};
                sessionStorage.setItem('pf-verified', '1');
                if (data.username) {
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

      // Always try popup first (works on Safari + Chrome + Firefox)
      // Redirect fails on Safari due to ITP blocking cross-domain cookies
      auth.signInWithPopup(provider).then(function() {
        loginBtn.disabled = false;
        loginBtn.style.opacity = '';
      }).catch(function(err) {
        loginBtn.disabled = false;
        loginBtn.style.opacity = '';
        console.error('Auth error:', err.code, err.message);

        // Popup blocked — fall back to redirect (last resort)
        if (err.code === 'auth/popup-blocked' ||
            err.code === 'auth/operation-not-supported-in-this-environment') {
          auth.signInWithRedirect(provider);
        }
      });
    });

    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('pf-complete');
        localStorage.removeItem('pf-username');
        localStorage.removeItem('pf-batchCode');
        auth.signOut();
      });
    }
    if (mobileSignoutBtn) {
      mobileSignoutBtn.addEventListener('click', function() {
        localStorage.removeItem('pf-complete');
        localStorage.removeItem('pf-username');
        localStorage.removeItem('pf-batchCode');
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
          '<label>Username <span class="required">*</span></label>' +
          '<input type="text" id="pf-name" placeholder="Enter your username" autocomplete="username" maxlength="60">' +
          '<div class="profile-error">Please enter a username</div>' +
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
      var username = nameInput.value.trim();
      var batchCode = batchInput.value.trim();

      if (!username) {
        nameInput.classList.add('error');
        nameInput.focus();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Saving...';

      // Set localStorage IMMEDIATELY so next page never shows form
      localStorage.setItem('pf-complete', '1');

      var updateData = { username: username };
      if (batchCode) updateData.batchCode = batchCode;

      db.collection('users').doc(uid).set(updateData, { merge: true }).then(function() {
        localStorage.setItem('pf-complete', '1');
        localStorage.setItem('pf-username', username);
        if (batchCode) localStorage.setItem('pf-batchCode', batchCode);
        sessionStorage.setItem('pf-verified', '1');
        submitBtn.textContent = 'Saved!';
        submitBtn.style.background = 'linear-gradient(135deg, #00e676, #00c853)';
        // Let user see "Saved!" for a moment before closing
        setTimeout(function() {
          overlay.classList.remove('show');
          setTimeout(function() { overlay.remove(); }, 350);
        }, 800);
      }).catch(function(err) {
        console.error('Profile save error:', err);
        localStorage.removeItem('pf-complete');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Retry';
        var errDiv = document.createElement('div');
        errDiv.style.cssText = 'color:var(--color-rose,#ff6464);font-size:0.8rem;text-align:center;margin-top:8px;';
        errDiv.textContent = 'Save failed: ' + (err.message || err.code || 'Unknown error');
        submitBtn.parentNode.appendChild(errDiv);
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
