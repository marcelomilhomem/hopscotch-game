class PathManager {
  constructor(game) {
    this.game = game;
    this.width = 50;
    this.height = 40;
    this.path = null;
    this.img = new Image();
  }

  arrayPath() {
    this.path = [
      [
        { x: 200, y: 100, color: "DimGrey" },
        { x: 260, y: 100, color: "DimGrey" },
      ],
      [
        { x: 200, y: 150, color: "DimGrey" },
        { x: 260, y: 150, color: "DimGrey" },
      ],
      [
        { x: 200, y: 200, color: "DimGrey" },
        { x: 260, y: 200, color: "DimGrey" },
      ],
      [
        { x: 200, y: 250, color: "DimGrey" },
        { x: 260, y: 250, color: "DimGrey" },
      ],
      [
        { x: 200, y: 300, color: "DimGrey" },
        { x: 260, y: 300, color: "DimGrey" },
      ],
      [
        { x: 200, y: 350, color: "DimGrey" },
        { x: 260, y: 350, color: "DimGrey" },
      ],
      [
        { x: 200, y: 400, color: "DimGrey" },
        { x: 260, y: 400, color: "DimGrey" },
      ],
      [
        { x: 200, y: 450, color: "DimGrey" },
        { x: 260, y: 450, color: "DimGrey" },
      ],
      [
        { x: 200, y: 500, color: "DimGrey" },
        { x: 260, y: 500, color: "DimGrey" },
      ],
      [
        { x: 200, y: 550, color: "DimGrey" },
        { x: 260, y: 550, color: "DimGrey" },
      ],
    ];
  }

  random() {
    this.path.forEach((pair) => {
      let randomNumber = Math.round(Math.random());
      pair[randomNumber].isBreakable = true;
    });

    this.game.flatGlasses = this.path.flat();
  }

  drawPath() {
    this.game.flatGlasses.forEach((glass) => {
      this.game.ctx.fillStyle = glass.color;
      this.game.ctx.fillRect(glass.x, glass.y, 50, 40);
    });
  }
}
