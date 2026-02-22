/* ============================================
   RANKING / LEAGUE SYSTEM
   Based on total achievements unlocked (147 max)
   ============================================ */
(function() {
  'use strict';

  var RANKS = [
    { id: 'bronze',   label: 'Bronze',   icon: '\u{1F949}', min: 0,   color: '#cd7f32' },
    { id: 'silver',   label: 'Silver',   icon: '\u{1F948}', min: 15,  color: '#c0c0c0' },
    { id: 'gold',     label: 'Gold',     icon: '\u{1F947}', min: 35,  color: '#ffd700' },
    { id: 'platinum', label: 'Platinum', icon: '\u{1F4A0}', min: 65,  color: '#00d4ff' },
    { id: 'diamond',  label: 'Diamond',  icon: '\u{1F48E}', min: 100, color: '#b9f2ff' },
    { id: 'master',   label: 'Master',   icon: '\u{1F451}', min: 131, color: '#ff2d75' }
  ];

  var TOTAL_ACHIEVEMENTS = 147;

  function getRank(count) {
    var rank = RANKS[0];
    for (var i = RANKS.length - 1; i >= 0; i--) {
      if (count >= RANKS[i].min) { rank = RANKS[i]; break; }
    }
    return rank;
  }

  function getNextRank(current) {
    for (var i = 0; i < RANKS.length; i++) {
      if (RANKS[i].id === current.id && i < RANKS.length - 1) return RANKS[i + 1];
    }
    return null;
  }

  function updateRankUI(count) {
    var rank = getRank(count);
    var next = getNextRank(rank);

    // Update avatar ring
    var menu = document.getElementById('auth-user-menu');
    if (menu) menu.setAttribute('data-rank', rank.id);

    // Update badge
    var badge = document.getElementById('auth-rank-badge');
    if (badge) {
      badge.className = 'user-rank-badge rank-' + rank.id;
    }
    var icon = document.getElementById('auth-rank-icon');
    if (icon) icon.textContent = rank.icon;
    var label = document.getElementById('auth-rank-label');
    if (label) label.textContent = rank.label;

    // Update dropdown rank display
    var tier = document.getElementById('dropdown-rank-tier');
    if (tier) {
      if (next) {
        tier.textContent = rank.icon + ' ' + rank.label + ' \u2192 ' + next.icon + ' ' + next.label;
      } else {
        tier.textContent = rank.icon + ' ' + rank.label + ' (MAX)';
      }
    }

    var fill = document.getElementById('dropdown-rank-fill');
    if (fill) {
      var pct;
      if (next) {
        var range = next.min - rank.min;
        var progress = count - rank.min;
        pct = Math.min(100, Math.round((progress / range) * 100));
      } else {
        pct = 100;
      }
      fill.style.width = pct + '%';
      fill.style.background = 'linear-gradient(90deg, ' + rank.color + ', ' + (next ? next.color : rank.color) + ')';
    }
  }

  function countAchievements(uid) {
    if (!firebase || !firebase.firestore) return;
    var db = firebase.firestore();
    db.collection('users').doc(uid).collection('achievements').get()
      .then(function(snapshot) {
        var count = 0;
        snapshot.forEach(function(doc) {
          var data = doc.data();
          for (var key in data) {
            if (data[key] && data[key].unlocked) count++;
          }
        });
        updateRankUI(count);
        // Cache locally
        try { localStorage.setItem('ae-rank-count', count); } catch(e) {}
      })
      .catch(function() {
        // Fallback to cached
        var cached = parseInt(localStorage.getItem('ae-rank-count') || '0', 10);
        updateRankUI(cached);
      });
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Show cached rank immediately
    var cached = parseInt(localStorage.getItem('ae-rank-count') || '0', 10);
    updateRankUI(cached);

    // Wait for auth
    if (typeof firebase === 'undefined' || !firebase.auth) return;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        countAchievements(user.uid);
      }
    });
  });

  // Expose for manual refresh
  window.refreshRank = function() {
    var user = firebase.auth().currentUser;
    if (user) countAchievements(user.uid);
  };
})();
