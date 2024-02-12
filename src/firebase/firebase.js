import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBBcSOtcjzYNb9LM5GWFcxouKu8IPd-ZPA",
  authDomain: "learnlingo-9194d.firebaseapp.com",
  databaseURL:
    "https://learnlingo-9194d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-9194d",
  storageBucket: "learnlingo-9194d.appspot.com",
  messagingSenderId: "324267899934",
  appId: "1:324267899934:web:67f2f917a1e444a175020f",
  measurementId: "G-77F0DBEM9E",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);
