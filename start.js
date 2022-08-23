function start () {
    let entityList = {};
    entityList.enemy = [];
    entityList.bullet = [];
    for (let i = 0; i < 10; i++) {
        let enemy = new Enemy(Math.random()* 500, Math.random()* 500);
        entityList.enemy.push(enemy);
    }
  };