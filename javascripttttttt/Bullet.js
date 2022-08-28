class Bullet {
    static numberOfBullets = 0;

    constructor(angle, x, y, speed, type, colour) {
        this.type = type;
        this.colour = colour;

        Bullet.numberOfBullets++;
        this.bulletNumber = Bullet.numberOfBullets
        
        this.angle = angle;
        this.position = {
            x: x,
            y: y
        }
        this.xSpeed = Math.cos(angle) * speed;
        this.ySpeed = Math.sin(angle) * speed;
        this.radius = 2;
        
    }
    update() {
        this.position.x += this.xSpeed;
        this.position.y += this.ySpeed;
        let x = this.position.x
        let y = this.position.y
        if (cameraLock === true) {
            x += -cameraPos.x + centerX;
            y += -cameraPos.y + centerY;
        }
        if (x > canvas.width  || x < 0 ||
            y > canvas.height || y < 0) {
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
        if (cameraLock === true) {
            x += -cameraPos.x + centerX;
            y += -cameraPos.y + centerY;
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
