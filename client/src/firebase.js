// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "open-blog-d078b.firebaseapp.com",
  projectId: "open-blog-d078b",
  storageBucket: "open-blog-d078b.appspot.com",
  messagingSenderId: "1028952236109",
  appId: "1:1028952236109:web:e12ce704ffdcc0ba5bfc04"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

