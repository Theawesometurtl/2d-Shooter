function start () {
    canvas.style = 'display: block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('highscore').style.display = 'none';
    document.getElementById('score').innerHTML = 'Score: ' + score;
    
    document.body.style.backgroundColor = '#ffffff';
    entityList  =  {enemy: [], playerBullet: [], shooterBullet: []};

    player = new Player();
    score = 0;
    spawn = 0;
    spawnrate = 0.03;
    spawnrateGrowth = 0.00001
    game;
    game = setInterval(main, 30);
  };