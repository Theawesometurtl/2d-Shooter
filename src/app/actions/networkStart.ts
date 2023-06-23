import { centerX, centerY, entityList, globals } from "../../sharedGlobals";
import { setDynamicInterval } from "./setDynamicInterval";
import { battle, main } from "../../game";
import { Player } from "../classes/Player";
import { simulationReset } from "./simulationReset";
import { decodeNetwork } from "./encodeDecode";
import { NN } from "../classes/NN";


export function networkStart(): void {
    if (globals.human) {
        entityList.Player[0] = new Player(centerX, centerY)
    } else {
        for (let i = 0; i < globals.simulatedNNs; i++) {
            entityList.NNs.push(new NN(...globals.NNBrain));
            entityList.NNs[i].createNeuralNet(0);
            if (JSON.parse(localStorage.getItem("preTrained"))) {
                // entityList.NNs[i].fullMutate(0, 10, 0.1);
                // entityList.NNs[i].weightArray = decodededNetwork[1];
                // entityList.NNs[i].biasArray = decodededNetwork[0];
            }
            globals.fitnessDictionary[i] = i;
        }
        simulationReset();
    }
    setDynamicInterval(battle);
}