const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = new Player();

let enemyList = [];
for (let i = 0; i < 1; i++) {
    let enemy = new Enemy();
    enemyList.push(enemy);

}


canvas.addEventListener("click", player.shoot());
canvas.addEventListener("mousemove", findMousePos);
let mousePos = {};

let pressedKeys = {};
window.onkeyup = function(e) { pressedKeys[e.keyCode] = false; }
window.onkeydown = function(e) { pressedKeys[e.keyCode] = true; }

function findMousePos(event) {
    //needed to get mouse position relative to the canvas
    var rect = canvas.getBoundingClientRect();
    mousePos[x] = event.clientX - rect.left;
    mousePos[y] = event.clientY - rect.top;
    console.log(event.clientX - rect.left, event.clientY - rect.top);


}

function main() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    player.update();
    player.draw();
    for (let i = 0; i < enemyList.length; i++) {
        enemyList[i].update();
        enemyList[i].draw();
    }
}
setInterval(main, 30);