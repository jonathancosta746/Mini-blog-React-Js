// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw6_49YzvofE9_nZB04GPsPM5b9FTHKuY",
  authDomain: "miniblog-602e4.firebaseapp.com",
  projectId: "miniblog-602e4",
  storageBucket: "miniblog-602e4.appspot.com",
  messagingSenderId: "448611370022",
  appId: "1:448611370022:web:e03ab7fcec31eb126d52e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};