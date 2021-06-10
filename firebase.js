import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD0etGxVSEd859wXnVlpbThTodR0tlq0-A",
    authDomain: "amzn2clone.firebaseapp.com",
    projectId: "amzn2clone",
    storageBucket: "amzn2clone.appspot.com",
    messagingSenderId: "158711568916",
    appId: "1:158711568916:web:dd9cc66791a90242a5e501"
  };

  const app = !firebase.apps.length ?
   firebase.initializeApp(firebaseConfig)
   : firebase.app();

   const db = app.firestore();

   export default db;