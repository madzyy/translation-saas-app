import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDHm_4fuHfAXFUibb4npF7wHtvjyZd1c-U",
  authDomain: "saas-translate-64dc0.firebaseapp.com",
  projectId: "saas-translate-64dc0",
  storageBucket: "saas-translate-64dc0.appspot.com",
  messagingSenderId: "795593857738",
  appId: "1:795593857738:web:807374e60db3849b5e3233",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
