/* ============================================
   PHYSICS FOR NOOBS - Firebase Configuration

   SETUP: Replace the placeholder values below with
   your Firebase project config from:
   https://console.firebase.google.com

   Steps:
   1. Create a Firebase project
   2. Enable Google sign-in (Authentication > Sign-in method)
   3. Create Firestore database (asia-south1, test mode)
   4. Add your domain to authorized domains
   5. Copy your config object below
   ============================================ */
var firebaseConfig = {
  apiKey: "AIzaSyBlV3_E2R9B5kZw7PIXF976i2AuTekj1l8",
  authDomain: "axomiya-engineer.firebaseapp.com",
  projectId: "axomiya-engineer",
  storageBucket: "axomiya-engineer.firebasestorage.app",
  messagingSenderId: "83496348403",
  appId: "1:83496348403:web:a38cc9f9c84eb60a476586"
};

if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);

  // Fix Safari blocking Firestore WebChannel (CORS access control errors)
  if (firebase.firestore) {
    firebase.firestore().settings({ experimentalForceLongPolling: true });
  }
}
