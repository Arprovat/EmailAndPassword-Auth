// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqHR_MY8jStzsJpbXCMoY2P1oHzB8hd_s",
  authDomain: "emailandpassword-auth-1c1ba.firebaseapp.com",
  projectId: "emailandpassword-auth-1c1ba",
  storageBucket: "emailandpassword-auth-1c1ba.appspot.com",
  messagingSenderId: "580656133104",
  appId: "1:580656133104:web:0fd93305cc951fe2b02335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;