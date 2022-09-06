class Enemy {
    static numberOfEnemies = 0;
    static radius = 12;

    constructor(xpos, ypos) {
        this.type = 'normal';

        this.colour = 'red';
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
        ctx.fillStyle = this.colour;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();

    }
    update() {
        this.move();
        this.collisionCheck();
    }

    move() {
        let xDistance = player.position.x - this.position.x;
        let yDistance = player.position.y - this.position.y;
        let distance = Math.abs(xDistance) + Math.abs(yDistance);
        this.position.x += (xDistance / distance) * this.speed;
        this.position.y += (yDistance / distance) * this.speed;
    }
    collisionCheck() {
        for (let i = 0; i < entityList.playerBullet?.length; i++) {
            if (entityList.playerBullet[i].position.x > this.position.x -this.radius &&
                entityList.playerBullet[i].position.x < this.position.x + this.radius &&
                entityList.playerBullet[i].position.y > this.position.y - this.radius &&
                entityList.playerBullet[i].position.y < this.position.y + this.radius) {
                    entityList.playerBullet[i].killed = true;
                    for (let i = 0; i < entityList.enemy.length; i++) {
                        if (entityList.enemy[i].enemyNumber === this.enemyNumber) {
                           entityList.enemy.splice(i, 1);
                           changeScore(1); 
                        } 
                    }
            }
        }

        if (Math.abs(this.position.x - player.position.x) +
            Math.abs(this.position.y - player.position.y) < 
            player.radius + this.radius) {
            player.hurt();
            for (let i = 0; i < entityList.enemy.length; i++) {
                if (entityList.enemy[i].enemyNumber === this.enemyNumber) {
                   entityList.enemy.splice(i, 1);
                   changeScore(1); 
                } 
            }
        }
        
    }
    static spawnEnemy(type) {
        let random1 = Math.random();
        let random2 = Math.random();
        let x;
        let y;
        let e;
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
        if (type === 'normal') {
            e = new Enemy(x, y);  
        } else if (type === 'shooter') {
            e = new Shooter(x, y); 
        }
        entityList.enemy.push(e);
    }
}