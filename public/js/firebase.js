// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeHjpudNrobZTrCurGSNqsRliU7XUQ3xA",
  authDomain: "haven-hills-farm.firebaseapp.com",
  projectId: "haven-hills-farm",
  storageBucket: "haven-hills-farm.appspot.com",
  messagingSenderId: "890019584729",
  appId: "1:890019584729:web:a06f64241cf952fc44bcc8",
  measurementId: "G-P5EHSYJZ6B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
