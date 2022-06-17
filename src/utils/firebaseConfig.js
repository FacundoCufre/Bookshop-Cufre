// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuNc3uh7udhBcQ7qLanSyTBvzr4QX6RXE",
  authDomain: "mangashop-cufre.firebaseapp.com",
  projectId: "mangashop-cufre",
  storageBucket: "mangashop-cufre.appspot.com",
  messagingSenderId: "601698532804",
  appId: "1:601698532804:web:e35908ddc6547c335af891"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db