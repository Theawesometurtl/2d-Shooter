import { globals, entityList } from "./globals.js";
import { Enemy } from "./Enemy.js";
import { Bullet } from "./Bullet.js";

export class Shooter extends Enemy {
    constructor(x, y) {
        super(x, y);
        this.shootDistance = 300;
        this.type = 'shooter';
        this.reloadSpeed = 0.01;
        this.reload = 0;
        this.colour = 'purple';
        this.bulletSpeed = 4;
    }
    update() {
        if (Math.abs(globals.player.position.x - this.position.x) +
            Math.abs(globals.player.position.y - this.position.y) <
            this.shootDistance) {
                if (this.reload > 1) {
                    this.reload = 0;
                    let angle = Math.atan((this.position.y - globals.player.position.y) / (this.position.x - globals.player.position.x));
                    if (globals.player.position.x < this.position.x) {
                        angle += Math.PI;
                    }
                    let b = new Bullet(angle, this.position.x, this.position.y, this.bulletSpeed, 'shooterBullet', 'red');
                    entityList.shooterBullet.push(b);
                }
                
        } else {
            super.move();
        }
        super.collisionCheck();
        this.reload+=this.reloadSpeed;
    }
}