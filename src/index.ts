import { start } from './app/actions/start';
import { gameEnd } from './app/actions/gameEnd';
import { canvas, globals } from './sharedGlobals';
import { loginScreen, login, signUp } from './app/actions/login';
import { toMenu } from './app/actions/toMenu';
import { auth, db } from './app/actions/firebaseUtils/initializeFirebase'
import { onAuthStateChanged } from 'firebase/auth';
import { ref } from 'firebase/database';
import './styling/game.css';
import { setUserInfo } from './app/actions/firebaseUtils/setUserInfo';


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//event listeners for the buttons
document.getElementById("start").addEventListener("click", function() {start()});
document.getElementById("game-over").addEventListener("click", function() {gameEnd()});
document.getElementById("login-screen").addEventListener("click", function() {loginScreen()});
document.getElementById("sign-up").addEventListener("click", function() {signUp()});
document.getElementById("login").addEventListener("click", function() {login()});
document.getElementById("back").addEventListener("click", function() {toMenu()});


