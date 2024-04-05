import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNQ5y5Et6c8QepoARB1DuF49WhNhwF7to",
  authDomain: "my-nikes-db.firebaseapp.com",
  projectId: "my-nikes-db",
  storageBucket: "my-nikes-db.appspot.com",
  messagingSenderId: "759589427833",
  appId: "1:759589427833:web:c0a94457b80f92743552a8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
