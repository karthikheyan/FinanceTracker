import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDAf0XY_9ZfOdGIe9-0QlviTC2iMVDGr-w",
    authDomain: "expensetracker-1f0d9.firebaseapp.com",
    projectId: "expensetracker-1f0d9",
    storageBucket: "expensetracker-1f0d9.appspot.com",
    messagingSenderId: "964334887736",
    appId: "1:964334887736:web:2efaa1dbe75c42366017cd"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();
  const timeStamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timeStamp}

