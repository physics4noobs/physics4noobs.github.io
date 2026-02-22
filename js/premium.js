/* ============================================
   PREMIUM / PAYWALL INFRASTRUCTURE

   Reads premium status from Firestore user doc.
   Gates content behind data-premium-required attribute.

   Firestore schema (users/{uid}):
     {
       premium: true | false,
       premiumSince: timestamp,    // set by payment webhook
       premiumPlan: "monthly" | "yearly" | "lifetime",
       premiumExpiry: timestamp    // null for lifetime
     }

   Usage:
     <div data-premium-required>
       ...premium content...
     </div>

   The script will:
   - If not logged in → show auth gate (delegates to auth-gate.js)
   - If logged in but not premium → show upgrade prompt
   - If logged in and premium → show content

   To integrate a payment provider later:
   1. Create a Firebase Cloud Function that handles payment webhooks
   2. On successful payment, write { premium: true, ... } to users/{uid}
   3. This script picks it up automatically

   ============================================ */
(function() {
  'use strict';

  // Premium state — accessible globally
  window.userPremium = {
    loaded: false,
    active: false,
    plan: null,
    expiry: null
  };

  // Event for other scripts to listen to
  function emitPremiumEvent() {
    window.dispatchEvent(new CustomEvent('premium-status-changed', {
      detail: window.userPremium
    }));
  }

  // Check if premium has expired
  function isPremiumActive(data) {
    if (!data || !data.premium) return false;
    if (!data.premiumExpiry) return true; // lifetime
    var expiry = data.premiumExpiry;
    if (expiry.toDate) expiry = expiry.toDate(); // Firestore Timestamp
    return new Date() < expiry;
  }

  // Fetch premium status from Firestore
  function fetchPremiumStatus(uid) {
    if (!firebase.firestore) return;
    var db = firebase.firestore();

    db.collection('users').doc(uid).get()
      .then(function(doc) {
        var data = doc.exists ? doc.data() : {};
        var active = isPremiumActive(data);

        window.userPremium = {
          loaded: true,
          active: active,
          plan: data.premiumPlan || null,
          expiry: data.premiumExpiry || null
        };

        // Cache locally for instant load next time
        try {
          localStorage.setItem('ae-premium', JSON.stringify({
            active: active,
            plan: data.premiumPlan || null,
            ts: Date.now()
          }));
        } catch(e) {}

        emitPremiumEvent();
        updatePremiumGates();
      })
      .catch(function() {
        // Fallback to cache
        loadCachedPremium();
        updatePremiumGates();
      });

    // Also listen for real-time changes (e.g. payment completes while page is open)
    db.collection('users').doc(uid).onSnapshot(function(doc) {
      var data = doc.exists ? doc.data() : {};
      var active = isPremiumActive(data);

      window.userPremium.loaded = true;
      window.userPremium.active = active;
      window.userPremium.plan = data.premiumPlan || null;
      window.userPremium.expiry = data.premiumExpiry || null;

      emitPremiumEvent();
      updatePremiumGates();
    });
  }

  function loadCachedPremium() {
    try {
      var cached = JSON.parse(localStorage.getItem('ae-premium') || 'null');
      if (cached && (Date.now() - cached.ts) < 86400000) { // 24h cache
        window.userPremium.loaded = true;
        window.userPremium.active = cached.active;
        window.userPremium.plan = cached.plan;
      }
    } catch(e) {}
  }

  // Build upgrade prompt UI
  function buildUpgradePrompt(container) {
    var prompt = document.createElement('div');
    prompt.className = 'premium-gate';
    prompt.innerHTML =
      '<div class="premium-gate-inner">' +
        '<div class="premium-gate-badge">PRO</div>' +
        '<h2>Premium Content</h2>' +
        '<p>This content is part of the Physics for Noobs Pro experience. Upgrade to unlock advanced simulations, exclusive flashcard sets, and detailed solutions.</p>' +
        '<div class="premium-gate-features">' +
          '<div class="premium-feature"><span>&#128161;</span> Advanced simulations &amp; deep dives</div>' +
          '<div class="premium-feature"><span>&#128221;</span> Detailed step-by-step solutions</div>' +
          '<div class="premium-feature"><span>&#127183;</span> Exclusive flashcard decks</div>' +
          '<div class="premium-feature"><span>&#9889;</span> Priority support &amp; updates</div>' +
        '</div>' +
        '<button class="premium-gate-btn" id="premium-upgrade-btn">' +
          'Upgrade to Pro' +
        '</button>' +
        '<p class="premium-gate-note">One-time payment. No recurring charges.</p>' +
      '</div>';

    container.parentNode.insertBefore(prompt, container);

    // Wire upgrade button
    // TODO: Replace with actual payment flow (Razorpay/Stripe)
    var upgradeBtn = prompt.querySelector('#premium-upgrade-btn');
    if (upgradeBtn) {
      upgradeBtn.addEventListener('click', function() {
        // Placeholder: open payment link
        // When payment provider is integrated, replace this with:
        //   window.open('https://your-razorpay-link.com', '_blank');
        // or trigger Razorpay checkout modal
        alert('Payment integration coming soon! Contact us for early access.');
      });
    }

    return prompt;
  }

  // Update all premium gates on the page
  var prompts = [];
  function updatePremiumGates() {
    var gates = document.querySelectorAll('[data-premium-required]');
    if (!gates.length) return;

    gates.forEach(function(gated, i) {
      var user = firebase.auth().currentUser;

      if (!user) {
        // Not logged in — auth-gate.js handles this if present
        // If no auth-gate, hide content
        gated.style.display = 'none';
        if (prompts[i]) prompts[i].style.display = '';
        return;
      }

      if (window.userPremium.active) {
        // Premium user — show content
        gated.style.display = '';
        if (prompts[i]) prompts[i].style.display = 'none';
      } else {
        // Logged in but not premium — show upgrade prompt
        gated.style.display = 'none';
        if (!prompts[i]) {
          prompts[i] = buildUpgradePrompt(gated);
        }
        prompts[i].style.display = '';
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Load cached premium for instant render
    loadCachedPremium();

    var gates = document.querySelectorAll('[data-premium-required]');
    if (!gates.length) return;

    // Initially hide premium content
    gates.forEach(function(g) { g.style.display = 'none'; });

    if (typeof firebase === 'undefined' || !firebase.auth) return;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        fetchPremiumStatus(user.uid);
      } else {
        window.userPremium = { loaded: true, active: false, plan: null, expiry: null };
        localStorage.removeItem('ae-premium');
        emitPremiumEvent();
        updatePremiumGates();
      }
    });
  });

  // Expose for manual check
  window.checkPremium = function() {
    var user = firebase.auth().currentUser;
    if (user) fetchPremiumStatus(user.uid);
  };
})();
