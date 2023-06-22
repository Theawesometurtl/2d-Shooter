import { gameEnd } from "../actions/gameEnd";
import { globals, entityList, ctx, centerX, centerY } from "../../sharedGlobals";
import { Bullet } from "./Bullet";
export class Player {
    position: {[key: string]: number};
    velocity: {[key: string]: number};
    speed: number;
    radius: number;
    gunRadius: number;
    drag: number;
    maxSpeed: number;
    gunAngle: number;
    bulletSpeed: number;
    life: number;
    spinAttackTimer: number;
    invulnerable: boolean;
    spinAttackAngle: number;

    constructor(xPos: number, yPos: number) {
        this.position = {
            x : xPos,
            y : yPos
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
        this.bulletSpeed = 12;
        this.life = 3;
        this.spinAttackTimer = 50;
        this.spinAttackAngle;
        this.invulnerable = false;
    }
    draw() {
        let x;
        let y;
        if (globals.cameraLock === true) {
            x = centerX;
            y = centerY;
        } else {
            x = this.position.x;
            y = this.position.y;
        }
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
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
        ctx.arc(gunX + x, gunY + y, this.gunRadius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.closePath();
        
    }
    update() {
        if (Math.abs(this.velocity.x) + Math.abs(this.velocity.y) < this.maxSpeed) {
            if (globals.pressedKeys[87]) {//w
            this.velocity.y += -this.speed;
        }
        if (globals.pressedKeys[65]) {//a
            this.velocity.x += -this.speed;
        }
        if (globals.pressedKeys[83]) {//s
            this.velocity.y += this.speed;
        }
        if (globals.pressedKeys[68]) {//d
            this.velocity.x += this.speed;
        }
        }
        

        this.velocity.x *= this.drag;
        this.velocity.y *= this.drag;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        let mouseX = globals.mousePos.x;
        let mouseY = globals.mousePos.y;

        if (globals.cameraLock === true) {
           mouseX += this.position.x -centerX;//the 300 here is the center of the screen where the player starts at
           mouseY += this.position.y -centerY;
        }
        
        this.gunAngle = Math.atan((this.position.y - mouseY) / (this.position.x - mouseX));
        if (mouseX < this.position.x) {
            this.gunAngle += Math.PI;
        }

        for (let i = 0; i < entityList.Bullets.Shooter?.length; i++) {
            if (entityList.Bullets.Shooter[i].position.x > this.position.x -this.radius &&
                entityList.Bullets.Shooter[i].position.x < this.position.x + this.radius &&
                entityList.Bullets.Shooter[i].position.y > this.position.y - this.radius &&
                entityList.Bullets.Shooter[i].position.y < this.position.y + this.radius) {
                    entityList.Bullets.Shooter.splice(i, 1);
                    this.hurt();
            }
        }
        if (this.spinAttackTimer != 50) {
            this.spinAttackTimer++;
            this.spinAttackAngle += 0.2;
            for (let i = 0; i < 6; i+=0.3) {
                let b = new Bullet(this.spinAttackAngle + i, this.position.x, this.position.y, this.bulletSpeed, 'Player', 'black');
                entityList.Bullets.Player.push(b); 
            }
            
        } else {
            this.invulnerable = false;
        }
        //console.log("x velocity: " + this.velocity.x + ", y velocity: " + this.velocity.y);
    }
    hurt() {
        if (this.invulnerable === false) {
            this.life-=1;
            if (this.life === 0) {
                gameEnd();
            }
            this.spinAttackTimer = 1;
            this.spinAttackAngle = 0;
            this.invulnerable = true;
        }
        
    }
}
