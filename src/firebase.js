import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyASrQ1oMgdsgJQpSmUwSV52XerbEmS4kJE",
    authDomain: "linkedin-clone-72287.firebaseapp.com",
    projectId: "linkedin-clone-72287",
    storageBucket: "linkedin-clone-72287.appspot.com",
    messagingSenderId: "211140181399",
    appId: "1:211140181399:web:3feb3594dadc08209718d2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };