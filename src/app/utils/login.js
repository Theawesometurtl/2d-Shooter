import { globals, canvas } from '../globals.js';
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";//why did I decide to add all this?
import { getAnalytics } from "firebase/analytics";
import { createUser, loginUser } from './createUser.js';
import { toMenu } from '../toMenu.js';

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
export const auth = getAuth(app);
const db = getDatabase(app);

onAuthStateChanged(auth, (user) => {
  console.log('I say hello first!')
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    globals.uid = user.uid;
    toMenu();
    console.log('hi')
    // ...
  } else {
    // User is signed out
    // ...
  }
});


export function setHighscore(highscore) {
  if (globals.uid !== undefined) {
    set(ref(db, globals.uid), {
        'highscore': highscore
      });
  }
}

export function setName(name) {
  if (globals.uid !== undefined) {
    set(ref(db, globals.uid), {
        'name': name
      });
  }
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

export function signUp() {
  let nameElement = document.getElementById("name");
  let emailElement = document.getElementById("email");
  let passwordElement = document.getElementById("password");
  let name = nameElement.value;
  let email = emailElement.value;
  let password = passwordElement.value;
  
  emailElement.value = '';
  passwordElement.value = '';
  createUser(email, password);
  setName(name);
}

export function login() {
    let nameElement = document.getElementById("name");
    let emailElement = document.getElementById("email");
    let passwordElement = document.getElementById("password");
    let name = nameElement.value;
    let email = emailElement.value;
    let password = passwordElement.value;
    
    emailElement.value = '';
    passwordElement.value = '';
    loginUser(email, password);
    setName(name);

}