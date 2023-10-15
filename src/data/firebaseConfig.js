// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-UP2Ti0kJgZqPRyDDsnM1ze8iN85Ltyc",
    authDomain: "studyminder-3de60.firebaseapp.com",
    projectId: "studyminder-3de60",
    storageBucket: "studyminder-3de60.appspot.com",
    messagingSenderId: "794983077863",
    appId: "1:794983077863:web:05db9bbfea2c21e0368f42",
    measurementId: "G-C2DPG54H44",
    databaseURL: "https://studyminder-3de60-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export default db;