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
                           changeScore(1); 
                        } 
                    }
            }
        }
        
    }
    static spawnEnemy() {
        let random1 = Math.random();
        let random2 = Math.random();
        let e;
        if (random1 < 0.25) {
            let x = parseInt(random2 * canvas.width)
            let y = parseInt(-this.radius)
            console.log(x, y);
            e = new Enemy(x, y);    
        }
        else if (random1 < 0.5) {
            let x = parseInt(canvas.width + this.radius)
            let y = parseInt(random2 * canvas.height)
            e = new Enemy(x, y);
        }
        else if (random1 < 0.75) {
            let x = parseInt(random2 * canvas.widt)
            let y = parseInt(canvas.height + this.radius)
            e = new Enemy(x, y);
        } else {
            let x = parseInt(random2-this.radius)
            let y = parseInt(random2 * canvas.height)
            e = new Enemy(x, y);
        }
        entityList.enemy.push(e);
        console.log(e, entityList.enemy )
    }
}
