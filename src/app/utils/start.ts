import { main } from '../game.js';
import { findMousePos } from './findMousePos.js';
import { Bullet } from '../Bullet.js';
import { Player } from '../Player.js';
import { globals, entityList, canvas, centerX, centerY, recenter } from '../globals.js';


export function start () {
    recenter();
    canvas.style = 'display: block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('highscore').style.display = 'none';
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('score').innerHTML = 'Score: ' + globals.score;
    
    document.body.style.backgroundColor = '#ffffff';
    entityList.enemy = [];
    entityList.playerBullet = [];
    entityList.shooterBullet = [];
    
    globals.player = new Player(centerX, centerY);
    globals.score = 0;
    globals.game = setInterval(main, 30);

    //event listeners
    canvas.addEventListener("click", function(){
        let b = new Bullet(globals.player.gunAngle, globals.player.position.x, globals.player.position.y, globals.player.bulletSpeed, 'playerBullet', 'black');
        entityList.playerBullet.push(b);
        //console.log( b);
    });
    
    canvas.addEventListener("mousemove", findMousePos);
    
    
    
    window.onkeyup = function(e) { globals.pressedKeys[e.keyCode] = false; }
    window.onkeydown = function(e) { globals.pressedKeys[e.keyCode] = true; }
    
  };