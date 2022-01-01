import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDusrmQ4bBIcscor0xmkOAUgOfjPBF432Y",
  authDomain: "g-message-26f73.firebaseapp.com",
  projectId: "g-message-26f73",
  storageBucket: "g-message-26f73.appspot.com",
  messagingSenderId: "56912138749",
  appId: "1:56912138749:web:83ccdc00c404c9e6320994",
};

// Check if firebase is already initialized
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
