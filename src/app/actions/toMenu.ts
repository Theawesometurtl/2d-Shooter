import { canvas } from "../../sharedGlobals";

export function toMenu(): void {
    document.getElementById('canvas').style.display = 'none';
    document.getElementById('start').style.display = 'block';
    document.getElementById('highscore').style.display = 'block';
    document.getElementById('login-screen').style.display = 'block';
    let loginInput = Array.from(document.getElementsByClassName('login-input')) as HTMLInputElement[];
    for (let i = 0; i < loginInput.length; i++) {
        loginInput[i].style.display = 'none';
        
    }
}