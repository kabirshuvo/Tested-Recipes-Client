// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('environment variable', import.meta.env.VITE_PASS)

const firebaseConfig = {
  apiKey: "AIzaSyAjucp0JJDR9wsG3F5zA1IxOrwUH7_moYQ",
  authDomain: "tested-recipes.firebaseapp.com",
  projectId: "tested-recipes",
  storageBucket: "tested-recipes.appspot.com",
  messagingSenderId: "27139863733",
  appId: "1:27139863733:web:f79a73d56b3ea6b230bafc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;