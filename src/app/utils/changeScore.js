import { globals } from "../globals.js";
export function changeScore(addAmount) {
    globals.score += addAmount;
    if (score > highscore) {
        globals.highscore = globals.score;
    }
    document.getElementById('score').innerHTML = 'Score: ' + globals.score;
    document.getElementById('highscore').innerHTML = 'Highscore: ' + globals.highscore;
}