import { globals } from "../../sharedGlobals";
export function changeScore(addAmount: number) {
    globals.score += addAmount;
    if (globals.score > globals.highscore) {
        globals.highscore = globals.score;
    }
    document.getElementById('score').innerHTML = 'Score: ' + globals.score;
    document.getElementById('highscore').innerHTML = 'Highscore: ' + globals.highscore;
}