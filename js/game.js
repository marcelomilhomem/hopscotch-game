class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 700;
    this.player = null;
    this.control = null;
    this.intervalId = null;
    this.glasses = null;
  }

  start() {
    this.player = new OhIlNam(this);
    this.control = new Controls(this);
    this.glasses = new Paths(this);
    this.glasses.arrayPath();
    this.glasses.random();
    this.glasses.draw();
    this.flatglasses = this.glasses.path.flat();
    this.control.keyboardEvents();
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.checkBreakingGlass();
    this.glasses.draw();
    this.player.draw();
    this.checkGameOver();
  }

  drawScores() {}

  checkBreakingGlass() {
    this.flatglasses.forEach((glass) => {
      if (
        glass.x === this.player.x &&
        glass.y === this.player.y &&
        glass.isBreakable
      ) {
        this.player.lifes -=1;
        console.log("break")
      }
    });
  }

  checkGameOver() {
    if (this.player.lifes <= 0) {
      this.stop();
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.ctx.font = "30px Arial";
    this.ctx.fillText("You lost", 10, 50);
  }

  timer() {
    const startingMinutes = 2;
    let time = startingMinutes * 60;

    const countDownEl = document.getElementById("countdown");
  }
}
