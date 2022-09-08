import { globals, entityList, canvas, centerX, centerY } from "../globals.js";
import { Enemy } from "../Enemy";
import { Shooter } from "../Shooter";

export function spawnEnemy(type) {
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
    if (globals.cameraLock === true) {
        x += (globals.player.position.x -centerX);
        y += (globals.player.position.y -centerY);
    }
    if (type === 'normal') {
        e = new Enemy(x, y);  
    } else if (type === 'shooter') {
        e = new Shooter(x, y); 
    }
    entityList.enemy.push(e);
}