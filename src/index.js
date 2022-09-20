import { start } from './app/utils/start.js';
import { gameEnd } from './app/utils/gameEnd.js';
import { canvas } from './app/globals.js';
import { loginScreen, login, signUp } from './app/utils/login.js';
import { toMenu } from './app/toMenu.js';
import './game.css';


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//event listeners for the buttons
document.getElementById("start").addEventListener("click", function() {start()});
document.getElementById("game-over").addEventListener("click", function() {gameEnd()});
document.getElementById("login-screen").addEventListener("click", function() {loginScreen()});
document.getElementById("sign-up").addEventListener("click", function() {signUp()});
document.getElementById("login").addEventListener("click", function() {login()});
document.getElementById("back").addEventListener("click", function() {toMenu()});
