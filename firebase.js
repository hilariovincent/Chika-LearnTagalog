import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCMSRMlp4lQqqyP9SOL6hEaoYpnmJa0jVU",
  authDomain: "chika-learn-tagalog.firebaseapp.com",
  projectId: "chika-learn-tagalog",
  storageBucket: "chika-learn-tagalog.appspot.com",
  messagingSenderId: "495476566303",
  appId: "1:495476566303:web:3fce89fbd05c4435e1a82a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}