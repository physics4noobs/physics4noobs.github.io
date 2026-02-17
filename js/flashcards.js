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
      // Lapse: reset
      rep = 0;
      interval = 0;
    } else {
      // Correct response
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
    'work-power-energy': 'Work, Power & Energy'
  };
  var currentChapter = null;
  var cards = [];
  var progress = {};
  var queue = [];
  var currentIdx = 0;
  var isFlipped = false;
  var session = { reviewed: 0, correct: 0, streak: 0 };

  // --- DOM refs ---
  var chapterSelector = document.getElementById('fc-chapter-selector');
  var cardArea = document.getElementById('fc-card-area');
  var emptyState = document.getElementById('fc-empty');
  var cardContainer = document.getElementById('fc-card');
  var cardFront = document.getElementById('fc-front');
  var cardBack = document.getElementById('fc-back');
  var ratingBtns = document.getElementById('fc-rating-btns');
  var progressBar = document.getElementById('fc-progress-fill');
  var progressText = document.getElementById('fc-progress-text');
  var statReviewed = document.getElementById('fc-stat-reviewed');
  var statStreak = document.getElementById('fc-stat-streak');
  var statAccuracy = document.getElementById('fc-stat-accuracy');
  var doneMsg = document.getElementById('fc-done');

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
    // Due cards first (sorted by nextReview ascending), then new cards
    due.sort(function (a, b) {
      return ((progress[cards[a].id] || {}).nextReview || 0) -
        ((progress[cards[b].id] || {}).nextReview || 0);
    });
    queue = due.concat(fresh);
    currentIdx = 0;
  }

  // --- Rendering ---
  function renderContent(el, text, type) {
    el.innerHTML = '';
    if (!text) return;
    var lines = text.split('\n');
    var html = '';

    lines.forEach(function (line) {
      line = line.trim();
      if (!line) { html += '<br>'; return; }

      // Check if line is primarily LaTeX (contains backslash commands)
      if (type === 'formula' || /\\[a-zA-Z{]/.test(line)) {
        html += '<div class="fc-math">' + escapeHtml(line) + '</div>';
      } else {
        // Markdown-lite: bold, inline code
        var processed = escapeHtml(line)
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/`(.+?)`/g, '<code>$1</code>');
        html += '<p>' + processed + '</p>';
      }
    });

    el.innerHTML = html;

    // Render KaTeX in .fc-math spans
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

  function escapeHtml(s) {
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(s));
    return d.innerHTML;
  }

  function showCard() {
    if (queue.length === 0 || currentIdx >= queue.length) {
      cardArea.style.display = 'none';
      doneMsg.style.display = 'block';
      return;
    }

    doneMsg.style.display = 'none';
    cardArea.style.display = '';

    var card = cards[queue[currentIdx]];
    isFlipped = false;
    cardContainer.classList.remove('flipped');
    ratingBtns.style.display = 'none';

    // Card type badge
    var typeBadge = card.type === 'formula' ? 'Formula' :
      card.type === 'mcq' ? 'MCQ' : 'Concept';
    var typeClass = 'fc-type-' + card.type;

    // Front
    cardFront.innerHTML = '<span class="fc-badge ' + typeClass + '">' + typeBadge + '</span>';
    var frontTitle = document.createElement('div');
    frontTitle.className = 'fc-front-title';
    frontTitle.textContent = card.front;
    cardFront.appendChild(frontTitle);

    if (card.type === 'mcq' && card.options) {
      var optHtml = '<div class="fc-options">';
      var labels = ['A', 'B', 'C', 'D'];
      card.options.forEach(function (opt, i) {
        optHtml += '<div class="fc-opt" data-opt="' + labels[i] + '">' +
          '<span class="fc-opt-label">' + labels[i] + '</span> ' +
          escapeHtml(opt) + '</div>';
      });
      optHtml += '</div>';
      cardFront.innerHTML += optHtml;
    }

    cardFront.innerHTML += '<div class="fc-tap-hint">Tap to reveal answer</div>';

    // Back
    if (card.type === 'mcq') {
      var ansHtml = '<div class="fc-answer">Answer: <strong>' + card.answer + '</strong></div>';
      cardBack.innerHTML = ansHtml;
      var backContent = document.createElement('div');
      backContent.className = 'fc-back-content';
      renderContent(backContent, card.back, card.type);
      cardBack.appendChild(backContent);
    } else {
      cardBack.innerHTML = '';
      var backDiv = document.createElement('div');
      backDiv.className = 'fc-back-content';
      renderContent(backDiv, card.back, card.type);
      cardBack.appendChild(backDiv);
    }

    updateProgress();
  }

  function flipCard() {
    if (queue.length === 0 || currentIdx >= queue.length) return;
    isFlipped = !isFlipped;
    cardContainer.classList.toggle('flipped', isFlipped);
    if (isFlipped) {
      ratingBtns.style.display = 'flex';
    } else {
      ratingBtns.style.display = 'none';
    }
  }

  // --- Rating ---
  function rateCard(quality) {
    if (currentIdx >= queue.length) return;
    var card = cards[queue[currentIdx]];
    var prev = progress[card.id] || { repetition: 0, easeFactor: 2.5, interval: 0 };
    var result = calcSM2(quality, prev);
    progress[card.id] = result;

    // Session stats
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
    var total = cards.length;
    var done = currentIdx;
    var remaining = queue.length - currentIdx;
    var pct = queue.length > 0 ? Math.round((done / queue.length) * 100) : 100;
    progressBar.style.width = pct + '%';
    progressText.textContent = remaining + ' card' + (remaining !== 1 ? 's' : '') + ' remaining';
  }

  function updateStats() {
    statReviewed.textContent = session.reviewed;
    statStreak.textContent = session.streak;
    statAccuracy.textContent = session.reviewed > 0
      ? Math.round((session.correct / session.reviewed) * 100) + '%'
      : '—';
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
      .then(function (r) { return r.json(); })
      .then(function (data) {
        cards = data;
        buildQueue();
        if (queue.length === 0) {
          doneMsg.style.display = 'block';
        } else {
          showCard();
        }
        syncWithFirebase(ch);
      })
      .catch(function () {
        emptyState.style.display = 'block';
        emptyState.textContent = 'Failed to load cards for this chapter.';
      });
  }

  // --- Init ---
  function init() {
    // Build chapter chips
    Object.keys(chapters).forEach(function (key) {
      var chip = document.createElement('button');
      chip.className = 'fc-chip';
      chip.dataset.chapter = key;
      chip.textContent = chapters[key];
      chip.addEventListener('click', function () { loadChapter(key); });
      chapterSelector.appendChild(chip);
    });

    // Card flip
    cardContainer.addEventListener('click', function (e) {
      // Don't flip if clicking rating buttons
      if (e.target.closest('#fc-rating-btns')) return;
      flipCard();
    });

    // Rating buttons
    document.querySelectorAll('.fc-rate-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        rateCard(parseInt(this.dataset.quality));
      });
    });

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

    // Firebase auth listener
    if (typeof firebase !== 'undefined' && firebase.auth) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user && currentChapter) {
          syncWithFirebase(currentChapter);
        }
      });
    }

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

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
