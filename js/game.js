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
    this.flatglasses = null;
  }

  start() {
    this.canvas.style.display = "flex";
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
    this.glasses.draw();
    this.player.draw();
    this.checkBreakingGlass();
    this.checkGameOver();
    this.checkWin();
  }

  drawScores() {}

  checkBreakingGlass() {
    this.flatglasses.forEach((glass, i, arr) => {
      if (
        glass.x === this.player.x &&
        glass.y === this.player.y &&
        glass.isBreakable
      ) {
        //Make an array and check the future path includes in the brokenGlasses array;
        arr.splice(i, 1);
        this.player.lifes--;
        this.player.x = 230;
        this.player.y = 600;
      }
    });
  }

  checkGameOver() {
    if (this.player.lifes <= 0) {
      //console.log('game is over', this.player.lifes)
      this.stop();
    }
  }

  checkWin() {
    if (
      (this.player.x === 200 && this.player.y === 50) ||
      (this.player.x === 260 && this.player.y === 50)
    ) {
      this.win();
    }
  }

  win() {
    clearInterval(this.intervalId);
    this.ctx.font = "30px Arial";
    this.ctx.fillText("You win", 10, 50);
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
