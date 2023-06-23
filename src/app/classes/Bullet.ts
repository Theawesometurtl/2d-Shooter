import {globals, entityList, ctx, centerX, centerY, canvas} from '../../sharedGlobals';

export class Bullet {
    static numberOfBullets = 0;
    type: string;
    colour: string;
    bulletNumber: number;
    angle: number;
    speed: number;
    position: {[key: string]: number}
    xSpeed: number;
    ySpeed: number;
    radius: number;
    killed: boolean;

    constructor(angle: number, x: number, y: number, speed: number, type: string, colour:string) {
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
    update():boolean {
        this.position.x += this.xSpeed;
        this.position.y += this.ySpeed;
        let x = this.position.x
        let y = this.position.y
        if (globals.cameraLock === true) {
            x += -entityList.Player[0].position.x + centerX;
            y += -entityList.Player[0].position.y + centerY;
        }
        if (x > canvas.width  || x < 0 ||
            y > canvas.height || y < 0) {
                return true
        }
        return false
    }
    draw():void {
        let x = this.position.x
        let y = this.position.y
        if (globals.cameraLock === true) {
            x += -entityList.Player[0].position.x + centerX;
            y += -entityList.Player[0].position.y + centerY;
        }
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.colour;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.colour;
        ctx.stroke();
        ctx.closePath();
    }
}
