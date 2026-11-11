import { DIRECTIONS } from "../constants/Directions.js";

export class Character {
  constructor(game) {
    this.game = game;
    this.x = 230;
    this.y = 600;
    this.width = 60;
    this.height = 60;
    this.lives = 4;

    this.validXPositions = [200, 230, 260];
    this.minY = 50;
    this.maxY = 600;
  }

  resetPosition() {
    this.x = 230;
    this.y = 600;
  }

  isAtStart() {
    return this.x === 230 && this.y === 600;
  }

  isValidPosition(x, y) {
    return this.validXPositions.includes(x) && y >= this.minY && y <= this.maxY;
  }

  move(direction) {
    if (direction === DIRECTIONS.UP && this.isAtStart()) return;

    let newX = this.x;
    if (direction === DIRECTIONS.LEFT) newX = 200;
    if (direction === DIRECTIONS.RIGHT) newX = 260;
    const newY = this.y - 50;

    if (this.isValidPosition(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }
}
