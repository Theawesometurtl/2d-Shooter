import { start } from './app/utils/start.js';
import { gameEnd } from './app/utils/gameEnd.js';
import { canvas } from './app/globals.js';
import { loginScreen } from './app/utils/login.js';
import './game.css';


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//event listeners for the buttons
let startbtn = document.getElementById("start").addEventListener("click", function() {start()});
let gameEndbtn = document.getElementById("game-over").addEventListener("click", function() {gameEnd()});
let loginbtn = document.getElementById("login").addEventListener("click", function() {loginScreen()});