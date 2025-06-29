class Character {
  constructor(game) {
    this.game = game;
    this.x = 230;
    this.y = 600;
    this.width = 60;
    this.height = 60;
    this.lives = 5;
  }

  resetPosition() {
    this.x = 230;
    this.y = 600;
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
