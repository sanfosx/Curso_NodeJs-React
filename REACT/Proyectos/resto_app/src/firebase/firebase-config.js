
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyC7iNxjueUipuzOeuvF782ljQ3sDfO3E",
  authDomain: "resto-app-7e642.firebaseapp.com",
  projectId: "resto-app-7e642",
  storageBucket: "resto-app-7e642.appspot.com",
  messagingSenderId: "414763261446",
  appId: "1:414763261446:web:9f7168fac9d8328bef6d87",
  measurementId: "G-Y4N9TC2E2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default firebaseConfig