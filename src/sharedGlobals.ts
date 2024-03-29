import { NN } from './app/classes/NN';
import { Player } from './app/classes/Player';
import { Shooter } from './app/classes/Shooter';
import { Enemy } from './app/classes/Enemy';
import { Bullet } from 'app/classes/Bullet';


let players = 2;
let maxBulletsPerPlayer = 3;
// globals
let globals = {pipeTimer: 100 as number,
                timer: 0 as number,
                simulatedNNs: 300 as number,
                fitnessDictionary : {} as { [key: number]: number},
                NNKeepers: 30 as number,
                NNBrain: [players*4 /*+ (players-1)*maxBulletsPerPlayer*/, 10, 8, 8, 6, 4, 4] as number[],
                bestNNs: {} as { [key: number]: string},
                mousePos: {} as { [key: string]: number},
                pressedKeys : {} as { [key: string]: number},
                mutationRateMutationRate: .3 as number,
                mutationMutationAmount: 2 as number,
                // checkpoints: [[324,66], [584,89], [806,165], [945,301], [924,445], [929,576], ] as number[][],
                checkpoints: [ [208,208], [489,122], [697,132], [907,196], [920,394], [794,481], [550,494], [350,466], [261,349], [453,292], [580,374]] as number[][],
                checkpointSize: 50 as number,
                timerLimit: 1000,
                delay: 20,
                human: false as boolean,
                generationNum: 0 as number,
                pipesPassed: 0 as number,
                score : 0 as number,
                highscore : 0 as number,
                game : undefined as ReturnType<typeof setInterval>,
                cameraLock : true,
                uid : undefined as string,
                username : undefined as string,
};
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let entityList: {
  "NNs": NN[];
  "Bullets": {[key:string]: Bullet[]};
  "Shooters": Shooter[];
  "Enemies": Enemy[];
  "Player": Player[];

} = {
  "NNs": [],
  "Bullets": {"Player": [], "Shooter": []},
  "Shooters": [],
  "Enemies": [],
  "Player": [],
};


let pressedKeys : {[keyCode: number]: boolean} = {};

window.onkeyup = function(e) { pressedKeys[e.keyCode] = false; }
window.onkeydown = function(e) { pressedKeys[e.keyCode] = true; }
const checkbox = document.getElementById("checkbox");
const rangeValue = document.getElementById("rangeValue");
const range: HTMLInputElement = document.querySelector<HTMLInputElement>('#range');



if (checkbox != null) {
  checkbox.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) {
      event.preventDefault();
    }
  });
}

if (range != null && rangeValue != null) {
  range.addEventListener("change", function(event) {
    rangeValue.innerHTML = range.value + " Simulation Speed";
    globals.delay = 20 - parseInt(range.value) * 0.02;
  });
  range.addEventListener("mousemove", function(event) {
    rangeValue.innerHTML = range.value + " Simulation Speed";
    globals.delay = 20 - parseInt(range.value) * 0.02;
  });
}
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;

function recenter() {
    centerX = canvas.width / 2
    centerY = canvas.height / 2
}


export {globals, canvas, ctx, entityList, pressedKeys, centerX, centerY, recenter};
