function start () {
    canvas.style = 'display: block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('highscore').style.display = 'none';
    document.getElementById('score').innerHTML = 'Score: ' + score;
    player = new Player();
    for (let i = 0; i < 10; i++) {
        Enemy.spawnEnemy();
    }
    document.body.style.backgroundColor = '#ffffff';
    entityList = {enemy: [], bullet: []};
    score = 0;
    spawn = 0;
    spawnrate = 0.05;
    spawnrateGrowth = 0.0001
    game;
    game = setInterval(main, 30);
  };