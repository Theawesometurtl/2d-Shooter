class Shooter extends Enemy {
    constructor(x, y) {
        super(x, y);
        this.shootDistance = 300;
    }
    update() {
        if (Math.abs(player.position.x - this.position.x) +
            Math.abs(player.position.y - this.position.y) <
            this.shootDistance) {
                let angle = Math.atan((this.position.y - player.position.y) / (this.position.x - player.position.x));
                if (player.position.x < this.position.x) {
                    angle += Math.PI;
                }
                let b = new Bullet(angle, this.position.x, this.position.y, player.bulletSpeed);
                entityList.eBullet.push(b);
        } else {
            super.move();
        }
        super.collisionCheck();
    }
}