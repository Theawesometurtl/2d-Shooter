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

        let gunAngle = Math.atan((this.position.y - mousePos.y) / (this.position.x - mousePos.x));
        let gunX = Math.cos(gunAngle) * this.radius;
        let gunY = Math.sin(gunAngle) * this.radius;
        console.log(gunX, gunY, gunAngle, mousePos.x, mousePos.y);
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
        //console.log("x velocity: " + this.velocity.x + ",                                         y velocity: " + this.velocity.y);
    }
}

class Enemy {
    constructor() {
        this.position = {x : 250, y : 250};
        this.speed = 3;
        this.radius = 10;
        
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
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
        
    }
}

let player = new Player();

let enemyList = [];
for (let i = 0; i < 1; i++) {
    let enemy = new Enemy();
    enemyList.push(enemy);

}

function main() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < enemyList.length; i++) {
        enemyList[i].update();
        enemyList[i].draw();
    }
    player.update();
    player.draw();
}
setInterval(main, 30);


canvas.addEventListener("click", findMousePos);
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