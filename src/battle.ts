import { setDynamicInterval } from "./app/actions/setDynamicInterval";
import { networkStart } from "./app/actions/networkStart";
import { globals, recenter } from "./sharedGlobals";
import { battle } from "./game";

recenter()
networkStart()
setDynamicInterval(battle);
if (globals.human) {
    let checkbox: HTMLInputElement = document.getElementById("checkbox") as HTMLInputElement;
    checkbox.checked = true;
}
