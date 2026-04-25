class InputHandler {
  constructor(game) {
    this.game = game;
    this.character = this.game.character;
  }

  listen() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          this.character.move(DIRECTIONS.LEFT);
          break;
        case "ArrowRight":
          this.character.move(DIRECTIONS.RIGHT);
          break;
        case "ArrowUp":
          this.character.move(DIRECTIONS.UP);
          break;
      }
    });
  }
}