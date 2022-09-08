import { gameEnd } from "./utils/gameEnd";
import { globals, entityList } from "./game";
export class Player {
    constructor(xPos, yPos) {
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
            x = globals.centerX;
            y = globals.centerY;
        } else {
            x = this.position.x;
            y = this.position.y;
        }
        globals.ctx.beginPath();
        globals.ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
        globals.ctx.fillStyle = 'green';
        globals.ctx.fill();
        globals.ctx.lineWidth = 5;
        globals.ctx.strokeStyle = '#003300';
        globals.ctx.stroke();
        globals.ctx.closePath();

        let gunX = Math.cos(this.gunAngle) * this.radius;
        let gunY = Math.sin(this.gunAngle) * this.radius;
        
        //console.log(gunX, gunY, this.gunAngle, mousePos.x, mousePos.y);
        globals.ctx.beginPath();
        globals.ctx.arc(gunX + x, gunY + y, this.gunRadius, 0, 2 * Math.PI, false);
        globals.ctx.fillStyle = 'green';
        globals.ctx.fill();
        globals.ctx.lineWidth = 5;
        globals.ctx.strokeStyle = '#003300';
        globals.ctx.stroke();
        globals.ctx.closePath();
        
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
           mouseX += this.position.x -globals.centerX;//the 300 here is the center of the screen where the player starts at
           mouseY += this.position.y -globals.centerY;
        }
        
        this.gunAngle = Math.atan((this.position.y - mouseY) / (this.position.x - mouseX));
        if (mouseX < this.position.x) {
            this.gunAngle += Math.PI;
        }

        for (let i = 0; i < entityList.shooterBullet?.length; i++) {
            if (entityList.shooterBullet[i].position.x > this.position.x -this.radius &&
                entityList.shooterBullet[i].position.x < this.position.x + this.radius &&
                entityList.shooterBullet[i].position.y > this.position.y - this.radius &&
                entityList.shooterBullet[i].position.y < this.position.y + this.radius) {
                    entityList.shooterBullet.splice(i, 1);
                    this.hurt();
            }
        }
        if (this.spinAttackTimer != 50) {
            this.spinAttackTimer++;
            this.spinAttackAngle += 0.2;
            for (let i = 0; i < 6; i+=0.3) {
                let b = new Bullet(this.spinAttackAngle + i, this.position.x, this.position.y, this.bulletSpeed, 'playerBullet', 'black');
                entityList.playerBullet.push(b); 
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
