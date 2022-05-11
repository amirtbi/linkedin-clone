// import firebase
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC6Q5u0mhlRhhzQDLNh0vMwzqlyyQkw2Sg",
  authDomain: "linkedin-clone-3aced.firebaseapp.com",
  databaseURL: "https://linkedin-clone-3aced-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-3aced",
  storageBucket: "linkedin-clone-3aced.appspot.com",
  messagingSenderId: "972907753183",
  appId: "1:972907753183:web:143f8e5a1d0aaf5f05c36a",
};
// Initialize app
const fbApp = firebase.initializeApp(firebaseConfig);
// data base
const db = getFirestore(fbApp);
//Auth
// const auth = firebase.auth();

export { db };
