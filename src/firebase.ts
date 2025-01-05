import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjqvXXMbzxrsoDdQuTq0l-TU9UvaNN91M",
  authDomain: "nwitter-reloaded-96415.firebaseapp.com",
  projectId: "nwitter-reloaded-96415",
  storageBucket: "nwitter-reloaded-96415.firebasestorage.app",
  messagingSenderId: "627472325355",
  appId: "1:627472325355:web:45d79cb0105c488d0ebcae"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);