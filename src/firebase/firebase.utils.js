import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config={
    apiKey: "AIzaSyAgHdEaNDiUp0cv_2RCevuf4HTdyLAIvMc",
    authDomain: "crwn-db-fb843.firebaseapp.com",
    databaseURL: "https://crwn-db-fb843.firebaseio.com",
    projectId: "crwn-db-fb843",
    storageBucket: "crwn-db-fb843.appspot.com",
    messagingSenderId: "696887026771",
    appId: "1:696887026771:web:3b661dd002e2ea2da952a6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();
  
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle=() => auth.signInWithPopup(provider);

  export default firebase;
