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
            console.log("ola");
          }
          break;
        case "ArrowRight":
        if (this.player.x === 200) {
          this.player.moveRight();
          console.log("tudo bem?");
        }
          break;
      }
    });
  }
}
