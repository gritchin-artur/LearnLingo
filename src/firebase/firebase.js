import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  databaseURL:
    "https://learnlingo-2adc7-default-rtdb.europe-west1.firebasedatabase.app/",

  apiKey: "AIzaSyCinOGSEkCUD2wBpvwXV-8IZY3tBCNQMSg",
  authDomain: "learnlingo-2adc7.firebaseapp.com",
  projectId: "learnlingo-2adc7",
  storageBucket: "learnlingoproject.appspot.com",
  messagingSenderId: "76970228337",
  appId: "1:76970228337:web:a7a67c908b0316157fd0f6",
  measurementId: "G-VFSQ9CYMSF",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);
