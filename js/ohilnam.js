class OhIlNam {
  constructor(game) {
    this.game = game;
    this.x = 230;
    this.y = 600;
    this.width = 40;
    this.height = 50;
    this.lifes = 4;
    this.img = new Image();
    this.img2 = new Image();
  }
  draw() {
    this.img.src = "/docs/imgs/tryimg.jgp.PNG";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawLifes() {
    this.img2.src = "/docs/imgs/squid.jpg";
    switch (this.lifes) {
      case 4:
        this.game.ctx.drawImage(this.img2, 20, 630, 35, 40);
        this.game.ctx.drawImage(this.img2, 50, 630, 35, 40);
        this.game.ctx.drawImage(this.img2, 80, 630, 35, 40);
        break;
      case 3:
        this.game.ctx.drawImage(this.img2, 20, 630, 35, 40);
        this.game.ctx.drawImage(this.img2, 50, 630, 35, 40);
        break;
      case 2:
        this.game.ctx.drawImage(this.img2, 20, 630, 35, 40);
        break;
    }
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
    this.y -= 50;
  }

  beginRight() {
    this.x += 30;
    this.y -= 50;
  }

  moveUpLeft() {
    this.y -= 50;
  }

  moveUpRight() {
    this.y -= 50;
  }
}
