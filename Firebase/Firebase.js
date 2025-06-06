// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCULsPpKGQYj4sy6aRnXRIiHirATmcDyDk",
  authDomain: "commit-logs-a6980.firebaseapp.com",
  projectId: "commit-logs-a6980",
  storageBucket: "commit-logs-a6980.firebasestorage.app",
  messagingSenderId: "831657246243",
  appId: "1:831657246243:web:1e45ecfbc15107e2237b96",
  measurementId: "G-LDFRTX6XGM"
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);
export { auth, provider, db };
