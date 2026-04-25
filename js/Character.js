class Character {
  constructor(game) {
    this.game = game;
    this.x = 230;
    this.y = 600;
    this.width = 60;
    this.height = 60;
    this.lives = 5;

    this.validXPositions = [200, 230, 260];
    this.minY = 50;
    this.maxY = 600;
  }

  resetPosition() {
    this.x = 230;
    this.y = 600;
  }

  isValidPosition(x, y) {
    return this.validXPositions.includes(x) && y >= this.minY && y <= this.maxY;
  }

  move(direction) {
    let newX = this.x;
    let newY = this.y;

    switch (direction) {
      case DIRECTIONS.LEFT:
        if (this.x === 260) {
          newX = 200;
        } else if (this.x === 230) {
          newX = 200;
        }
        newY -= 50;
        break;
      case DIRECTIONS.RIGHT:
        if (this.x === 200) {
          newX = 260;
        } else if (this.x === 230) {
          newX = 260;
        }
        newY -= 50;
        break;
      case DIRECTIONS.UP:
        newY -= 50;
        break;
    }

    if (this.isValidPosition(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }
}
