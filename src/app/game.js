import { ctx, globals } from "./globals";
import { spawnEnemy } from "./utils/spawnEnemy";



let spawn = 0;
let spawnrate = 0.03;
let spawnrateGrowth = 0.00001


export function main() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    globals.player.update();
    globals.player.draw();
    for (const [key, value] of Object.entries(entityList)) {
        for (let j = 0; j < entityList[key]?.length; j++) {
            //console.log(key, entityList[key][j]);
            entityList[key][j].update();
            try {//I have no clue at all why this part of code will give an error when the enemy is destroyed but this works ig
            entityList[key][j].draw();
            }
            catch (e) {
            }
        
        
    }
    }
    
    
    spawn += spawnrate;
    spawnrate += spawnrateGrowth;
    if (spawn >= 1) {
        let type = 'normal';
        if (Math.random() > 0.75) {
            type = 'shooter'
        }
        spawnEnemy(type);
        spawn = 0;
    }

}

