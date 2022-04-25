class BreakGlass {
  constructor(game) {
    this.game = game;
    this.width = 50;
    this.height = 40;
    this.path = null;
  }

  arrayPath() {
     this.path = [
      [{x:200, y: 100}, {x:260, y: 100}],
      [{x:200, y: 150}, {x:260, y: 150}],
      [{x:200, y: 200}, {x:260, y: 200}],
      [{x:200, y: 250}, {x:260, y: 250}],
      [{x:200, y: 300}, {x:260, y: 300}],
      [{x:200, y: 350}, {x:260, y: 350}],
      [{x:200, y: 400}, {x:260, y: 400}],
      [{x:200, y: 450}, {x:260, y: 450}],
      [{x:200, y: 500}, {x:260, y: 500}],
      [{x:200, y: 550}, {x:260, y: 550}]
    ];
  }

  random() {
    this.path.forEach(pair => {
      let randomNumber = Math.round(Math.random());
      pair[randomNumber].isBreakable = true;
    })
    console.log(this.path);
  }

  draw() {
  }
}

/* this.game.ctx.fillStyle = "purple";
    //R
    this.game.ctx.fillRect(200, 550, 50, 40);
    //L
    this.game.ctx.fillRect(260, 550, 50, 40);
    //R
    this.game.ctx.fillRect(200, 500, 50, 40);
    //L
    this.game.ctx.fillRect(260, 500, 50, 40);
    //R
    this.game.ctx.fillRect(200, 450, 50, 40);
    //L
    this.game.ctx.fillRect(260, 450, 50, 40);
    //R
    this.game.ctx.fillRect(200, 400, 50, 40);
    //L
    this.game.ctx.fillRect(260, 400, 50, 40);
    //R
    this.game.ctx.fillRect(200, 350, 50, 40);
    //L
    this.game.ctx.fillRect(260, 350, 50, 40);
    //R
    this.game.ctx.fillRect(200, 300, 50, 40);
    //L
    this.game.ctx.fillRect(260, 300, 50, 40);
    //R
    this.game.ctx.fillRect(200, 250, 50, 40);
    //L
    this.game.ctx.fillRect(260, 250, 50, 40);
    //R
    this.game.ctx.fillRect(200, 200, 50, 40);
    //L
    this.game.ctx.fillRect(260, 200, 50, 40);
    //R
    this.game.ctx.fillRect(200, 150, 50, 40);
    //L
    this.game.ctx.fillRect(260, 150, 50, 40);
    //R
    this.game.ctx.fillRect(200, 100, 50, 40);
    //L
    this.game.ctx.fillRect(260, 100, 50, 40);
    //R
 */