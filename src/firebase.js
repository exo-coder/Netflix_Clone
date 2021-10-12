// Import the functions you need from the SDKs you need
//this is Firebase V-9 ... so it updated .
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration ID's .
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAzC3F-N9CXwK10YNtMVAXWWCcUNUAVHsY",
  authDomain: "netflix-clone-b2c73.firebaseapp.com",
  projectId: "netflix-clone-b2c73",
  storageBucket: "netflix-clone-b2c73.appspot.com",
  messagingSenderId: "643056875714",
  appId: "1:643056875714:web:28295cbdf3fa3daf26e35b",
  measurementId: "G-6H32GXS93T",
};

const initializeFirebase = initializeApp(firebaseConfig);

export default initializeFirebase;
