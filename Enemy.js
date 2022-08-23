class Enemy {
    static numberOfEnemies = 0;

    constructor(xpos, ypos) {
        this.position = {x : xpos, y : ypos};
        this.speed = 3;
        this.radius = 10;
        Enemy.numberOfEnemies ++;
        this.enemyNumber = Enemy.numberOfEnemies; 
        
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();

    }
    update() {
        let xDistance = player.position.x - this.position.x;
        let yDistance = player.position.y - this.position.y;
        let distance = Math.abs(xDistance) + Math.abs(yDistance);
        this.position.x += (xDistance / distance) * this.speed;
        this.position.y += (yDistance / distance) * this.speed;

        for (let i = 0; i < entityList.bullet?.length; i++) {
            if (entityList.bullet[i].position.x > this.position.x -this.radius &&
                entityList.bullet[i].position.x < this.position.x + this.radius &&
                entityList.bullet[i].position.y > this.position.y - this.radius &&
                entityList.bullet[i].position.y < this.position.y + this.radius) {
                    for (let i = 0; i < entityList.enemy.length; i++) {
                        if (entityList.enemy[i].enemyNumber === this.enemyNumber) {
                           entityList.enemy.splice(i, 1); 
                        } 
                    }
            }
        }
        
    }
}
