import { globals, canvas } from '../globals.js';
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";//why did I decide to add all this?
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAAkPI-g8MRhzDjupHlZ-NOvRLDV4j8vxk",
  authDomain: "d-shooter-4f1cc.firebaseapp.com",
  databaseURL: "https://d-shooter-4f1cc-default-rtdb.firebaseio.com",
  projectId: "d-shooter-4f1cc",
  storageBucket: "d-shooter-4f1cc.appspot.com",
  messagingSenderId: "124296778100",
  appId: "1:124296778100:web:594d5cc09878b016ec9c21",
  measurementId: "G-KZ55MXP4ES"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase();

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



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase


// Initialize Realtime Database and get a reference to the service

export function setHighscore(highscore) {
  set(ref(db, 'highscore'), {
    alex: highscore
  });
}
export function loginScreen() {
    canvas.style = 'display = none';
    document.getElementById('start').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('login-screen').style.display = 'none';
    let loginInput = document.getElementsByClassName('login-input')
    for (let i = 0; i < loginInput.length; i++) {
        loginInput[i].style.display = 'block';
        
    }
}

export function login() {
    let emailElement = document.getElementById("email");
    let passwordElement = document.getElementById("password");
    let email = emailElement.value;
    let password = passwordElement.value;
    emailElement.value = '';
    passwordElement.value = '';
}