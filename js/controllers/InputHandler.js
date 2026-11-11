import { DIRECTIONS } from "../constants/Directions.js";

export class InputHandler {
  constructor(game) {
    this.game = game;
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    switch (e.code) {
      case "ArrowLeft":
        this.game.handleMove(DIRECTIONS.LEFT);
        break;
      case "ArrowRight":
        this.game.handleMove(DIRECTIONS.RIGHT);
        break;
      case "ArrowUp":
        this.game.handleMove(DIRECTIONS.UP);
        break;
    }
  }

  listen() {
    window.addEventListener("keydown", this.onKeyDown);
  }

  destroy() {
    window.removeEventListener("keydown", this.onKeyDown);
  }
}
