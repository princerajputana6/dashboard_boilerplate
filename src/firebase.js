import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAOynVnpocU6mAHoHWpv0oMSd76KEebP6E",
  authDomain: "thchathon.firebaseapp.com",
  projectId: "thchathon",
  storageBucket: "thchathon.appspot.com",
  messagingSenderId: "593146740950",
  appId: "1:593146740950:web:c9fcbbc1a2995c85360977",
  measurementId: "G-2L4TKJ89QH"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const TwitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider,TwitterAuthProvider, db };
