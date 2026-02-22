/* ============================================
   PHYSICS FOR NOOBS — Onboarding System
   Welcome Modal → Guided Tour / Checklist
   ============================================ */
(function () {
  'use strict';

  var STORAGE_KEY = 'pfn-onboarding-done';
  var PAD = 10;
  var RAD = 12;

  // Early exit if already completed
  if (localStorage.getItem(STORAGE_KEY)) return;

  // --- Tour Steps ---
  var steps = [
    {
      selector: 'a.card[href="chapters.html"]',
      fallback: 'a[href="chapters.html"]',
      title: 'Browse Chapters',
      desc: 'Explore Grade XI & XII physics topics, organized by chapter with key concepts and formulas.',
      icon: '\u{1F4DA}'
    },
    {
      selector: 'a.card[href="simulations.html"]',
      fallback: 'a[href="simulations.html"]',
      title: 'Interactive Simulations',
      desc: 'Visualize projectile motion, electric fields, waves and more with hands-on simulations.',
      icon: '\u2699'
    },
    {
      selector: '.nav-links',
      title: 'Quick Navigation',
      desc: 'Jump between Chapters, Simulations, Tests, and Flashcards from the navbar.',
      icon: '\u{1F9ED}'
    },
    {
      selector: '#auth-login-btn',
      title: 'Sign In',
      desc: 'Track your progress and achievements across devices with Google Sign-In.',
      icon: '\u{1F512}'
    }
  ];

  // --- DOM References (set after creation) ---
  var welcomeOverlay, tourOverlay, cutoutRect, tooltip, tooltipArrow,
    tooltipStep, tooltipTitle, tooltipDesc, tooltipDots,
    btnBack, btnNext, checklist, checklistBody;
  var prevTarget = null;

  // --- Create all DOM ---
  function createDOM() {
    var container = document.createElement('div');
    container.innerHTML =
      // Welcome Modal
      '<div class="onb-welcome-overlay" id="onb-welcome-overlay">' +
        '<div class="onb-welcome-card">' +
          '<div class="onb-welcome-icon">\u{1F680}</div>' +
          '<h2 class="onb-welcome-title">Welcome to Physics for Noobs!</h2>' +
          '<p class="onb-welcome-desc">First time here? Take a quick tour to discover everything available.</p>' +
          '<div class="onb-welcome-actions">' +
            '<button class="onb-btn onb-btn-primary" id="onb-start-tour">Yes, show me around \u2192</button>' +
            '<button class="onb-btn onb-btn-ghost" id="onb-skip-tour">I\'ll explore myself</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      // Tour Overlay
      '<div class="onb-tour-overlay" id="onb-tour-overlay">' +
        '<svg class="onb-spotlight-svg" xmlns="http://www.w3.org/2000/svg">' +
          '<defs><mask id="onb-mask">' +
            '<rect x="0" y="0" width="100%" height="100%" fill="white"/>' +
            '<rect id="onb-cutout" x="0" y="0" width="0" height="0" rx="' + RAD + '" ry="' + RAD + '" fill="black"/>' +
          '</mask></defs>' +
          '<rect x="0" y="0" width="100%" height="100%" fill="rgba(0,0,0,0.6)" mask="url(#onb-mask)"/>' +
        '</svg>' +
        '<div class="onb-tooltip" id="onb-tooltip">' +
          '<div class="onb-tooltip-arrow" id="onb-tooltip-arrow"></div>' +
          '<div class="onb-tooltip-step" id="onb-tooltip-step"></div>' +
          '<h3 class="onb-tooltip-title" id="onb-tooltip-title"></h3>' +
          '<p class="onb-tooltip-desc" id="onb-tooltip-desc"></p>' +
          '<div class="onb-tooltip-nav">' +
            '<div class="onb-tooltip-dots" id="onb-tooltip-dots"></div>' +
            '<div class="onb-tooltip-btns">' +
              '<button class="onb-btn onb-btn-ghost onb-btn-sm" id="onb-tour-back">Back</button>' +
              '<button class="onb-btn onb-btn-primary onb-btn-sm" id="onb-tour-next">Next</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      // Checklist
      '<div class="onb-checklist" id="onb-checklist">' +
        '<div class="onb-checklist-header">' +
          '<span>\u{1F4CB} Getting Started</span>' +
          '<button class="onb-checklist-close" id="onb-checklist-close">\u00D7</button>' +
        '</div>' +
        '<div class="onb-checklist-body" id="onb-checklist-body"></div>' +
      '</div>';

    while (container.firstChild) {
      document.body.appendChild(container.firstChild);
    }

    // Cache refs
    welcomeOverlay = document.getElementById('onb-welcome-overlay');
    tourOverlay = document.getElementById('onb-tour-overlay');
    cutoutRect = document.getElementById('onb-cutout');
    tooltip = document.getElementById('onb-tooltip');
    tooltipArrow = document.getElementById('onb-tooltip-arrow');
    tooltipStep = document.getElementById('onb-tooltip-step');
    tooltipTitle = document.getElementById('onb-tooltip-title');
    tooltipDesc = document.getElementById('onb-tooltip-desc');
    tooltipDots = document.getElementById('onb-tooltip-dots');
    btnBack = document.getElementById('onb-tour-back');
    btnNext = document.getElementById('onb-tour-next');
    checklist = document.getElementById('onb-checklist');
    checklistBody = document.getElementById('onb-checklist-body');

    // Build dots
    var dotsHTML = '';
    for (var i = 0; i < steps.length; i++) {
      dotsHTML += '<span class="onb-dot" data-i="' + i + '"></span>';
    }
    tooltipDots.innerHTML = dotsHTML;
  }

  // --- Welcome Modal ---
  function showWelcome() {
    requestAnimationFrame(function () {
      welcomeOverlay.classList.add('show');
    });
  }

  function hideWelcome() {
    welcomeOverlay.classList.remove('show');
    setTimeout(function () { welcomeOverlay.style.display = 'none'; }, 400);
  }

  // --- Spotlight ---
  function updateSpotlight(el) {
    var r = el.getBoundingClientRect();
    cutoutRect.setAttribute('x', r.left - PAD);
    cutoutRect.setAttribute('y', r.top - PAD);
    cutoutRect.setAttribute('width', r.width + PAD * 2);
    cutoutRect.setAttribute('height', r.height + PAD * 2);
  }

  // --- Tooltip Positioning ---
  function positionTooltip(targetEl) {
    var tr = targetEl.getBoundingClientRect();
    // Make tooltip visible but off-screen to measure
    tooltip.style.visibility = 'hidden';
    tooltip.classList.add('visible');
    var tw = tooltip.offsetWidth;
    var th = tooltip.offsetHeight;
    tooltip.style.visibility = '';

    var spaceBelow = window.innerHeight - tr.bottom;
    var position = (spaceBelow > th + 24) ? 'bottom' : 'top';

    var top;
    if (position === 'bottom') {
      top = tr.bottom + PAD + 12;
    } else {
      top = tr.top - PAD - 12 - th;
    }

    var left = tr.left + tr.width / 2 - tw / 2;
    left = Math.max(12, Math.min(left, window.innerWidth - tw - 12));

    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
    tooltip.setAttribute('data-position', position);

    // Arrow
    var arrowLeft = tr.left + tr.width / 2 - left - 6;
    arrowLeft = Math.max(16, Math.min(arrowLeft, tw - 28));
    tooltipArrow.style.left = arrowLeft + 'px';
  }

  // --- Tour ---
  var Tour = {
    current: 0,
    active: false,

    start: function () {
      this.current = 0;
      this.active = true;
      tourOverlay.classList.add('active');
      this.goTo(0);
    },

    goTo: function (index) {
      var step = steps[index];
      var target = document.querySelector(step.selector);
      if (!target && step.fallback) target = document.querySelector(step.fallback);
      if (!target) {
        if (index < steps.length - 1) { this.goTo(index + 1); }
        else { this.end(); }
        return;
      }

      // Reset previous target
      if (prevTarget) {
        prevTarget.style.position = '';
        prevTarget.style.zIndex = '';
        prevTarget.style.pointerEvents = '';
      }

      this.current = index;

      // On mobile, open nav menu if targeting navbar elements
      if (window.innerWidth <= 768) {
        var navLinks = document.querySelector('.nav-links');
        if (navLinks && target.closest('.nav-links')) {
          navLinks.classList.add('active');
          var toggle = document.querySelector('.nav-toggle');
          if (toggle) toggle.classList.add('open');
        }
      }

      // Scroll into view
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });

      var self = this;
      setTimeout(function () {
        // Raise target above overlay
        var pos = window.getComputedStyle(target).position;
        if (pos === 'static') target.style.position = 'relative';
        target.style.zIndex = '1302';
        target.style.pointerEvents = 'auto';
        prevTarget = target;

        updateSpotlight(target);

        // Update tooltip content
        tooltipStep.textContent = 'Step ' + (index + 1) + ' of ' + steps.length;
        tooltipTitle.textContent = step.icon + ' ' + step.title;
        tooltipDesc.textContent = step.desc;

        // Update dots
        var dots = tooltipDots.querySelectorAll('.onb-dot');
        for (var d = 0; d < dots.length; d++) {
          dots[d].classList.toggle('active', d === index);
        }

        // Button states
        btnBack.style.visibility = index === 0 ? 'hidden' : 'visible';
        btnNext.textContent = index === steps.length - 1 ? 'Finish' : 'Next \u2192';

        positionTooltip(target);
        tooltip.classList.add('visible');
      }, 450);
    },

    next: function () {
      tooltip.classList.remove('visible');
      var self = this;
      setTimeout(function () {
        if (self.current < steps.length - 1) { self.goTo(self.current + 1); }
        else { self.end(); }
      }, 200);
    },

    back: function () {
      tooltip.classList.remove('visible');
      var self = this;
      setTimeout(function () {
        if (self.current > 0) { self.goTo(self.current - 1); }
      }, 200);
    },

    end: function () {
      this.active = false;
      tooltip.classList.remove('visible');
      tourOverlay.classList.remove('active');
      if (prevTarget) {
        prevTarget.style.position = '';
        prevTarget.style.zIndex = '';
        prevTarget.style.pointerEvents = '';
        prevTarget = null;
      }
      localStorage.setItem(STORAGE_KEY, '1');
    }
  };

  // --- Checklist ---
  var checklistItems = [
    { id: 'chapters', label: 'Check out Chapters', href: 'chapters.html' },
    { id: 'sims', label: 'Try a Simulation', href: 'simulations.html' },
    { id: 'login', label: 'Sign in to track progress', action: 'login' },
    { id: 'theme', label: 'Try the theme toggle', action: 'theme' }
  ];

  function showChecklist() {
    var html = '';
    checklistItems.forEach(function (item) {
      var tag = item.href ? 'a' : 'button';
      var attrs = item.href ? ' href="' + item.href + '"' : ' data-action="' + item.action + '"';
      html += '<' + tag + ' class="onb-checklist-item"' + attrs + '>' +
        '<span class="onb-check-box"></span>' +
        '<span>' + item.label + '</span>' +
      '</' + tag + '>';
    });
    checklistBody.innerHTML = html;

    // Action handlers
    checklistBody.querySelectorAll('[data-action]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var action = btn.getAttribute('data-action');
        if (action === 'login') {
          var loginBtn = document.getElementById('auth-login-btn');
          if (loginBtn) loginBtn.click();
        } else if (action === 'theme') {
          var themeBtn = document.getElementById('theme-toggle');
          if (themeBtn) themeBtn.click();
        }
        btn.classList.add('checked');
      });
    });

    setTimeout(function () { checklist.classList.add('visible'); }, 300);
  }

  function hideChecklist() {
    checklist.classList.remove('visible');
    localStorage.setItem(STORAGE_KEY, '1');
  }

  // --- Event Binding ---
  function bindEvents() {
    document.getElementById('onb-start-tour').addEventListener('click', function () {
      hideWelcome();
      setTimeout(function () { Tour.start(); }, 500);
    });

    document.getElementById('onb-skip-tour').addEventListener('click', function () {
      hideWelcome();
      setTimeout(showChecklist, 500);
    });

    btnNext.addEventListener('click', function () { Tour.next(); });
    btnBack.addEventListener('click', function () { Tour.back(); });

    // Click overlay outside tooltip to end tour
    tourOverlay.addEventListener('click', function (e) {
      if (e.target === tourOverlay || e.target.closest('.onb-spotlight-svg')) {
        Tour.end();
      }
    });

    // Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (Tour.active) Tour.end();
        if (checklist.classList.contains('visible')) hideChecklist();
        if (welcomeOverlay.classList.contains('show')) {
          hideWelcome();
          localStorage.setItem(STORAGE_KEY, '1');
        }
      }
    });

    document.getElementById('onb-checklist-close').addEventListener('click', hideChecklist);

    // Recalculate on resize
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (Tour.active && prevTarget) {
          updateSpotlight(prevTarget);
          positionTooltip(prevTarget);
        }
      }, 150);
    });
  }

  // --- Wait for Splash Screen ---
  function waitForSplash(callback) {
    var splash = document.getElementById('splash');
    if (!splash || splash.style.display === 'none') {
      setTimeout(callback, 500);
      return;
    }
    var check = setInterval(function () {
      if (splash.style.display === 'none') {
        clearInterval(check);
        setTimeout(callback, 600);
      }
    }, 200);
    // Safety: show after 6s regardless
    setTimeout(function () { clearInterval(check); callback(); }, 6000);
  }

  // --- Init ---
  function init() {
    createDOM();
    bindEvents();
    waitForSplash(showWelcome);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
