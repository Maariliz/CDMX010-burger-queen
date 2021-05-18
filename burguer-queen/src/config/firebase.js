import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM9Va3Ev5yFS8FI7dC_tXnnrdWjekfXCo",
    authDomain: "burger-queen-fcab0.firebaseapp.com",
    projectId: "burger-queen-fcab0",
    storageBucket: "burger-queen-fcab0.appspot.com",
    messagingSenderId: "123357635117",
    appId: "1:123357635117:web:8d59ab75210940d52e4ea4"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const store = fb.firestore();
const storage = firebase.storage();
const auth = fb.auth();

export {auth, store, storage}
