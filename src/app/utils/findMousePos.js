import { globals } from "../globals.js";
export function findMousePos(event) {
    //needed to get mouse position relative to the canvas
    var rect = canvas.getBoundingClientRect();
    globals.mousePos = { x: event.clientX - rect.left, y: event.clientY - rect.top};
    //console.log(event.clientX - rect.left, event.clientY - rect.top);
}