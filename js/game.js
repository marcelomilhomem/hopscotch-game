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
    /* this.sound = new Audio(); */
  }

  drawSquid() {
    this.imgSquid.src = this.imgSrs[2];
    this.ctx.drawImage(this.imgSquid, 300, 1, 220, 220);
    this.imgHouse.src = this.imgSrs[1];
    this.ctx.drawImage(this.imgHouse, 220, 10, 80, 80);
  }

  start() {
    console.log(this.imgSrs);
    /* this.sound.src = "/docs/sounds/Squid Game - Pink Soldiers.mp3";
    this.sound.play(); */
    this.canvas.style.display = "flex";
    this.player = new SpongeBob(this, this.imgSrs[0]);
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
    this.ctx.fillText(`00:${seconds}`, 375, 185);
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
    //this.restart();
  }

  checkBreakingGlass() {
    this.flatglasses.forEach((glass, i, arr) => {
      if (
        glass.x === this.player.x &&
        glass.y === this.player.y &&
        glass.isBreakable
      ) {
        //Make an array and check the future path includes in the brokenGlasses array;
        //arr.splice(i, 1);

        if(glass.color != "black") {
          glass.color = "black"
        }


        this.player.lifes--;
        this.player.x = 230;
        this.player.y = 600;
      }
    });
  }

  checkGameOver() {
    if (this.player.lifes <= 0) {
      this.stop();
    } else if (Math.floor(this.countTime / 60) === 60) {
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
    this.canvas.style.display = "none";
    winScreen.style.display = "flex";
    clearInterval(this.intervalId)
  }

  stop() {
    let lossScreen = document.getElementById("loss-screen");
    this.canvas.style.display = "none";
    lossScreen.style.display = "flex";
    clearInterval(this.intervalId)
  }
}
