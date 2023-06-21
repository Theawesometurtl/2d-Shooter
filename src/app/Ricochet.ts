import { Bullet } from "./Bullet";
import { entityList } from "../sharedGlobals";

export class Ricochet extends Bullet {
    constructor(angle: number, x:number, y:number, speed:number, type:string, colour:string) {
        super(angle, x, y, speed, type, colour);
    }
    update() {
        if (this.killed === true) {
            this.killed = false;
            let x = entityList.Enemies[0]?.position.x - this.position.x;
            let y = entityList.Enemies[0]?.position.y - this.position.y;
            this.angle = Math.atan((this.position.y - y) / (this.position.x - x));
            if (x < this.position.x) {
                this.angle += Math.PI;
            }
            this.xSpeed = Math.cos(this.angle) * this.speed;
            this.ySpeed = Math.sin(this.angle) * this.speed;
            
        }
        super.update();
    }
}