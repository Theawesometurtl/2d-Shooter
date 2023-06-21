import { globals, canvas } from "../../sharedGlobals";
import { setUserInfo } from "./firebaseUtils/setUserInfo";
import { auth } from "./firebaseUtils/initializeFirebase";
export function gameEnd(): void {
    clearInterval(globals.game);
    canvas.style = 'display: none';
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('highscore').style.display = 'block';
    document.getElementById('login-screen').style.display = 'block';
    document.body.style.backgroundColor = '#1bafdb';
    if (globals.score > globals.highscore) {
        globals.highscore = globals.score;
        document.getElementById('highscore').innerText = 'HighScore: ' + globals.highscore;
        setUserInfo('highscore', globals.highscore.toString());
    }
    const user = auth.currentUser;
    if (user !== null) {
        globals.uid = user.uid;
        setUserInfo('highscore', globals.highscore.toString());
    }
}