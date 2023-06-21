import { globals, entityList, ctx, centerX, centerY} from "../sharedGlobals";
import { changeScore } from "./utils/changeScore";

export class Enemy {
    static numberOfEnemies = 0;
    static radius = 12;
    type: string;
    colour: string;
    position: {[key: string]: number};
    speed: number;
    radius: number;
    enemyNumber: number;


    constructor(xpos: number, ypos: number) {
        this.type = 'normal';

        this.colour = 'red';
        this.position = {x : xpos, y : ypos};
        this.speed = 4;
        this.radius = Enemy.radius;
        Enemy.numberOfEnemies ++;
        this.enemyNumber = Enemy.numberOfEnemies; 
        
    }
    draw() {
        ctx.beginPath();
        let x = this.position.x
        let y = this.position.y
        if (globals.cameraLock === true) {
            x += -globals.player.position.x + centerX;
            y += -globals.player.position.y + centerY;
        }
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.colour;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();

    }
    update() {
        this.move();
        this.collisionCheck();
    }

    move() {
        let xDistance = globals.player.position.x - this.position.x;
        let yDistance = globals.player.position.y - this.position.y;
        let distance = Math.abs(xDistance) + Math.abs(yDistance);
        this.position.x += (xDistance / distance) * this.speed;
        this.position.y += (yDistance / distance) * this.speed;
    }
    collisionCheck() {
        for (let i = 0; i < entityList.playerBullet?.length; i++) {
            if (entityList.playerBullet[i].position.x > this.position.x -this.radius &&
                entityList.playerBullet[i].position.x < this.position.x + this.radius &&
                entityList.playerBullet[i].position.y > this.position.y - this.radius &&
                entityList.playerBullet[i].position.y < this.position.y + this.radius) {
                    entityList.playerBullet[i].killed = true;
                    for (let i = 0; i < entityList.enemy.length; i++) {
                        if (entityList.enemy[i].enemyNumber === this.enemyNumber) {
                           entityList.enemy.splice(i, 1);
                           changeScore(1); 
                        } 
                    }
            }
        }

        if (Math.abs(this.position.x - globals.player.position.x) +
            Math.abs(this.position.y - globals.player.position.y) < 
            globals.player.radius + this.radius) {
                globals.player.hurt();
            for (let i = 0; i < entityList.enemy.length; i++) {
                if (entityList.enemy[i].enemyNumber === this.enemyNumber) {
                   entityList.enemy.splice(i, 1);
                   changeScore(1); 
                } 
            }
        }
        
    }

}
