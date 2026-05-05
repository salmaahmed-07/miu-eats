/**
 * Firebase Shared Configuration
 */
const firebaseConfig = {
  apiKey: "AIzaSyBWrDOKLEN2Ds12A2WMsa-pZTCqwCT_Pxk",
  authDomain: "miu-eats.firebaseapp.com",
  projectId: "miu-eats",
  storageBucket: "miu-eats.firebasestorage.app",
  messagingSenderId: "737079181171",
  appId: "1:737079181171:web:e6a7500006146fde1c8f06",
  measurementId: "G-450LQBBPXV"
};

// Global Initialization
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
