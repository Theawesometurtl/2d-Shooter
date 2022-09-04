function start () {
    canvas.style = 'display: block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('highscore').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('score').innerHTML = 'Score: ' + score;
    
    document.body.style.backgroundColor = '#ffffff';
    entityList  =  {enemy: [], playerBullet: [], shooterBullet: []};

    
    centerX = parseInt(canvas.width / 2);
    centerY = parseInt(canvas.height / 2);
    player = new Player();
    score = 0;
    spawn = 0;
    spawnrate = 0.03;
    spawnrateGrowth = 0.00001
    game = setInterval(main, 30);

    //event listeners
    canvas.addEventListener("click", function(){
        b = new Bullet(player.gunAngle, player.position.x, player.position.y, player.bulletSpeed, 'playerBullet', 'black');
        entityList.playerBullet.push(b);
        //console.log( b);
    });
    
    canvas.addEventListener("mousemove", findMousePos);
    
    
    
    window.onkeyup = function(e) { pressedKeys[e.keyCode] = false; }
    window.onkeydown = function(e) { pressedKeys[e.keyCode] = true; }
    
  };