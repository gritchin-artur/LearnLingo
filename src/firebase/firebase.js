import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBInBWe6jQD4pxXYQKPR9VrWfxxPcA3wLY",
  authDomain: "learnlingo-1ce06.firebaseapp.com",
  databaseURL:
    "https://learnlingo-1ce06-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-1ce06",
  storageBucket: "learnlingo-1ce06.appspot.com",
  messagingSenderId: "527101704554",
  appId: "1:527101704554:web:7b6cceb044acdaa35a0d13",
  measurementId: "G-B1P30B62L9",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBInBWe6jQD4pxXYQKPR9VrWfxxPcA3wLY",
//   authDomain: "learnlingo-1ce06.firebaseapp.com",
//   databaseURL: "https://learnlingo-1ce06-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "learnlingo-1ce06",
//   storageBucket: "learnlingo-1ce06.appspot.com",
//   messagingSenderId: "527101704554",
//   appId: "1:527101704554:web:7b6cceb044acdaa35a0d13",
//   measurementId: "G-B1P30B62L9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)?
