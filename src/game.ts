import { ctx, globals, entityList, recenter } from "./sharedGlobals";
import { spawnEnemy } from "./app/actions/spawnEnemy";



let spawn = 0;
let spawnrate = 0.03;
let spawnrateGrowth = 0.00001


export function main() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    globals.player.draw();
    globals.player.update();
    for (let i = 0; i < entityList.Enemies.length; i++) {
        entityList.Enemies[i].draw();
        if (entityList.Enemies[i].update()) {
            entityList.Enemies.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < entityList.Shooters.length; i++) {
        entityList.Shooters[i].draw();
        if (entityList.Shooters[i].update()) {
            entityList.Shooters.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < entityList.Bullets.Player.length; i++) {
        entityList.Bullets.Player[i].draw();
        if (entityList.Bullets.Player[i].update()) {
            entityList.Bullets.Player.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < entityList.Bullets.Shooter.length; i++) {
        entityList.Bullets.Shooter[i].draw();
        if (entityList.Bullets.Shooter[i].update()) {
            entityList.Bullets.Shooter.splice(i, 1);
            i--;
        }
    }
    
    
    spawn += spawnrate;
    spawnrate += spawnrateGrowth;
    if (spawn >= 1) {
        recenter();
        let type = 'normal';
        if (Math.random() > 0.75) {
            type = 'shooter'
        }
        spawnEnemy(type);
        spawn = 0;
    }

}

