// Draws the heads-up display (the on-screen info around the game).
export class HudRenderer {
  constructor(ctx) {
    this.ctx = ctx;
  }

  drawTimer(elapsedMs) {
    const total = Math.floor(elapsedMs / 1000);
    const minutes = String(Math.floor(total / 60)).padStart(2, "0");
    const seconds = String(total % 60).padStart(2, "0");
    this.ctx.font = "30px sans-serif";
    this.ctx.fillStyle = "crimson";
    this.ctx.fillText(`${minutes}:${seconds}`, 218, 80);
  }
}
