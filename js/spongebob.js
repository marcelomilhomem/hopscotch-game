class SpongeBob {
  constructor(game, imgSrs) {
    this.game = game;
    this.x = 230;
    this.y = 600;
    this.width = 48;
    this.height = 60;
    this.lifes = 5;
    this.img = new Image();
    this.img2 = new Image();
    this.imgSrs = imgSrs;
  }
  draw() {
    this.img.src = this.imgSrs;
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawLifes() {
    this.img2.src = this.imgSrs;
    switch (this.lifes) {
      case 5:
        this.game.ctx.drawImage(this.img2, 20, 630, 48, 60);
        this.game.ctx.drawImage(this.img2, 50, 630, 48, 60);
        this.game.ctx.drawImage(this.img2, 80, 630, 48, 60);
        this.game.ctx.drawImage(this.img2, 110, 630, 48, 60);
        break;
      case 4:
        this.game.ctx.drawImage(this.img2, 20, 630, 48, 60);
        this.game.ctx.drawImage(this.img2, 50, 630, 48, 60);
        this.game.ctx.drawImage(this.img2, 80, 630, 48, 60);
        break;
      case 3:
        this.game.ctx.drawImage(this.img2, 20, 630, 48, 60);
        this.game.ctx.drawImage(this.img2, 50, 630, 48, 60);
        break;
      case 2:
        this.game.ctx.drawImage(this.img2, 20, 630, 48, 60);
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
