import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbMjRT4cij7GZERsTzvWKXUGHF0CSJMdo",
  authDomain: "whatsapp-ab641.firebaseapp.com",
  databaseURL: "https://whatsapp-ab641-default-rtdb.firebaseio.com",
  projectId: "whatsapp-ab641",
  storageBucket: "whatsapp-ab641.firebasestorage.app",
  messagingSenderId: "575593648588",
  appId: "1:575593648588:web:0b822c2f5ff8d47d0b4d69",
  measurementId: "G-KRJH3KRTF2"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
 
export default firebase;