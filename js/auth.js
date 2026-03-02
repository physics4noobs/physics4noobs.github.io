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

    var profileFormShown = false;

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

        // Save basic profile to Firestore
        if (firebase.firestore) {
          var db = firebase.firestore();
          var theme = document.documentElement.getAttribute('data-theme') || 'dark';
          db.collection('users').doc(user.uid).set({
            theme: theme,
            displayName: user.displayName || '',
            email: user.email || '',
            photoURL: user.photoURL || ''
          }, { merge: true });

          // Username form: show ONCE, 5 min after first-ever sign-in
          // pf-asked = already asked or scheduled — never ask again
          // pf-complete = form was filled successfully
          if (!profileFormShown) {
            profileFormShown = true;
            if (localStorage.getItem('pf-complete') || localStorage.getItem('pf-asked')) {
              // Already dealt with — never show again
            } else {
              // Check Firestore — maybe they filled it on another device
              db.collection('users').doc(user.uid).get().then(function(doc) {
                var data = doc.exists ? doc.data() : {};
                if (data.username || data.studentName) {
                  localStorage.setItem('pf-complete', '1');
                  localStorage.setItem('pf-asked', '1');
                } else {
                  // First-ever login — schedule form after 5 minutes
                  var firstLogin = localStorage.getItem('pf-first-login');
                  if (!firstLogin) {
                    localStorage.setItem('pf-first-login', Date.now().toString());
                    firstLogin = Date.now().toString();
                  }
                  var elapsed = Date.now() - parseInt(firstLogin, 10);
                  var DELAY = 5 * 60 * 1000; // 5 minutes
                  if (elapsed >= DELAY) {
                    // 5 min passed — show form now, mark as asked regardless of outcome
                    localStorage.setItem('pf-asked', '1');
                    showProfileForm(db, user.uid);
                  } else {
                    // Wait remaining time then show
                    setTimeout(function() {
                      // Re-check in case they navigated away and it got handled
                      if (!localStorage.getItem('pf-complete') && !localStorage.getItem('pf-asked')) {
                        localStorage.setItem('pf-asked', '1');
                        showProfileForm(db, user.uid);
                      }
                    }, DELAY - elapsed);
                  }
                }
              }).catch(function() {
                // Firestore read failed — skip, don't bother
              });
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

      auth.signInWithPopup(provider).then(function() {
        loginBtn.disabled = false;
        loginBtn.style.opacity = '';
      }).catch(function(err) {
        loginBtn.disabled = false;
        loginBtn.style.opacity = '';
        console.error('Auth error:', err.code, err.message);

        if (err.code === 'auth/popup-blocked' ||
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

  // --- Profile Form (first sign-in only) ---
  function showProfileForm(db, uid) {
    if (document.querySelector('.profile-overlay')) return;

    // Load CSS if not already loaded
    if (!document.querySelector('link[href*="profile-form.css"]')) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      var isSubdir = window.location.pathname.indexOf('/chapters/') !== -1 ||
                     window.location.pathname.indexOf('/tests/') !== -1 ||
                     window.location.pathname.indexOf('/simulations/') !== -1;
      link.href = (isSubdir ? '../' : '') + 'css/profile-form.css';
      document.head.appendChild(link);
    }

    var overlay = document.createElement('div');
    overlay.className = 'profile-overlay';
    overlay.innerHTML =
      '<div class="profile-card">' +
        '<button id="pf-close" style="position:absolute;top:12px;right:14px;background:none;border:none;color:var(--text-secondary,#a0a0b8);font-size:1.4rem;cursor:pointer;padding:4px 8px;line-height:1;">&times;</button>' +
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

    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        overlay.classList.add('show');
      });
    });

    // Close button — dismiss forever, never ask again
    document.getElementById('pf-close').addEventListener('click', function() {
      overlay.classList.remove('show');
      setTimeout(function() { overlay.remove(); }, 350);
    });

    var nameInput = document.getElementById('pf-name');
    var batchInput = document.getElementById('pf-batch');
    var submitBtn = document.getElementById('pf-submit');

    setTimeout(function() { nameInput.focus(); }, 400);

    nameInput.addEventListener('input', function() {
      nameInput.classList.remove('error');
    });

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

      // Mark complete immediately so form never shows again
      localStorage.setItem('pf-complete', '1');

      var updateData = { username: username };
      if (batchCode) updateData.batchCode = batchCode;

      // Save to Firestore — admin dashboard reads this later
      db.collection('users').doc(uid).set(updateData, { merge: true }).then(function() {
        submitBtn.textContent = 'Saved!';
        submitBtn.style.background = 'linear-gradient(135deg, #00e676, #00c853)';
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
        errDiv.textContent = 'Save failed — please try again';
        submitBtn.parentNode.appendChild(errDiv);
      });
    });

    nameInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') submitBtn.click();
    });
    batchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') submitBtn.click();
    });
  }
})();
