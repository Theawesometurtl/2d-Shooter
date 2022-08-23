const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


class Player {
    constructor() {
        this.position = {
            x : 300,
            y : 300
        };
        this.velocity = {
            x : 0,
            y : 0
        };
        this.speed = 3;
        this.radius = 10;
        this.gunRadius = 2;
        this.drag = 0.7;
        this.maxSpeed = 12;
        this.gunAngle = 0;
        this.bulletSpeed = 7;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.closePath();

        let gunX = Math.cos(this.gunAngle) * this.radius;
        let gunY = Math.sin(this.gunAngle) * this.radius;
        
        //console.log(gunX, gunY, this.gunAngle, mousePos.x, mousePos.y);
        ctx.beginPath();
        ctx.arc(gunX + this.position.x, gunY + this.position.y, this.gunRadius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.closePath();
        
    }
    update() {
        if (Math.abs(this.velocity.x) + Math.abs(this.velocity.y) < this.maxSpeed) {
            if (pressedKeys[87]) {//w
            this.velocity.y += -this.speed;
        }
        if (pressedKeys[65]) {//a
            this.velocity.x += -this.speed;
        }
        if (pressedKeys[83]) {//s
            this.velocity.y += this.speed;
        }
        if (pressedKeys[68]) {//d
            this.velocity.x += this.speed;
        }
        }
        

        this.velocity.x *= this.drag;
        this.velocity.y *= this.drag;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        this.gunAngle = Math.atan(((this.position.y - mousePos.y) / (this.position.x - mousePos.x)));
        if (mousePos.x < this.position.x) {
            this.gunAngle += Math.PI;
        }

        for (let i = 0; i < entityList.enemy?.length; i++) {
            if (entityList.enemy[i].position.x > this.position.x - this.radius &&
                entityList.enemy[i].position.x < this.position.x + this.radius &&
                entityList.enemy[i].position.y > this.position.y - this.radius &&
                entityList.enemy[i].position.y < this.position.y + this.radius) {
                    gameEnd();
                    playing = false;
            }
        }
        
        //console.log("x velocity: " + this.velocity.x + ", y velocity: " + this.velocity.y);
    }
}

class Bullet {
    static numberOfBullets = 0;
    constructor(angle, x, y, speed) {
        Bullet.numberOfBullets++;
        this.bulletNumber = Bullet.numberOfBullets
        this.angle = angle;
        this.position = {
            x: x,
            y: y
        }
        this.xSpeed = Math.cos(angle) * speed;
        this.ySpeed = Math.sin(angle) * speed;
        this.radius = 2;
    }
    update() {
        this.position.x += this.xSpeed;
        this.position.y += this.ySpeed;
        if (this.position.x > canvas.width  || this.position.x < 0 ||
            this.position.y > canvas.height || this.position.y < 0) {
                for (let i = 0; i < entityList.bullet.length; i++) {
                    if (entityList.bullet[i].bulletNumber === this.bulletNumber) {
                        entityList.bullet.splice(i, 1); 
                    } 
                }
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.closePath();
    }
}

class Enemy {
    static numberOfEnemies = 0;

    constructor(xpos, ypos) {
        this.position = {x : xpos, y : ypos};
        this.speed = 3;
        this.radius = 10;
        Enemy.numberOfEnemies ++;
        this.enemyNumber = Enemy.numberOfEnemies; 
        
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();

    }
    update() {
        let xDistance = player.position.x - this.position.x;
        let yDistance = player.position.y - this.position.y;
        let distance = Math.abs(xDistance) + Math.abs(yDistance);
        this.position.x += (xDistance / distance) * this.speed;
        this.position.y += (yDistance / distance) * this.speed;

        for (let i = 0; i < entityList.bullet?.length; i++) {
            if (entityList.bullet[i].position.x > this.position.x -this.radius &&
                entityList.bullet[i].position.x < this.position.x + this.radius &&
                entityList.bullet[i].position.y > this.position.y - this.radius &&
                entityList.bullet[i].position.y < this.position.y + this.radius) {
                    for (let i = 0; i < entityList.enemy.length; i++) {
                        if (entityList.enemy[i].enemyNumber === this.enemyNumber) {
                           entityList.enemy.splice(i, 1); 
                        } 
                    }
            }
        }
        
    }
}

let player = new Player();

let entityList = {};
entityList.enemy = [];
entityList.bullet = [];
for (let i = 0; i < 10; i++) {
    let enemy = new Enemy(Math.random()* 500, Math.random()* 500);
    entityList.enemy.push(enemy);

}

function main() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (const [key, value] of Object.entries(entityList)) {
        //console.log(key, value);
        for (let j = 0; j < entityList[key]?.length; j++) {
        entityList[key][j].update();
        try {//I have no clue at all why this part of code will give an error when the enemy is destroyed but this works ig
        entityList[key][j].draw();
        }
        catch (e) {
        }
        
        
    }
    }
    player.update();
    player.draw();
}
setInterval(main, 30);


canvas.addEventListener("click", function(){
    b = new Bullet(player.gunAngle, player.position.x, player.position.y, player.bulletSpeed);
    entityList.bullet.push(b);
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