import { Bullet } from "../classes/Bullet";
import { entityList } from "../../sharedGlobals";


export function shoot(angle:number, x: number, y: number, speed: number, type: string, colour: string) {
    let b = new Bullet(angle, x, y, speed, type, colour);
    entityList.Bullets.Player.push(b); 
}

