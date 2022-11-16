import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVM8Pl7wtfP5_DKbQIxqAbVCoqKkn7UT4",
  authDomain: "clone-abe65.firebaseapp.com",
  projectId: "clone-abe65",
  storageBucket: "clone-abe65.appspot.com",
  messagingSenderId: "155009691883",
  appId: "1:155009691883:web:7de45b01ddb7121b09ceae",
  measurementId: "G-6BS49GWV6M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
