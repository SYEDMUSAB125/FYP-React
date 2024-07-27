
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCg46O58DW9ANQRCcF02_emTg9bQy1VvGU",
  authDomain: "fyp-nodemcu.firebaseapp.com",
  databaseURL: "https://fyp-nodemcu-default-rtdb.firebaseio.com",
  projectId: "fyp-nodemcu",
  storageBucket: "fyp-nodemcu.appspot.com",
  messagingSenderId: "383172049632",
  appId: "1:383172049632:web:a2fa9e1b0aed7f324f6e85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database};