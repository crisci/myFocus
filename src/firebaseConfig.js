// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBav9c_yaVux-WUX3NuKMdL5OfvUI9q0wk",
  authDomain: "myfocus-d7757.firebaseapp.com",
  projectId: "myfocus-d7757",
  storageBucket: "myfocus-d7757.appspot.com",
  messagingSenderId: "785762169036",
  appId: "1:785762169036:web:6add1eca99959ba3ce9269",
  measurementId: "G-8FJZ5N3RFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
