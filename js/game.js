class Game {
  constructor(imgArray) {
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
    this.imgSquid = new Image();
    this.imgHouse = new Image();
    this.imgSrs = imgArray;
  }

  drawSquid() {}

  start() {
    console.log(this.imgSrs);
    this.canvas.style.display = "flex";
    this.player = new Player(this, this.imgSrs);
    this.control = new Controls(this);
    this.glasses = new Paths(this);
    this.glasses.arrayPath();
    this.player.drawLifes();
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
    console.log(seconds);
    this.ctx.font = "30px sans-serif";
    this.ctx.fillStyle = "crimson";
    this.ctx.fillText(`00:${seconds}`, 218, 80);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.glasses.draw();
    this.player.draw();
    this.player.drawLifes();
    this.drawSquid();
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
        if (glass.color != "black") {
          glass.color = "black";
        }

        this.player.lifes--;
        this.player.x = 230;
        this.player.y = 600;
      }
    });
  }

  checkGameOver() {
    if (this.player.lifes <= 0 || Math.floor(this.countTime / 60) === 60) {
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
    let winScreen = document.getElementById("win-screen");
    let exitButton = document.getElementById("exit-button");

    this.canvas.style.display = "none";
    exitButton.style.display = "none";
    winScreen.style.display = "flex";
    clearInterval(this.intervalId);
  }

  stop() {
    let lossScreen = document.getElementById("loss-screen");
    let exitButton = document.getElementById("exit-button");

    this.canvas.style.display = "none";
    exitButton.style.display = "none";

    lossScreen.style.display = "flex";
    clearInterval(this.intervalId);
  }
}
