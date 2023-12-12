import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyB2Xa6AI_NzCLkt_X0bZOm5JSMKUoFNuIo",
  authDomain: "modul-9-707d6.firebaseapp.com",
  databaseURL: "https://modul-9-707d6-default-rtdb.firebaseio.com",
  projectId: "modul-9-707d6",
  storageBucket: "modul-9-707d6.appspot.com",
  messagingSenderId: "385940458159",
  appId: "1:385940458159:web:bdb81644ea655673c8a25a"
});

const FIREBASE = firebase;

export default FIREBASE;