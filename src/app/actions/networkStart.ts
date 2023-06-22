import { globals } from "sharedGlobals";
import { setDynamicInterval } from "./setDynamicInterval";
import { main } from "game";

export function networkStart(): void {
    if (globals.human) {
        
    } else {

    }
    setDynamicInterval(main);
}