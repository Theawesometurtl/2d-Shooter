alert('hello from webpack');
import { start } from './app/utils/start.js';
import { gameEnd } from './app/utils/gameEnd.js';

const canvas = document.querySelector('canvas');
canvas.style = 'display: none';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let startbtn = document.getElementById("start");
startbtn.addEventListener("change", start());
let gameEndbtn = document.getElementById("gameEnd");
gameEndbtn.addEventListener("change", gameEnd());