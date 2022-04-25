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
    this.glasses = new BreakGlass(this);
    this.glasses.arrayPath();
    this.glasses.random();
    this.control.keyboardEvents();
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.player.draw();
  }
}
