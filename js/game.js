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
    this.countTime = 0;
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

  countingSeconds() {
    let seconds = Math.floor(this.countTime / 60);
    this.ctx.font = '20px';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`Seconds: ${seconds}`, 10, 30);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.glasses.draw();
    this.player.draw();
    this.player.drawLifes();
    this.countingSeconds();
    this.checkBreakingGlass();
    this.checkGameOver();
    this.checkWin();
    this.countTime++;
  }

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
    let winScreen = document.getElementById('win-screen');
    this.canvas.style.display = "none";
    winScreen.style.display = "flex";
  }

  stop() {
    let winScreen = document.getElementById('loss-screen');
    this.canvas.style.display = "none";
    winScreen.style.display = "flex";
  }
}
