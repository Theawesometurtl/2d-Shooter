import { main } from '../../game';
import { findMousePos } from './findMousePos';
import { Player } from '../classes/Player';
import { globals, entityList, canvas, centerX, centerY, recenter } from '../../sharedGlobals';
import { shoot } from './shoot';


export function start () {
    recenter();
    document.getElementById('canvas').style.display = 'block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('battle').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('highscore').style.display = 'none';
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('score').innerHTML = 'Score: ' + globals.score;
    
    document.body.style.backgroundColor = '#ffffff';
    entityList.Enemies = [];
    entityList.Bullets.Player = [];
    entityList.Bullets.Shooter = [];
    
    entityList.Player[0] = new Player(centerX, centerY);
    globals.score = 0;
    globals.game = setInterval(main, 30);

    //event listeners
    canvas.addEventListener("click", function(){
        shoot(entityList.Player[0].gunAngle, entityList.Player[0].position.x, entityList.Player[0].position.y, entityList.Player[0].bulletSpeed, 'Player', 'black')
        //console.log( b);
    });
    
    canvas.addEventListener("mousemove", findMousePos);
    
  };