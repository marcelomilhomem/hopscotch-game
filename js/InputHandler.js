class InputHandler {
  constructor(game) {
    this.game = game;
    this.character = this.game.character;
  }

  listen() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          if (this.character.x === 260) this.character.moveLeft();
          else if (this.character.x === 230) this.character.beginLeft();
          break;
        case "ArrowRight":
          if (this.character.x === 200) this.character.moveRight();
          else if (this.character.x === 230) this.character.beginRight();
          break;
        case "ArrowUp":
          if (this.character.x === 260) this.character.moveUpLeft();
          else if (this.character.x === 200) this.character.moveUpRight();
          break;
      }
    });
  }
}