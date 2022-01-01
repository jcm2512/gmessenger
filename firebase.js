import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDusrmQ4bBIcscor0xmkOAUgOfjPBF432Y",
  authDomain: "g-message-26f73.firebaseapp.com",
  projectId: "g-message-26f73",
  storageBucket: "g-message-26f73.appspot.com",
  messagingSenderId: "56912138749",
  appId: "1:56912138749:web:83ccdc00c404c9e6320994",
};

// Check if firebase is already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
