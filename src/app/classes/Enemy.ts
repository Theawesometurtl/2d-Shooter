import { globals, entityList, ctx, centerX, centerY} from "../../sharedGlobals";
import { changeScore } from "../actions/changeScore";

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
            x += -entityList.Player[0].position.x + centerX;
            y += -entityList.Player[0].position.y + centerY;
        }
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.colour;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();

    }
    update(): boolean {
        this.move();
        return this.collisionCheck();
    }

    move() {
        let xDistance = entityList.Player[0].position.x - this.position.x;
        let yDistance = entityList.Player[0].position.y - this.position.y;
        let distance = Math.abs(xDistance) + Math.abs(yDistance);
        this.position.x += (xDistance / distance) * this.speed;
        this.position.y += (yDistance / distance) * this.speed;
    }
    collisionCheck(): boolean {
        for (let i = 0; i < entityList.Bullets.Player?.length; i++) {
            if (entityList.Bullets.Player[i].position.x > this.position.x -this.radius &&
                entityList.Bullets.Player[i].position.x < this.position.x + this.radius &&
                entityList.Bullets.Player[i].position.y > this.position.y - this.radius &&
                entityList.Bullets.Player[i].position.y < this.position.y + this.radius) {
                    entityList.Bullets.Player[i].killed = true;
                    return true;
            }
        }
        
        if (Math.abs(this.position.x - entityList.Player[0].position.x) +
        Math.abs(this.position.y - entityList.Player[0].position.y) < 
        entityList.Player[0].radius + this.radius) {
            entityList.Player[0].hurt();
            for (let i = 0; i < entityList.Enemies.length; i++) {
                if (entityList.Enemies[i].enemyNumber === this.enemyNumber) {
                    entityList.Enemies.splice(i, 1);
                    changeScore(1); 
                } 
            }
        }
        return false;
        
    }

}
