// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA94_vxgso6u0rA6LBXZyqyOK14nMnvDuU",
  authDomain: "user-email-password-auth-bfc9a.firebaseapp.com",
  projectId: "user-email-password-auth-bfc9a",
  storageBucket: "user-email-password-auth-bfc9a.appspot.com",
  messagingSenderId: "955284511197",
  appId: "1:955284511197:web:24f1f1b3a7f3efb1d17e34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;