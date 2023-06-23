import { ctx, globals, entityList, recenter, canvas } from "./sharedGlobals";
import { spawnEnemy } from "./app/actions/spawnEnemy";
import { drawText } from "./app/actions/drawInputs";
import { networkStart } from "./app/actions/networkStart";
import { activationFunction } from "./app/actions/activationFunction";
import { shoot } from "./app/actions/shoot";
import { simulationReset } from "./app/actions/simulationReset";
import { displayNetwork } from "./app/actions/displayNetwork";
import { encodeNetwork } from "./app/actions/encodeDecode";



let spawn = 0;
let spawnrate = 0.03;
let spawnrateGrowth = 0.00001

export function updateDraw() {

    for (let i = 0; i < entityList.Player.length; i++) {
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
        let p1x: number;
        let p1y: number;
        let p1vx: number;
        let p1vy: number;

        for (let p=0; p<entityList.Player.length; p++) {
            px.push(entityList.Player[p].position.x);
            py.push(entityList.Player[p].position.y);
            pvx.push(entityList.Player[p].velocity.x);
            pvy.push(entityList.Player[p].velocity.y);
        }

        for (let p=0; p<entityList.Player.length; p++) {
            if (entityList.Player[p] !== undefined) { 
                p1x = entityList.Player[p].position.x
                p1y = entityList.Player[p].position.y
                p1vx = entityList.Player[p].velocity.x
                p1vy = entityList.Player[p].velocity.y

                let pxCopy = px.splice(p, 1);
                let pyCopy = py.splice(p, 1);
                let pvxCopy = pvx.splice(p, 1);
                let pvyCopy = pvy.splice(p, 1);
                
                // console.log(activationFunction(flappyY, flappyVelocity, pipeX, pipeGapY));
                let inputs: number[] = activationFunction(p1x, p1y, p1vx, p1vy, ...pvxCopy, ...pvyCopy, ...pxCopy, ...pyCopy);
    
                let outputs = entityList.NNs[p].update(0, ...inputs);
                if (outputs[0] > .5) {
                    shoot(entityList.Player[p].gunAngle, entityList.Player[p].position.x, entityList.Player[p].position.y, entityList.Player[p].bulletSpeed, 'Player', 'black');
                }
                if (outputs[1] > .5) {
                    entityList.Player[p].velocity.x += ((outputs[1]*2) - 1) * entityList.Player[p].speed;
                }
                if (outputs[2] > .5) {
                    entityList.Player[p].velocity.y += ((outputs[2]*2) - 1) * entityList.Player[p].speed;
                }
                if (outputs[3] > .5) {
                    entityList.Player[p].gunAngle = outputs[3] * Math.PI;
                }
                // console.log(outputs);
                if (entityList.Player[p].life < 1 || globals.timer > globals.timerLimit) {
                    globals.fitnessDictionary[p] = globals.score;
                    if (globals.timer <= globals.timerLimit){
                        globals.score++;
                    }
                    entityList.Player[p] = undefined;
                    if (Object.keys(globals.fitnessDictionary).length === globals.simulatedNNs) {
                        simulationReset();
                    }
                } else {
                    entityList.Player[p].update();
                    entityList.Player[p].draw();
                }
            }
        }
        
        // ctx.fillText(outputs, 10, 50);
        if (entityList.Player[0] !== undefined) {
            // console.log(entityList.NNs[0].biasMutationAmount)
            //entityList.NNs[0].biasMutationAmount, entityList.NNs[0].biasMutationRate, entityList.NNs[0].weightMutationAmount, entityList.NNs[0].weightMutationRate
            //drawText(canvas.width-100, 50, 50, pipeX, pipeGapY, flappyY, flappyVelocity);
        }
        drawText(650, 45, 100, "Generation: " + globals.generationNum.toString())
        
        displayNetwork(100, 50, canvas.width -620, canvas.height - 375, entityList.NNs[0].weightArray, entityList.NNs[0].biasArray, 0);
        //basicCheck()
        globals.timer++;
        if (globals.score > 0) {
            console.log(encodeNetwork(entityList.NNs[0].weightArray, entityList.NNs[0].biasArray));
        }
        
        
        if (!checkbox.checked) {
            globals.human = true;
            networkStart();
            
        }
    }
}


    




