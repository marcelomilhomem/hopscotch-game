class OhIlNam {
  constructor(game) {
    this.game = game;
    this.x = 230;
    this.y = 600;
    this.width = 40;
    this.height = 30;
    this.lifes = 3;
  }
  draw() {
    this.game.ctx.fillStyle = "red";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= 60;
    this.y -= 50;
  }
  moveRight() {
    this.x += 60;
    this.y -= 50;
  }

  beginLeft() {
    this.x -= 30;
    this.y -= 40;
  }

  beginRight() {
    this.x += 30;
    this.y -= 40;
  }

  loseLife(glasses) {
  }
}
