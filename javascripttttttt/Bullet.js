class Bullet {
    static numberOfBullets = 0;
    constructor(angle, x, y, speed) {
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
        if (this.position.x > canvas.width  || this.position.x < 0 ||
            this.position.y > canvas.height || this.position.y < 0) {
                for (let i = 0; i < entityList.bullet.length; i++) {
                    if (entityList.bullet[i].bulletNumber === this.bulletNumber) {
                        entityList.bullet.splice(i, 1); 
                    } 
                }
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.closePath();
    }
}
