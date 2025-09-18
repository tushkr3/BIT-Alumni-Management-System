import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYsTu8zjguKmL7Hcjt3PjVzqjdQK4pclw",
    authDomain: "bit-alumni-5d63c.firebaseapp.com",
    projectId: "bit-alumni-5d63c",
    storageBucket: "bit-alumni-5d63c.firebasestorage.app",
    messagingSenderId: "283149358287",
    appId: "1:283149358287:web:1206eb48f47d8bf3cf53ba",
    measurementId: "G-RRPZ9NFXGJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, db, googleProvider, facebookProvider };
