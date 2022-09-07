import { findMousePos } from 'findMousePos';
import { Bullet } from '../Bullet.js';
import { globals } from '../game.js';
import { entityList } from '../game.js';
import { main } from '../game.js';


export function start () {
    globals.canvas.style = 'display: block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('highscore').style.display = 'none';
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('score').innerHTML = 'Score: ' + globals.score;
    
    document.body.style.backgroundColor = '#ffffff';
    entityList  =  {enemy: [], playerBullet: [], shooterBullet: []};

    
    globals.player = new Player(globals.centerX, globals.centerY);
    globals.score = 0;
    globals.game = setInterval(main, 30);

    //event listeners
    canvas.addEventListener("click", function(){
        let b = new Bullet(player.gunAngle, player.position.x, player.position.y, player.bulletSpeed, 'playerBullet', 'black');
        globals.entityList.playerBullet.push(b);
        //console.log( b);
    });
    
    globals.canvas.addEventListener("mousemove", findMousePos);
    
    
    
    window.onkeyup = function(e) { pressedKeys[e.keyCode] = false; }
    window.onkeydown = function(e) { pressedKeys[e.keyCode] = true; }
    
  };