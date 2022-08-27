class Enemy {
    static numberOfEnemies = 0;
    static radius = 10;

    constructor(xpos, ypos) {
        this.position = {x : xpos, y : ypos};
        this.speed = 3;
        this.radius = Enemy.radius;
        Enemy.numberOfEnemies ++;
        this.enemyNumber = Enemy.numberOfEnemies; 
        
    }
    draw() {
        ctx.beginPath();
        let x = this.position.x
        let y = this.position.y
        if (cameraLock === true) {
            x += -cameraPos.x + centerX;
            y += -cameraPos.y + centerY;
        }
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
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
                           changeScore(1); 
                        } 
                    }
            }
        }
        
    }
    static spawnEnemy() {
        let random1 = Math.random();
        let random2 = Math.random();
        let x;
        let y;
        if (random1 < 0.25) {
            x = parseInt(random2 * canvas.width)
            y = parseInt(-Enemy.radius)
            
        }
        else if (random1 < 0.5) {
            x = parseInt(canvas.width + Enemy.radius)
            y = parseInt(random2 * canvas.height)

        }
        else if (random1 < 0.75) {
            x = parseInt(random2 * canvas.width)
            y = parseInt(canvas.height + Enemy.radius)

        } else {
            x = parseInt(random2- Enemy.radius)
            y = parseInt(random2 * canvas.height)

        }
        if (cameraLock === true) {
            x += (cameraPos.x - centerX);
            y += (cameraPos.y - centerY);
        }
        let e = new Enemy(x, y);    

        entityList.enemy.push(e);
    }
}
