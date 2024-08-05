import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDD2lLzpHfQPrpstUsInKT4S_Eyo-sB4MI",
  authDomain: "discordremake-a7714.firebaseapp.com",
  projectId: "discordremake-a7714",
  storageBucket: "discordremake-a7714.appspot.com",
  messagingSenderId: "821626643114",
  appId: "1:821626643114:web:b1ce46408fc562affa66d3",
  measurementId: "G-7DVVLQLTH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
