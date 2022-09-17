import { initializeApp } from 'firebase/app';
let globals = {
    score : 0,
    highscore : 0,
    game : undefined,
    cameraLock : true,
    mousePos : {},
    pressedKeys : {},
    player : undefined,
    uid : undefined
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
let entityList = {};

function recenter() {
    centerX = canvas.width / 2
    centerY = canvas.height / 2
}

export {globals, canvas, ctx, centerX, centerY, entityList, recenter};