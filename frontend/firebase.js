// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB98dq5KNDbEovh3-JmI8AVeveW_UptcXw",
  authDomain: "ajtitan-aconews.firebaseapp.com",
  projectId: "ajtitan-aconews",
  storageBucket: "ajtitan-aconews.appspot.com",
  messagingSenderId: "1040485170342",
  appId: "1:1040485170342:web:f1de8b8afae878cf148867",
  measurementId: "G-GZZ0YE3KL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);