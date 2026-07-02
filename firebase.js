// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signInAnonymously,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLMFsbDC7cNZd2DUKgeTYzeqFzYXEKCnw",
  authDomain: "website-laporan-meditasi.firebaseapp.com",
  projectId: "website-laporan-meditasi",
  storageBucket: "website-laporan-meditasi.firebasestorage.app",
  messagingSenderId: "166789170194",
  appId: "1:166789170194:web:88a1d1344d5a89510fc4cb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  signInWithEmailAndPassword,
  signInAnonymously,
  onAuthStateChanged,
  signOut
};