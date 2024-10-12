// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyAfEI2AHs4iRs2tdmPph4InuyZn_Dy1a9c",
  authDomain: "bazar-app-26333.firebaseapp.com",
  projectId: "bazar-app-26333",
  storageBucket: "bazar-app-26333.appspot.com",
  messagingSenderId: "589714160813",
  appId: "1:589714160813:web:3d6dbbc44f5b4a0a1fda24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);