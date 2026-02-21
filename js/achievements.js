/* ============================================
   AXOMIYA ENGINEER - Achievement Engine
   Reads from SIM_ACHIEVEMENTS_CONFIG (declarative)
   or legacy SIM_ACHIEVEMENTS, syncs with Firestore,
   renders side panel & centered pop overlay.
   Polls every 2s so sims need no explicit hook.
   ============================================ */
(function() {
  // === LOAD ACHIEVEMENTS ===
  var simId = window.location.pathname.split('/').pop().replace('.html', '');
  var achievements;

  // Prefer declarative config; fall back to legacy
  if (window.SIM_ACHIEVEMENTS_CONFIG && window.SIM_ACHIEVEMENTS_CONFIG[simId]) {
    achievements = window.SIM_ACHIEVEMENTS_CONFIG[simId];
  } else if (window.SIM_ACHIEVEMENTS && window.SIM_ACHIEVEMENTS.length) {
    achievements = window.SIM_ACHIEVEMENTS;
  }
  if (!achievements || !achievements.length) return;

  var unlocked = {};
  var firestoreRef = null;
  var signedIn = false;
  var toastQueue = [];
  var toastBusy = false;

  // === DECLARATIVE CHECK INTERPRETER ===
  function evaluateCheck(rule) {
    switch (rule.type) {
      case 'slider':
        var el = document.getElementById(rule.id);
        if (!el) return false;
        return compare(parseFloat(el.value), rule.op, rule.value);

      case 'global':
        var val = resolveGlobal(rule.name);
        if (val === undefined) return false;
        return compare(val, rule.op, rule.value);

      case 'multi':
        var method = rule.logic === 'or' ? 'some' : 'every';
        return rule.checks[method](function(c) { return evaluateCheck(c); });

      case 'global-array':
        var arr = resolveGlobal(rule.name);
        if (!arr || !arr.length) return false;
        if (rule.find) {
          return arr.some(function(item) {
            for (var k in rule.find) {
              if (item[k] !== rule.find[k]) return false;
            }
            return true;
          });
        }
        if (rule.count) {
          var filtered = rule.filter
            ? arr.filter(function(item) {
                for (var k in rule.filter) { if (item[k] !== rule.filter[k]) return false; }
                return true;
              })
            : arr;
          return compare(filtered.length, rule.count.op, rule.count.value);
        }
        return false;

      case 'custom':
        return typeof rule.fn === 'function' ? rule.fn() : false;
    }
    return false;
  }

  function compare(a, op, b) {
    switch (op) {
      case 'eq':  return a == b;
      case 'lt':  return a < b;
      case 'gt':  return a > b;
      case 'lte': return a <= b;
      case 'gte': return a >= b;
    }
    return false;
  }

  function resolveGlobal(path) {
    var parts = path.split('.');
    var obj = window;
    for (var i = 0; i < parts.length; i++) {
      if (obj === undefined || obj === null) return undefined;
      obj = obj[parts[i]];
    }
    return obj;
  }

  // === DOM INJECTION ===
  var overlay = document.createElement('div');
  overlay.className = 'ach-overlay';
  document.body.appendChild(overlay);

  var toggle = document.createElement('button');
  toggle.className = 'ach-toggle';
  toggle.setAttribute('aria-label', 'Achievements');
  toggle.innerHTML = '<span style="display:block">&#127942;</span>';
  document.body.appendChild(toggle);

  var panel = document.createElement('div');
  panel.className = 'ach-panel';
  panel.innerHTML =
    '<div class="ach-panel-header"><h3>Discoveries</h3><button class="ach-panel-close" aria-label="Close">&times;</button></div>' +
    '<div class="ach-panel-body" id="ach-list"></div>' +
    '<div class="ach-panel-footer">' +
      '<div class="ach-progress-label"><span id="ach-prog-text">0/' + achievements.length + ' Discoveries</span></div>' +
      '<div class="ach-progress-bar"><div class="ach-progress-fill" id="ach-prog-fill" style="width:0%"></div></div>' +
      '<div class="ach-complete-badge" id="ach-complete">&#127942; All Discoveries Complete!</div>' +
    '</div>' +
    '<div class="ach-signin-hint" id="ach-signin-hint" style="display:none">Sign in to save progress across devices</div>';
  document.body.appendChild(panel);

  // Pop overlay for achievement unlocks
  var popOverlay = document.createElement('div');
  popOverlay.className = 'ach-pop-overlay';
  popOverlay.innerHTML =
    '<div class="ach-pop-card">' +
      '<div class="ach-pop-glow"><span class="ach-pop-icon"></span></div>' +
      '<div class="ach-pop-label">Discovery!</div>' +
      '<div class="ach-pop-title"></div>' +
      '<div class="ach-pop-desc"></div>' +
    '</div>';
  document.body.appendChild(popOverlay);

  popOverlay.addEventListener('click', function() {
    popOverlay.classList.remove('show');
  });

  // === PANEL TOGGLE ===
  function openPanel() {
    panel.classList.add('open');
    overlay.classList.add('visible');
    toggle.style.display = 'none';
  }

  function allComplete() {
    var count = 0;
    for (var k in unlocked) { if (unlocked[k] && unlocked[k].unlocked) count++; }
    return count === achievements.length;
  }

  function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('visible');
    if (!allComplete()) toggle.style.display = '';
  }

  toggle.addEventListener('click', openPanel);
  panel.querySelector('.ach-panel-close').addEventListener('click', closePanel);
  overlay.addEventListener('click', closePanel);

  // === RENDER ===
  function render() {
    var list = document.getElementById('ach-list');
    list.innerHTML = '';
    var count = 0;

    for (var i = 0; i < achievements.length; i++) {
      var a = achievements[i];
      var isUnlocked = !!unlocked[a.id];
      if (isUnlocked) count++;

      var item = document.createElement('div');
      item.className = 'ach-item ' + (isUnlocked ? 'unlocked' : 'locked');
      item.id = 'ach-' + a.id;
      item.innerHTML =
        '<span class="ach-icon">' + (isUnlocked ? a.icon : '&#128274;') + '</span>' +
        '<div class="ach-info"><div class="ach-title">' + a.title + '</div><div class="ach-desc">' + a.description + '</div></div>' +
        '<span class="ach-check">' + (isUnlocked ? '&#10003;' : '') + '</span>';
      list.appendChild(item);
    }

    document.getElementById('ach-prog-text').textContent = count + '/' + achievements.length + ' Discoveries';
    document.getElementById('ach-prog-fill').style.width = (count / achievements.length * 100) + '%';

    var comp = document.getElementById('ach-complete');
    if (count === achievements.length) {
      comp.classList.add('visible');
      // All done — keep toggle but make it subtle, no badge
      toggle.style.display = '';
      toggle.classList.add('completed');
      var badge = toggle.querySelector('.ach-badge-count');
      if (badge) badge.style.display = 'none';
    } else {
      comp.classList.remove('visible');
      toggle.style.display = '';
      toggle.classList.remove('completed');
    }

    document.getElementById('ach-signin-hint').style.display = signedIn ? 'none' : '';
  }

  // === POP OVERLAY (replaces old toast) ===
  function showToast(achievement) {
    toastQueue.push(achievement);
    processToastQueue();
  }

  function processToastQueue() {
    if (toastBusy || toastQueue.length === 0) return;
    toastBusy = true;
    var a = toastQueue.shift();

    popOverlay.querySelector('.ach-pop-icon').textContent = a.icon;
    popOverlay.querySelector('.ach-pop-title').textContent = a.title;
    popOverlay.querySelector('.ach-pop-desc').textContent = a.description;
    popOverlay.classList.add('show');

    setTimeout(function() {
      popOverlay.classList.remove('show');
      setTimeout(function() {
        toastBusy = false;
        processToastQueue();
      }, 400);
    }, 3000);
  }

  // === CHECK ===
  function runCheck() {
    // Only allow unlocking achievements when signed in
    if (!signedIn) return false;

    var allDone = true;
    var newUnlocks = [];

    for (var i = 0; i < achievements.length; i++) {
      var a = achievements[i];
      if (unlocked[a.id]) continue;
      allDone = false;
      try {
        var passed = false;
        if (a.check && typeof a.check === 'function') {
          passed = a.check(); // legacy function-based check
        } else if (a.check && a.check.type) {
          passed = evaluateCheck(a.check); // declarative check
        }
        if (passed) {
          unlocked[a.id] = { unlocked: true, unlockedAt: new Date() };
          newUnlocks.push(a);
        }
      } catch(e) { /* check may fail if globals not ready yet */ }
    }

    if (newUnlocks.length > 0) {
      render();
      for (var j = 0; j < newUnlocks.length; j++) {
        showToast(newUnlocks[j]);
        highlightItem(newUnlocks[j].id);
        saveToFirestore(newUnlocks[j].id);
      }
    }

    return allDone;
  }

  window.AchievementEngine = { check: runCheck };

  function highlightItem(id) {
    var el = document.getElementById('ach-' + id);
    if (el) {
      el.classList.add('just-unlocked');
      setTimeout(function() { el.classList.remove('just-unlocked'); }, 1500);
    }
  }

  // === POLLING (every 2s) ===
  var pollId = setInterval(function() {
    if (runCheck()) clearInterval(pollId);
  }, 2000);

  // === FIRESTORE SYNC ===
  function saveToFirestore(achId) {
    if (!firestoreRef) return;
    var update = {};
    update['achievements.' + achId] = {
      unlocked: true,
      unlockedAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    firestoreRef.update(update).catch(function() {
      firestoreRef.set(update, { merge: true });
    });
  }

  function loadFromFirestore() {
    if (!firestoreRef) return;
    firestoreRef.get().then(function(doc) {
      if (doc.exists && doc.data().achievements) {
        var saved = doc.data().achievements;
        for (var key in saved) {
          if (saved[key] && saved[key].unlocked) unlocked[key] = saved[key];
        }
      }
      render();
    }).catch(function() { render(); });
  }

  // === INIT ===
  function waitForFirebase(cb) {
    if (typeof firebase !== 'undefined' && firebase.auth && firebase.firestore) { cb(); return; }
    setTimeout(function() { waitForFirebase(cb); }, 100);
  }

  render();

  waitForFirebase(function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        signedIn = true;
        firestoreRef = firebase.firestore()
          .collection('users').doc(user.uid)
          .collection('simulations').doc(simId);
        loadFromFirestore();
      } else {
        signedIn = false;
        firestoreRef = null;
        render();
      }
    });
  });
})();
