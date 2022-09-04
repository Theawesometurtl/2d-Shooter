
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";//why did I decide to add all this?
var firebase = require('firebase');
var firebaseui = require('firebaseui');
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  //const displayName = user.displayName;
  //const email = user.email;
  //const photoURL = user.photoURL;
  //const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};




// Initialize Realtime Database and get a reference to the service
const db = getDatabase();
set(ref(db, 'users/' + userId), {
    username: 'steve'
  });


