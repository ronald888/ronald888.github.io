import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF9oxIarD4GOTBhG19IBHL66DCdEyINSU",
  authDomain: "obg-auction.firebaseapp.com",
  projectId: "obg-auction",
  storageBucket: "obg-auction.appspot.com",
  messagingSenderId: "145975081062",
  appId: "1:145975081062:web:1edae1c1547d1b8b3e15a7",
  measurementId: "G-ZRDR5HQDKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
