import { entityList, globals } from "../../sharedGlobals";
import { NN } from "../classes/NN";
import { artificialSelection, restockEntityList } from "./artificialSelection";




export function simulationReset() {
    globals.generationNum++;
    entityList.Bullets = {'Player': [], "Shooter": []}

    let fitness: number[][] = artificialSelection(10);
    restockEntityList(fitness);
    globals.timer = 0;
    

    
    
    
    // console.log(entityList.NNs);

    
}