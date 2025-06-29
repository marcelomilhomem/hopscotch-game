class CharacterRenderer {
  constructor(game, character, images) {
    this.game = game;
    this.character = character;
    this.playerImage = new Image();
    this.heartImage = new Image();

    this.playerImage.src = images.playerImage;
    this.heartImage.src = images.heartImage;
  }

  drawCharacter() {
    const { x, y, width, height } = this.character;
    this.game.ctx.drawImage(this.playerImage, x, y, width, height);
  }

  drawLives() {
    const lives = this.character.lives;
    for (let i = 0; i < lives - 1; i++) {
      this.game.ctx.drawImage(this.heartImage, 20 + i * 30, 630, 48, 48);
    }
  }

}