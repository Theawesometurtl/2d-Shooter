import { Bullet } from "./Bullet";
import { entityList } from "./globals";

export class Ricochet extends Bullet {
    constructor(angle, x, y, speed, type, colour) {
        super(angle, x, y, speed, type, colour);
    }
    update() {
        if (this.killed === true) {
            this.killed = false;
            let x = entityList.enemy[0]?.position.x - this.position.x;
            let y = entityList.enemy[0]?.position.y - this.position.y;
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