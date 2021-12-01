// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBp_ZREuoHjId0ZZGFgV-JTg4cm6nDoMBQ",
    authDomain: "personal-4993e.firebaseapp.com",
    projectId: "personal-4993e",
    storageBucket: "personal-4993e.appspot.com",
    messagingSenderId: "1049484448247",
    appId: "1:1049484448247:web:0b1bb7c3d283f9e65c9ef2",
    measurementId: "G-J0858RZKPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);