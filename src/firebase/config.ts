// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqc4HUlyILDdkvp6abweww4aWZ1Xl3OcQ",
    authDomain: "portafolio-a2cf6.firebaseapp.com",
    projectId: "portafolio-a2cf6",
    storageBucket: "portafolio-a2cf6.appspot.com",
    messagingSenderId: "301541664466",
    appId: "1:301541664466:web:d95579ddefadc8d297ef0b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );