import { start } from './app/utils/start.js';
import { gameEnd } from './app/utils/gameEnd.js';
import { canvas } from './app/globals.js';
import './game.css';


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let startbtn = document.getElementById("start");
startbtn.addEventListener("click", function() {start()});
let gameEndbtn = document.getElementById("game-over");
gameEndbtn.addEventListener("click", function() {gameEnd()});