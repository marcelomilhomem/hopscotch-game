class Controls {
  constructor(game) {
    this.game = game;
    this.player = this.game.player;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          if (this.player.x === 260) {
            this.player.moveLeft();
          } else if(this.player.x === 230) {
            this.player.beginLeft();
          }
          break;
        case "ArrowRight":
          if (this.player.x === 200) {
            this.player.moveRight();
          } else if(this.player.x === 230) {
            this.player.beginRight();
          }
          break;
      }
    });
  }
}
