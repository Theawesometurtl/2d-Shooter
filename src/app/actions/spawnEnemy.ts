import { globals, entityList, canvas, centerX, centerY } from "../../sharedGlobals";
import { Enemy } from "../classes/Enemy";
import { Shooter } from "../classes/Shooter";

export function spawnEnemy(type:string) {
    let random1 = Math.random();
    let random2 = Math.random();
    let x: number;
    let y: number;
    let e;
    if (random1 < 0.25) {
        x = random2 * canvas.width
        y = -Enemy.radius
        
    }
    else if (random1 < 0.5) {
        x = canvas.width + Enemy.radius
        y = random2 * canvas.height

    }
    else if (random1 < 0.75) {
        x = random2 * canvas.width
        y = canvas.height + Enemy.radius

    } else {
        x = random2- Enemy.radius
        y = random2 * canvas.height

    }
    if (globals.cameraLock === true) {
        x += (entityList.Player[0].position.x -centerX);
        y += (entityList.Player[0].position.y -centerY);
    }
    if (type === 'normal') {
        e = new Enemy(x, y);  
    } else if (type === 'shooter') {
        e = new Shooter(x, y); 
    }
    entityList.Enemies.push(e);
}