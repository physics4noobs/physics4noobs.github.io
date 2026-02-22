/* ============================================
   PHYSICS FOR NOOBS - Simulation Tracker
   Tracks visits & time spent to Firestore
   Only loaded on simulation pages
   ============================================ */
(function() {
  if (typeof firebase === 'undefined' || !firebase.auth || !firebase.firestore) return;

  var auth = firebase.auth();
  var db = firebase.firestore();
  var startTime = Date.now();
  var simId = window.location.pathname.split('/').pop().replace('.html', '');
  var simTitle = document.title.split('|')[0].trim().replace(/^[^\w]*/, '');

  auth.onAuthStateChanged(function(user) {
    if (!user) return;

    var ref = db.collection('users').doc(user.uid).collection('simulations').doc(simId);

    ref.get().then(function(doc) {
      if (doc.exists) {
        ref.update({
          visitCount: firebase.firestore.FieldValue.increment(1),
          lastVisited: firebase.firestore.FieldValue.serverTimestamp()
        });
      } else {
        ref.set({
          name: simTitle,
          visitCount: 1,
          totalTimeSpent: 0,
          lastVisited: firebase.firestore.FieldValue.serverTimestamp()
        });
      }
    });

    function saveTime() {
      var elapsed = Math.round((Date.now() - startTime) / 1000);
      if (elapsed > 2) {
        ref.update({
          totalTimeSpent: firebase.firestore.FieldValue.increment(elapsed)
        });
        startTime = Date.now();
      }
    }

    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'hidden') saveTime();
    });

    window.addEventListener('beforeunload', saveTime);
  });
})();
