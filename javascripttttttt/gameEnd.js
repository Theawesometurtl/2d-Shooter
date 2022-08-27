function gameEnd() {
    clearInterval(game);
    entityList = {enemy: [], bullet: []};
    canvas.style = 'display: none';
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('highscore').style.display = 'block';
    document.body.style.backgroundColor = '#1bafdb';
    if (score > highscore) {
        highscore = score;
        document.getElementById('highscore').innerText = 'HighScore: ' + highscore;
    }
}