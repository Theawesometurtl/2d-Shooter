import { start } from './app/utils/start';
import { gameEnd } from './app/utils/gameEnd';
import { canvas, globals } from './sharedGlobals';
import { loginScreen, login, signUp } from './app/utils/login';
import { toMenu } from './app/toMenu.js';
import { auth, db } from './app/utils/firebaseUtils/initializeFirebase'
import { onAuthStateChanged } from 'firebase/auth';
import { ref } from 'firebase/database';
import './game.css';
import { setUserInfo } from './app/utils/firebaseUtils/setUserInfo.js';


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//event listeners for the buttons
document.getElementById("start").addEventListener("click", function() {start()});
document.getElementById("game-over").addEventListener("click", function() {gameEnd()});
document.getElementById("login-screen").addEventListener("click", function() {loginScreen()});
document.getElementById("sign-up").addEventListener("click", function() {signUp()});
document.getElementById("login").addEventListener("click", function() {login()});
document.getElementById("back").addEventListener("click", function() {toMenu()});


onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      globals.uid = user.uid;
      console.log(globals.uid);
      toMenu();
      let name = user.displayName;
      console.log(name);
      if (name === undefined && globals.username !== undefined) {
        name = globals.username; 
        } else if (name === undefined && globals.username === undefined) {
            name = 'Annonymous User';
        }
        
        let nameElement = document.getElementById('name');
        nameElement.style.display = 'block';
        nameElement.innerHTML = name;
        //setUserInfo('name', name);

    } else {
      // User is signed out
    }
  });