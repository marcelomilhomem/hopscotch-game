class Game {
  constructor(imageSources) {
    this.canvas = document.getElementById("game-canvas");
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
    this.canvas.classList.remove("hidden");

    // Init
    this.character = new Character(this);
    this.characterRenderer = new CharacterRenderer(this, this.character, this.imageSources);
    this.inputHandler = new InputHandler(this);
    this.pathManager = new PathManager(this);

    this.pathManager.arrayPath();
    this.pathManager.random();

    this.inputHandler.listen();

    this.intervalId = setInterval(() => this.update(), 1000 / 60);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.pathManager.drawPath();
    this.characterRenderer.drawCharacter();
    this.characterRenderer.drawLives();
    this.countingSeconds();

    this.checkTimeUp();

    this.countTime++;
  }

  handleMove(direction) {
    if (this.intervalId === null) return;

    this.character.move(direction);
    this.checkBreakingGlass();
    this.checkGameOver();
    this.checkWin();
  }

  countingSeconds() {
    const total = Math.floor(this.countTime / 60);
    const minutes = String(Math.floor(total / 60)).padStart(2, "0");
    const seconds = String(total % 60).padStart(2, "0");
    this.ctx.font = "30px sans-serif";
    this.ctx.fillStyle = "crimson";
    this.ctx.fillText(`${minutes}:${seconds}`, 218, 80);
  }

  checkBreakingGlass() {
    const glass = this.flatGlasses.find(
      (g) => g.x === this.character.x && g.y === this.character.y && g.isBreakable
    );
    if (!glass) return;

    glass.color = "black";
    this.character.lives--;
    this.character.resetPosition();
  }

  checkTimeUp() {
    if (Math.floor(this.countTime / 60) >= 60) {
      this.stop();
    }
  }

  checkGameOver() {
    if (this.character.lives <= 0) {
      this.stop();
    }
  }

  checkWin() {
    const { x, y, minY } = this.character;
    const onGoalRow = y === minY;
    const onGlassLane = this.pathManager.path[0].some((tile) => tile.x === x);
    if (onGoalRow && onGlassLane) {
      this.win();
    }
  }

  win() {
    this.destroy();
    this.canvas.classList.add("hidden");
    document.getElementById("btn-exit").classList.add("hidden");
    document.getElementById("screen-win").classList.remove("hidden");
  }

  stop() {
    this.destroy();
    this.canvas.classList.add("hidden");
    document.getElementById("btn-exit").classList.add("hidden");
    document.getElementById("screen-loss").classList.remove("hidden");
  }

  destroy() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    if (this.inputHandler) this.inputHandler.destroy();
  }
}
