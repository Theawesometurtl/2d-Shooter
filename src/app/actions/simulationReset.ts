import { entityList, globals, centerX, centerY } from "../../sharedGlobals";
import { NN } from "../classes/NN";
import { artificialSelection, restockEntityList } from "./artificialSelection";
import { Player } from "../classes/Player";
import { setDynamicInterval } from "./setDynamicInterval";



export function simulationReset() {
    globals.generationNum++;
    entityList.Bullets = {'Player': [], "Shooter": []}
    entityList.Player = [new Player(centerX, centerY)]
    entityList.Shooters = []
    entityList.Enemies = []

    let fitness: number[][] = artificialSelection(10);
    restockEntityList(fitness);
    globals.timer = 0;
    
    

    
    
    
    // console.log(entityList.NNs);

    
}