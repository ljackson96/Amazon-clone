import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDelk8Dek1W-tHq1JqlBxpkluBPW9v630g",
  authDomain: "clone-8549f.firebaseapp.com",
  projectId: "clone-8549f",
  storageBucket: "clone-8549f.appspot.com",
  messagingSenderId: "853763714364",
  appId: "1:853763714364:web:5dc374a6472cc10e190239",
  measurementId: "G-HFE2BCEWPF",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
