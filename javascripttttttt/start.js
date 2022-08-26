function start () {
    canvas.style = 'display: block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('highscore').style.display = 'none';
    entityList.enemy = [];
    entityList.bullet = [];
    player = new Player();
    for (let i = 0; i < 10; i++) {
        Enemy.spawnEnemy();
    }
    document.body.style.backgroundColor = '#ffffff';
    score = 0;
  };