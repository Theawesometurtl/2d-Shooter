import { globals, entityList } from "../../sharedGlobals";
import { Enemy } from "./Enemy";
import { Bullet } from "./Bullet";

export class Shooter extends Enemy {
    shootDistance: number;
    type: string;
    reloadSpeed: number;
    reload: number;
    colour: string;
    bulletSpeed: number;

    constructor(x: number, y: number) {
        super(x, y);
        this.shootDistance = 250;
        this.type = 'shooter';
        this.reloadSpeed = 0.01;
        this.reload = 0;
        this.colour = 'purple';
        this.bulletSpeed = 6;
    }
    update(): boolean {
        if (Math.sqrt((Math.abs(entityList.Player[0].position.x) - Math.abs(this.position.x))**2 +
            (Math.abs(entityList.Player[0].position.y) - Math.abs(this.position.y))**2) <
            this.shootDistance) {
                if (this.reload > 1) {
                    this.reload = 0;
                    let angle = Math.atan((this.position.y - entityList.Player[0].position.y) / (this.position.x - entityList.Player[0].position.x));
                    if (entityList.Player[0].position.x < this.position.x) {
                        angle += Math.PI;
                    }
                    let b = new Bullet(angle, this.position.x, this.position.y, this.bulletSpeed, 'Shooter', 'red');
                    entityList.Bullets.Shooter.push(b);
                }
                
        } else {
            super.move();
        }
        this.reload+=this.reloadSpeed;
        return super.collisionCheck();
    }
}