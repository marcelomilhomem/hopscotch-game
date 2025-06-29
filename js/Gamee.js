class Game {
  constructor(imageSources) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 500;
    this.height = 700;

    this.imageSources = imageSources;

    this.character = null;
    this.characterRenderer = null;
    this.inputHandler = null;
    this.pathManager = null;
    this.flatGlasses = null;

    this.intervalId = null;
    this.countTime = 0;
  }

  start() {
    this.canvas.style.display = "flex";

    // Init
    this.character = new Character(this);
    this.characterRenderer = new CharacterRenderer(this, this.character, this.imageSources);
    this.inputHandler = new InputHandler(this);
    this.pathManager = new PathManager(this);

    this.pathManager.arrayPath();
    this.pathManager.random();
    this.allTiles = this.pathManager.path.flat();

    this.inputHandler.listen();

    this.intervalId = setInterval(() => this.update(), 1000 / 60);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.pathManager.drawPath();
    this.characterRenderer.drawCharacter();
    this.characterRenderer.drawLives();
    this.countingSeconds();

    this.checkBreakingGlass();
    this.checkGameOver();
    this.checkWin();

    this.countTime++;
  }

  countingSeconds() {
    let seconds = Math.floor(this.countTime / 60);
    this.ctx.font = "30px sans-serif";
    this.ctx.fillStyle = "crimson";
    this.ctx.fillText(`00:${seconds}`, 218, 80);
  }

  checkBreakingGlass() {
    this.flatGlasses.forEach((glass) => {
      if (
        glass.x === this.character.x &&
        glass.y === this.character.y &&
        glass.isBreakable
      ) {
        if (glass.color !== "black") {
          glass.color = "black";
        }

        this.character.lives--;
        this.character.x = 230;
        this.character.y = 600;
      }
    });
  }

  checkGameOver() {
    if (this.character.lives <= 0 || Math.floor(this.countTime / 60) === 60) {
      this.stop();
    }
  }

  checkWin() {
    if (
      (this.character.x === 200 && this.character.y === 50) ||
      (this.character.x === 260 && this.character.y === 50)
    ) {
      this.win();
    }
  }

  win() {
    document.getElementById("canvas").style.display = "none";
    document.getElementById("exit-button").style.display = "none";
    document.getElementById("win-screen").style.display = "flex";
    clearInterval(this.intervalId);
  }

  stop() {
    document.getElementById("canvas").style.display = "none";
    document.getElementById("exit-button").style.display = "none";
    document.getElementById("loss-screen").style.display = "flex";
    clearInterval(this.intervalId);
  }
}
