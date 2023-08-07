// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHd_2sqUlptIK9RECAZWTTmVvfEnYLMrU",
  authDomain: "taxdriverapp.firebaseapp.com",
  projectId: "taxdriverapp",
  storageBucket: "taxdriverapp.appspot.com",
  messagingSenderId: "388999252672",
  appId: "1:388999252672:web:bba85fe22db7fc97883b25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
