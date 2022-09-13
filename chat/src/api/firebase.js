import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-EC_fEV4vbf_s9_Up6XWZWLsiuk5exgo",
  authDomain: "gb-chat-26e63.firebaseapp.com",
  databaseURL:
    "https://gb-chat-26e63-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-chat-26e63",
  storageBucket: "gb-chat-26e63.appspot.com",
  messagingSenderId: "749760593086",
  appId: "1:749760593086:web:8eb8d5902680f250d132ef",
  measurementId: "G-KX7S7WFE8T",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const database = getDatabase(firebase);
export const auth = getAuth(firebase);
