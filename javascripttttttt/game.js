const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let centerX = 300;
let centerY = 300;
let entityList;
let score = 0;
let highscore = 0;
let spawn;
let spawnrate;
let spawnrateGrowth;
let game;
let autofire = false;
let cameraLock = true;
let cameraPos = {x: 0, y: 0};
let player = new Player();


function changeScore(addAmount) {
    score += addAmount;
    if (score > highscore) {
        highscore = score;
    }
    document.getElementById('score').innerHTML = 'Score: ' + score;
    document.getElementById('highscore').innerHTML = 'Highscore: ' + highscore;
}

function main() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    player.update();
    
    for (const [key, value] of Object.entries(entityList)) {
        for (let j = 0; j < entityList[key]?.length; j++) {
            //console.log(key, entityList[key][j]);
            entityList[key][j].update();
            try {//I have no clue at all why this part of code will give an error when the enemy is destroyed but this works ig
            entityList[key][j].draw();
            }
            catch (e) {
            }
        
        
    }
    }
    
    player.draw();
    spawn += spawnrate;
    spawnrate += spawnrateGrowth;
    if (spawn >= 1) {
        let type = 'normal';
        if (Math.random() > 0.75) {
            type = 'shooter'
        }
        Enemy.spawnEnemy(type);
        spawn = 0;
    }
    if (autofire === true) {
        b = new Bullet(player.gunAngle, player.position.x, player.position.y, player.bulletSpeed, 'black');
        entityList.playerBullet.push(b);
    }

}




canvas.addEventListener("click", function(){
    b = new Bullet(player.gunAngle, player.position.x, player.position.y, player.bulletSpeed, 'playerBullet', 'black');
    entityList.playerBullet.push(b);
    //console.log( b);
});

canvas.addEventListener("mousemove", findMousePos);
let mousePos = {};

let pressedKeys = {};
window.onkeyup = function(e) { pressedKeys[e.keyCode] = false; }
window.onkeydown = function(e) { pressedKeys[e.keyCode] = true; }

function findMousePos(event) {
    //needed to get mouse position relative to the canvas
    var rect = canvas.getBoundingClientRect();
    mousePos = { x: event.clientX - rect.left, y: event.clientY - rect.top};
    //console.log(event.clientX - rect.left, event.clientY - rect.top);


}