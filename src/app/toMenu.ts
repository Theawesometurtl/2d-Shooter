import { canvas } from "sharedGlobals";

export function toMenu(): void {
    canvas.style = 'display: none';
    document.getElementById('start').style.display = 'block';
    document.getElementById('highscore').style.display = 'block';
    document.getElementById('login-screen').style.display = 'block';
    let loginInput = document.getElementsByClassName('login-input');
    for (let i = 0; i < loginInput.length; i++) {
        loginInput[i].style.display = 'none';
    }
}