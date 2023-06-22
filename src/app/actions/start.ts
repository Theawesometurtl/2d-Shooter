import { main } from '../../game';
import { findMousePos } from '.././actions/findMousePos';
import { Bullet } from '../classes/Bullet';
import { Player } from '../classes/Player';
import { globals, entityList, canvas, centerX, centerY, recenter } from '../../sharedGlobals';


export function start () {
    recenter();
    document.getElementById('canvas').style.display = 'block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('highscore').style.display = 'none';
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('score').innerHTML = 'Score: ' + globals.score;
    
    document.body.style.backgroundColor = '#ffffff';
    entityList.Enemies = [];
    entityList.Bullets.Player = [];
    entityList.Bullets.Shooter = [];
    
    globals.player = new Player(centerX, centerY);
    globals.score = 0;
    globals.game = setInterval(main, 30);

    //event listeners
    canvas.addEventListener("click", function(){
        let b = new Bullet(globals.player.gunAngle, globals.player.position.x, globals.player.position.y, globals.player.bulletSpeed, 'Player', 'black');
        entityList.Bullets.Player.push(b);
        //console.log( b);
    });
    
    canvas.addEventListener("mousemove", findMousePos);
    
  };