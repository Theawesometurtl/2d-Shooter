import { ctx, globals, entityList, recenter, canvas } from "./sharedGlobals";
import { spawnEnemy } from "./app/actions/spawnEnemy";
import { drawText } from "app/actions/drawInputs";
import { networkStart } from "app/actions/networkStart";
import { activationFunction } from "app/actions/activationFunction";



let spawn = 0;
let spawnrate = 0.03;
let spawnrateGrowth = 0.00001

export function updateDraw() {

    for (let i = 0; i < entityList.Enemies.length; i++) {
        entityList.Player[i].draw();
        if (entityList.Player[i].update()) {
            entityList.Player.splice(i, 1);
            i--;
        }
    }
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
}


export function main() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    updateDraw();
    
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

export function battle() {
    ctx.fillStyle = '#b0332a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // parralaxBackground(globals.timer, 1, 2, 3, 4, 5);
    var checkbox = document.getElementById("checkbox")  as HTMLInputElement;
    


    if (globals.human) {
        updateDraw();
        var checkbox = document.getElementById("checkbox")  as HTMLInputElement;
        if (checkbox.checked) {
            globals.human = false;
            networkStart();
        }

    } else {
        updateDraw();
        
        let px: number[] = [];
        let py: number[] = [];
        let pvx: number[] = [];
        let pvy: number[] = [];
        let bx: number[] = [];
        let by: number[] = [];
        let bvx: number[] = [];
        let bvy: number[] = [];

        for (let p=0; p<entityList.Player.length; p++) {
            px.push(entityList.Player[p].position.x);
            py.push(entityList.Player[p].position.y);
            pvx.push(entityList.Player[p].velocity.x);
            pvy.push(entityList.Player[p].velocity.y);
        }

        for (let p=0; p<entityList.Player.length; p++) {
            if (entityList.Player[p] !== undefined) { 
                

                // console.log(activationFunction(flappyY, flappyVelocity, pipeX, pipeGapY));
                let inputs: number[] = activationFunction(flappyY, flappyVelocity, pipeX, pipeGapY);
    
                let outputs = entityList.NNs[p].update(0, ...inputs);
                if (outputs[0] > .5) {
                    entityList.Flappies[f].jump();
                }
                // console.log(outputs);
                if (flappyDeathCheck(entityList.Flappies[f].position.x, entityList.Flappies[f].position.y, entityList.Flappies[f].width, entityList.Flappies[f].height)) {
                    globals.fitnessDictionary[f] = globals.timer - 2 * Math.abs(entityList.Flappies[f].position.y - entityList.Pipes[0].gapHeight);
                    entityList.Flappies[f] = undefined;
                    if (Object.keys(globals.fitnessDictionary).length === globals.simulatedNNs) {
                        simulationReset(true);
                    }
                } else {
                    entityList.Flappies[f].update();
                    entityList.Flappies[f].draw();
                }
            }
        }
        
        // ctx.fillText(outputs, 10, 50);
        if (entityList.Flappies[0] !== undefined) {
            // console.log(entityList.NNs[0].biasMutationAmount)
            //entityList.NNs[0].biasMutationAmount, entityList.NNs[0].biasMutationRate, entityList.NNs[0].weightMutationAmount, entityList.NNs[0].weightMutationRate
            //drawText(canvas.width-100, 50, 50, pipeX, pipeGapY, flappyY, flappyVelocity);
        }
        drawText(650, 45, 100, "Generation: " + globals.generationNum.toString())
        
        displayNetwork(100, 50, canvas.width -620, canvas.height - 375, entityList.NNs[0].weightArray, entityList.NNs[0].biasArray, 0);
        //basicCheck()
        globals.timer++;
        if (globals.timer > 10000) {
            console.log(encodeNetwork(entityList.NNs[0].weightArray, entityList.NNs[0].biasArray));
        }
        
        
        if (!checkbox.checked) {
            globals.human = true;
            flappyStart();
            
        }
    }
    drawText(1000, 45, 100, "Pipe Number: " + globals.pipesPassed.toString())
    globals.pipeTimer ++;
    
    if (globals.pipeTimer % 80 === 0) {
        entityList.Pipes.push(new Pipes());
    }
}


    


}

