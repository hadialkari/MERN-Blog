// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e7e5a.firebaseapp.com",
  projectId: "mern-blog-e7e5a",
  storageBucket: "mern-blog-e7e5a.appspot.com",
  messagingSenderId: "671896434905",
  appId: "1:671896434905:web:7868e8ec6878cd42f626c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

