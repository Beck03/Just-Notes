import { initializeApp } from "firebase/app";

import { getFirestore}  from "firebase/firestore";


export const firebaseConfig = {
    apiKey: "AIzaSyCzjxRxTrCyOtLtLD0NaehJHAphCtRpGOE",
    authDomain: "just-notes-e4687.firebaseapp.com",
    projectId: "just-notes-e4687",
    storageBucket: "just-notes-e4687.appspot.com",
    messagingSenderId: "780664695921",
    appId: "1:780664695921:web:994864eabf08d0a904ffd0"
  };
 export const app = initializeApp(firebaseConfig);
 
// Initialize Cloud Firestore and get a reference to the service

export const db = getFirestore(app);