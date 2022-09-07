export class Shooter extends Enemy {
    constructor(x, y) {
        super(x, y);
        this.shootDistance = 300;
        this.type = 'shooter';
        this.reloadSpeed = 0.01;
        this.reload = 0;
        this.colour = 'purple';
    }
    update() {
        if (Math.abs(player.position.x - this.position.x) +
            Math.abs(player.position.y - this.position.y) <
            this.shootDistance) {
                if (this.reload > 1) {
                    this.reload = 0;
                    let angle = Math.atan((this.position.y - player.position.y) / (this.position.x - player.position.x));
                    if (player.position.x < this.position.x) {
                        angle += Math.PI;
                    }
                    let b = new Bullet(angle, this.position.x, this.position.y, player.bulletSpeed, 'shooterBullet', 'red');
                    entityList.shooterBullet.push(b);
                }
                
        } else {
            super.move();
        }
        super.collisionCheck();
        this.reload+=this.reloadSpeed;
    }
}