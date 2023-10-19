// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCveU3zTl67_4mphVBiBmPtplwbcdsl3fY",
  authDomain: "optician-doctor.firebaseapp.com",
  projectId: "optician-doctor",
  storageBucket: "optician-doctor.appspot.com",
  messagingSenderId: "91571966126",
  appId: "1:91571966126:web:af4ae0ec3831eb62e45d3f",
  measurementId: "G-LC6Z4H0V5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);