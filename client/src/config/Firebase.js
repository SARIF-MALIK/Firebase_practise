// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdeMfzxNf32ggAkUq1tac8ehL3cN5nWQg",
  authDomain: "resoluteai-165c5.firebaseapp.com",
  databaseURL: "https://resoluteai-165c5-default-rtdb.firebaseio.com",
  projectId: "resoluteai-165c5",
  storageBucket: "resoluteai-165c5.appspot.com",
  messagingSenderId: "604501898482",
  appId: "1:604501898482:web:1b0a6436482432a3a90c6b",
  measurementId: "G-8WSNNJRMRM"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
const analytics = getAnalytics(app);