import {globals, entityList} from './game.js';

export class Bullet {
    static numberOfBullets = 0;

    constructor(angle, x, y, speed, type, colour) {
        this.type = type;
        this.colour = colour;

        Bullet.numberOfBullets++;
        this.bulletNumber = Bullet.numberOfBullets
        
        this.angle = angle;
        this.speed = speed;
        this.position = {
            x: x,
            y: y
        }
        this.xSpeed = Math.cos(angle) * speed;
        this.ySpeed = Math.sin(angle) * speed;
        this.radius = 2;
        this.killed = false;
    }
    update() {
        this.position.x += this.xSpeed;
        this.position.y += this.ySpeed;
        let x = this.position.x
        let y = this.position.y
        if (globals.cameraLock === true) {
            x += -globals.player.position.x + centerX;
            y += -globals.player.position.y + centerY;
        }
        if (x > globals.canvas.width  || x < 0 ||
            y > globals.canvas.height || y < 0) {
                for (let i = 0; i < entityList[this.type].length; i++) {
                    if (entityList[this.type][i].bulletNumber === this.bulletNumber) {
                        entityList[this.type].splice(i, 1); 
                    } 
                }
        }
    }
    draw() {
        let x = this.position.x
        let y = this.position.y
        if (globals.cameraLock === true) {
            x += -globals.player.position.x + centerX;
            y += -globals.player.position.y + centerY;
        }
        globals.ctx.beginPath();
        globals.ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
        globals.ctx.fillStyle = this.colour;
        globals.ctx.fill();
        globals.ctx.lineWidth = 5;
        globals.ctx.strokeStyle = this.colour;
        globals.ctx.stroke();
        globals.ctx.closePath();
    }
}
