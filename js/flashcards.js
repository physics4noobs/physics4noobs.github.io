/* ============================================
   AXOMIYA ENGINEER - Flashcard System
   SM-2 Spaced Repetition + KaTeX Rendering
   localStorage + Firebase Sync
   ============================================ */
(function () {
  'use strict';

  // --- SM-2 Algorithm ---
  function calcSM2(quality, card) {
    var rep = card.repetition || 0;
    var ef = card.easeFactor || 2.5;
    var interval = card.interval || 0;

    if (quality < 3) {
      rep = 0;
      interval = 0;
    } else {
      if (rep === 0) {
        interval = 1;
      } else if (rep === 1) {
        interval = 6;
      } else {
        interval = Math.round(interval * ef);
      }
      rep += 1;
    }

    ef = ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (ef < 1.3) ef = 1.3;

    var now = Date.now();
    return {
      interval: interval,
      repetition: rep,
      easeFactor: Math.round(ef * 100) / 100,
      nextReview: now + interval * 86400000,
      lastReview: now
    };
  }

  // --- State ---
  var chapters = {
    kinematics: 'Kinematics',
    'newtons-laws': "Newton's Laws",
    'work-power-energy': 'Work, Power & Energy',
    gravitation: 'Gravitation',
    'rotational-motion': 'Rotational Motion',
    'mechanical-properties': 'Mechanical Properties',
    'fluid-mechanics': 'Fluid Mechanics',
    thermodynamics: 'Thermodynamics',
    shm: 'Simple Harmonic Motion',
    waves: 'Waves',
    electrostatics: 'Electrostatics',
    'current-electricity': 'Current Electricity',
    magnetism: 'Magnetism',
    emi: 'Electromagnetic Induction',
    'ac-circuits': 'AC Circuits',
    'ray-optics': 'Ray Optics',
    'wave-optics': 'Wave Optics'
  };
  var currentChapter = null;
  var cards = [];
  var progress = {};
  var queue = [];
  var currentIdx = 0;
  var isFlipped = false;
  var session = { reviewed: 0, correct: 0, streak: 0 };

  // --- DOM refs (populated in init) ---
  var chapterSelector, cardArea, emptyState, cardContainer, cardFront, cardBack;
  var ratingBtns, progressBar, progressText, statReviewed, statStreak, statAccuracy, doneMsg;

  // --- localStorage helpers ---
  function storageKey(ch) { return 'ae-flashcards-' + ch; }

  function loadProgress(ch) {
    try {
      var raw = localStorage.getItem(storageKey(ch));
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function saveProgress(ch, data) {
    try {
      localStorage.setItem(storageKey(ch), JSON.stringify(data));
    } catch (e) { /* quota exceeded */ }
  }

  // --- Firebase sync ---
  function syncWithFirebase(ch) {
    if (typeof firebase === 'undefined' || !firebase.auth || !firebase.firestore) return;
    var user = firebase.auth().currentUser;
    if (!user) return;

    var db = firebase.firestore();
    var ref = db.collection('users').doc(user.uid).collection('flashcards').doc(ch);
    var local = loadProgress(ch);

    ref.get().then(function (doc) {
      if (doc.exists) {
        var remote = doc.data().cards || {};
        var merged = mergeProgress(local, remote);
        saveProgress(ch, merged);
        ref.set({ cards: merged, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
        if (ch === currentChapter) {
          progress = merged;
          buildQueue();
          if (queue.length > 0) showCard();
        }
      } else {
        ref.set({ cards: local, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
      }
    }).catch(function () { /* offline, use local */ });
  }

  function pushToFirebase(ch) {
    if (typeof firebase === 'undefined' || !firebase.auth || !firebase.firestore) return;
    var user = firebase.auth().currentUser;
    if (!user) return;
    var db = firebase.firestore();
    db.collection('users').doc(user.uid).collection('flashcards').doc(ch)
      .set({ cards: progress, updatedAt: firebase.firestore.FieldValue.serverTimestamp() })
      .catch(function () { });
  }

  function mergeProgress(local, remote) {
    var merged = {};
    var allKeys = Object.keys(local);
    Object.keys(remote).forEach(function (k) {
      if (allKeys.indexOf(k) === -1) allKeys.push(k);
    });
    allKeys.forEach(function (k) {
      var l = local[k];
      var r = remote[k];
      if (!l) { merged[k] = r; }
      else if (!r) { merged[k] = l; }
      else {
        merged[k] = (l.lastReview || 0) >= (r.lastReview || 0) ? l : r;
      }
    });
    return merged;
  }

  // --- Queue building ---
  function buildQueue() {
    var now = Date.now();
    var due = [];
    var fresh = [];
    cards.forEach(function (c, i) {
      var p = progress[c.id];
      if (!p) {
        fresh.push(i);
      } else if ((p.nextReview || 0) <= now) {
        due.push(i);
      }
    });
    due.sort(function (a, b) {
      return ((progress[cards[a].id] || {}).nextReview || 0) -
        ((progress[cards[b].id] || {}).nextReview || 0);
    });
    queue = due.concat(fresh);
    currentIdx = 0;
  }

  // --- Rendering ---
  function renderKaTeX(el) {
    if (typeof katex === 'undefined') return;
    var mathEls = el.querySelectorAll('.fc-math');
    for (var i = 0; i < mathEls.length; i++) {
      try {
        katex.render(mathEls[i].textContent, mathEls[i], {
          displayMode: true,
          throwOnError: false,
          trust: true
        });
      } catch (e) {
        // Leave as text if KaTeX fails
      }
    }
  }

  function renderContent(el, text, type) {
    el.innerHTML = '';
    if (!text) return;
    var lines = text.split('\n');
    var html = '';

    lines.forEach(function (line) {
      line = line.trim();
      if (!line) { html += '<br>'; return; }

      if (type === 'formula' || /\\[a-zA-Z{]/.test(line)) {
        html += '<div class="fc-math">' + escapeHtml(line) + '</div>';
      } else {
        var processed = escapeHtml(line)
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/`(.+?)`/g, '<code>$1</code>');
        html += '<p>' + processed + '</p>';
      }
    });

    el.innerHTML = html;
    renderKaTeX(el);
  }

  function escapeHtml(s) {
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(s));
    return d.innerHTML;
  }

  function showCard() {
    if (queue.length === 0 || currentIdx >= queue.length) {
      cardArea.style.display = 'none';
      doneMsg.style.display = 'block';
      updateDashboard();
      return;
    }

    doneMsg.style.display = 'none';
    cardArea.style.display = 'block';

    var card = cards[queue[currentIdx]];
    isFlipped = false;
    cardContainer.classList.remove('flipped');
    ratingBtns.style.display = 'none';

    var typeBadge = card.type === 'formula' ? 'Formula' :
      card.type === 'mcq' ? 'MCQ' : 'Concept';
    var typeClass = 'fc-type-' + card.type;

    // Build front HTML all at once (avoid innerHTML += which destroys/recreates DOM)
    var frontHtml = '<span class="fc-badge ' + typeClass + '">' + typeBadge + '</span>';
    frontHtml += '<div class="fc-front-title">' + escapeHtml(card.front) + '</div>';

    if (card.type === 'mcq' && card.options) {
      frontHtml += '<div class="fc-options">';
      var labels = ['A', 'B', 'C', 'D'];
      card.options.forEach(function (opt, i) {
        frontHtml += '<div class="fc-opt" data-opt="' + labels[i] + '">' +
          '<span class="fc-opt-label">' + labels[i] + '</span> ' +
          escapeHtml(opt) + '</div>';
      });
      frontHtml += '</div>';
    }

    frontHtml += '<div class="fc-tap-hint">Tap to reveal answer</div>';
    cardFront.innerHTML = frontHtml;

    // Build back
    var backHtml = '';
    if (card.type === 'mcq') {
      backHtml = '<div class="fc-answer">Answer: <strong>' + escapeHtml(card.answer) + '</strong></div>';
    }
    backHtml += '<div class="fc-back-content"></div>';
    cardBack.innerHTML = backHtml;

    var backContent = cardBack.querySelector('.fc-back-content');
    renderContent(backContent, card.back, card.type);

    updateProgress();
    updateDashboard();
  }

  function flipCard() {
    if (queue.length === 0 || currentIdx >= queue.length) return;
    isFlipped = !isFlipped;
    cardContainer.classList.toggle('flipped', isFlipped);
    ratingBtns.style.display = isFlipped ? 'flex' : 'none';
  }

  // --- Rating ---
  function rateCard(quality) {
    if (currentIdx >= queue.length) return;
    var card = cards[queue[currentIdx]];
    var prev = progress[card.id] || { repetition: 0, easeFactor: 2.5, interval: 0 };
    var result = calcSM2(quality, prev);
    progress[card.id] = result;

    session.reviewed++;
    if (quality >= 3) {
      session.correct++;
      session.streak++;
    } else {
      session.streak = 0;
    }

    saveProgress(currentChapter, progress);
    pushToFirebase(currentChapter);

    currentIdx++;
    updateStats();
    showCard();
  }

  function updateProgress() {
    var remaining = queue.length - currentIdx;
    var pct = queue.length > 0 ? Math.round((currentIdx / queue.length) * 100) : 100;
    progressBar.style.width = pct + '%';
    progressText.textContent = remaining + ' card' + (remaining !== 1 ? 's' : '') + ' remaining';
  }

  function updateStats() {
    statReviewed.textContent = session.reviewed;
    statStreak.textContent = session.streak;
    statAccuracy.textContent = session.reviewed > 0
      ? Math.round((session.correct / session.reviewed) * 100) + '%'
      : '\u2014';
    updateDashboard();
  }

  // --- Dashboard ---
  function updateDashboard() {
    var dashContent = document.getElementById('fc-dash-content');
    var dashTypes = document.getElementById('fc-dash-types');
    var dashInfo = document.getElementById('fc-dash-info');
    if (!dashContent || !cards.length) return;

    var now = Date.now();
    var total = cards.length;
    var newCount = 0, dueCount = 0, learningCount = 0, masteredCount = 0;
    var efSum = 0, efCount = 0;
    var earliestReview = Infinity;

    cards.forEach(function (c) {
      var p = progress[c.id];
      if (!p) {
        newCount++;
      } else if ((p.nextReview || 0) <= now) {
        dueCount++;
      } else if ((p.interval || 0) >= 21) {
        masteredCount++;
        efSum += p.easeFactor || 2.5;
        efCount++;
        if (p.nextReview < earliestReview) earliestReview = p.nextReview;
      } else {
        learningCount++;
        efSum += p.easeFactor || 2.5;
        efCount++;
        if (p.nextReview < earliestReview) earliestReview = p.nextReview;
      }
    });

    var studied = total - newCount;
    var pct = total > 0 ? Math.round((studied / total) * 100) : 0;
    var circumference = 2 * Math.PI * 34;
    var offset = circumference - (pct / 100) * circumference;

    // Ring + breakdown
    var html = '<div class="fc-ring-wrap">';
    html += '<svg class="fc-ring-svg" viewBox="0 0 80 80">';
    html += '<circle class="fc-ring-track" cx="40" cy="40" r="34"/>';
    html += '<circle class="fc-ring-fill" cx="40" cy="40" r="34" stroke-dasharray="' + circumference.toFixed(1) + '" stroke-dashoffset="' + offset.toFixed(1) + '"/>';
    html += '<text class="fc-ring-text" x="40" y="40">' + pct + '%</text>';
    html += '</svg>';
    html += '<div class="fc-ring-info">';
    html += '<div class="fc-ring-label"><strong>' + studied + '</strong> of ' + total + ' cards seen</div>';
    html += '<div class="fc-ring-label"><strong>' + masteredCount + '</strong> mastered</div>';
    html += '</div></div>';

    html += '<div class="fc-dash-rows">';
    html += dashRow('due', 'Due Now', dueCount);
    html += dashRow('new', 'New', newCount);
    html += dashRow('learning', 'Learning', learningCount);
    html += dashRow('mastered', 'Mastered', masteredCount);
    html += '</div>';
    dashContent.innerHTML = html;

    // Type breakdown
    var typeCount = { formula: 0, concept: 0, mcq: 0 };
    cards.forEach(function (c) { typeCount[c.type] = (typeCount[c.type] || 0) + 1; });
    var typeHtml = '<div class="fc-type-bar-wrap">';
    typeHtml += typeBar('Formula', typeCount.formula, total, 'formula');
    typeHtml += typeBar('Concept', typeCount.concept, total, 'concept');
    typeHtml += typeBar('MCQ', typeCount.mcq, total, 'mcq');
    typeHtml += '</div>';
    dashTypes.innerHTML = typeHtml;

    // Study info
    var avgEf = efCount > 0 ? (efSum / efCount).toFixed(2) : '\u2014';
    var infoHtml = '<div class="fc-dash-rows">';
    infoHtml += '<div class="fc-dash-row"><span class="fc-dash-row-label">Avg Ease Factor</span>';
    infoHtml += '<span class="fc-dash-row-value">' + avgEf + '</span></div>';

    var nextStr = '\u2014';
    if (earliestReview < Infinity) {
      var diff = earliestReview - now;
      if (diff <= 0) { nextStr = 'Now'; }
      else if (diff < 3600000) { nextStr = Math.ceil(diff / 60000) + 'm'; }
      else if (diff < 86400000) { nextStr = Math.ceil(diff / 3600000) + 'h'; }
      else { nextStr = Math.ceil(diff / 86400000) + 'd'; }
    }
    infoHtml += '<div class="fc-dash-row"><span class="fc-dash-row-label">Next Review</span>';
    infoHtml += '<span class="fc-dash-row-value">' + nextStr + '</span></div>';

    var queueLeft = queue.length - currentIdx;
    infoHtml += '<div class="fc-dash-row"><span class="fc-dash-row-label">Queue Left</span>';
    infoHtml += '<span class="fc-dash-row-value">' + queueLeft + '</span></div>';

    infoHtml += '</div>';
    dashInfo.innerHTML = infoHtml;
  }

  function dashRow(dotClass, label, value) {
    return '<div class="fc-dash-row">' +
      '<span class="fc-dash-row-label"><span class="fc-dot fc-dot-' + dotClass + '"></span>' + label + '</span>' +
      '<span class="fc-dash-row-value">' + value + '</span></div>';
  }

  function typeBar(label, count, total, type) {
    var pct = total > 0 ? Math.round((count / total) * 100) : 0;
    return '<div class="fc-type-row">' +
      '<span class="fc-type-row-label">' + label + '</span>' +
      '<div class="fc-type-bar-bg"><div class="fc-type-bar-fill bar-' + type + '" style="width:' + pct + '%"></div></div>' +
      '<span class="fc-type-row-count">' + count + '</span></div>';
  }

  // --- Chapter loading ---
  function loadChapter(ch) {
    currentChapter = ch;
    progress = loadProgress(ch);
    session = { reviewed: 0, correct: 0, streak: 0 };
    updateStats();

    // Highlight active chip
    var chips = chapterSelector.querySelectorAll('.fc-chip');
    for (var i = 0; i < chips.length; i++) {
      chips[i].classList.toggle('active', chips[i].dataset.chapter === ch);
    }

    cardArea.style.display = 'none';
    doneMsg.style.display = 'none';
    emptyState.style.display = 'none';

    fetch('cards/' + ch + '.json')
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        cards = data;
        buildQueue();
        if (queue.length === 0) {
          doneMsg.style.display = 'block';
        } else {
          showCard();
        }
        updateDashboard();
        syncWithFirebase(ch);
      })
      .catch(function (err) {
        console.error('Flashcards: Failed to load cards for ' + ch, err);
        emptyState.style.display = 'block';
        emptyState.textContent = 'Failed to load cards. Please check your connection and try again.';
      });
  }

  // --- Init ---
  function init() {
    // Grab DOM refs here to guarantee DOM is ready
    chapterSelector = document.getElementById('fc-chapter-selector');
    cardArea = document.getElementById('fc-card-area');
    emptyState = document.getElementById('fc-empty');
    cardContainer = document.getElementById('fc-card');
    cardFront = document.getElementById('fc-front');
    cardBack = document.getElementById('fc-back');
    ratingBtns = document.getElementById('fc-rating-btns');
    progressBar = document.getElementById('fc-progress-fill');
    progressText = document.getElementById('fc-progress-text');
    statReviewed = document.getElementById('fc-stat-reviewed');
    statStreak = document.getElementById('fc-stat-streak');
    statAccuracy = document.getElementById('fc-stat-accuracy');
    doneMsg = document.getElementById('fc-done');

    if (!chapterSelector || !cardContainer) {
      console.error('Flashcards: Required DOM elements not found');
      return;
    }

    // Build chapter chips
    Object.keys(chapters).forEach(function (key) {
      var chip = document.createElement('button');
      chip.className = 'fc-chip';
      chip.dataset.chapter = key;
      chip.textContent = chapters[key];
      chip.addEventListener('click', function () { loadChapter(key); });
      chapterSelector.appendChild(chip);
    });

    // Card flip on click
    cardContainer.addEventListener('click', function () {
      flipCard();
    });

    // Rating buttons
    var rateBtns = document.querySelectorAll('.fc-rate-btn');
    for (var i = 0; i < rateBtns.length; i++) {
      rateBtns[i].addEventListener('click', function (e) {
        e.stopPropagation();
        rateCard(parseInt(this.dataset.quality));
      });
    }

    // Touch swipe support
    var startX = 0, startY = 0;
    cardContainer.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    cardContainer.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
        if (!isFlipped) {
          flipCard();
        }
      }
    }, { passive: true });

    // Keyboard shortcuts
    document.addEventListener('keydown', function (e) {
      if (!currentChapter) return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        flipCard();
      } else if (isFlipped) {
        if (e.key === '1') rateCard(0);
        else if (e.key === '2') rateCard(2);
        else if (e.key === '3') rateCard(4);
        else if (e.key === '4') rateCard(5);
      }
    });

    // Firebase auth listener — wait a tick for defer scripts
    setTimeout(function () {
      if (typeof firebase !== 'undefined' && firebase.auth) {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user && currentChapter) {
            syncWithFirebase(currentChapter);
          }
        });
      }
    }, 0);

    // Sync on page unload
    window.addEventListener('beforeunload', function () {
      if (currentChapter) {
        saveProgress(currentChapter, progress);
      }
    });

    // Reset button
    var resetBtn = document.getElementById('fc-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (!currentChapter) return;
        if (confirm('Reset all progress for this chapter? This cannot be undone.')) {
          progress = {};
          saveProgress(currentChapter, progress);
          pushToFirebase(currentChapter);
          buildQueue();
          session = { reviewed: 0, correct: 0, streak: 0 };
          updateStats();
          doneMsg.style.display = 'none';
          showCard();
        }
      });
    }
  }

  // Wait for DOM + defer scripts
  document.addEventListener('DOMContentLoaded', init);
})();
