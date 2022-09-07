import { globals } from "../game";
export function gameEnd() {
    clearInterval(globals.game);
    globals.canvas.style = 'display: none';
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('highscore').style.display = 'block';
    document.getElementById('login-screen').style.display = 'block';
    document.body.style.backgroundColor = '#1bafdb';
    if (globals.score > globals.highscore) {
        globals.highscore = globals.score;
        document.getElementById('highscore').innerText = 'HighScore: ' + globals.highscore;
    }
}