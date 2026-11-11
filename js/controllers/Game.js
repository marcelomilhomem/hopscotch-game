import { InputHandler } from "./InputHandler.js";
import { Character } from "../models/Character.js";
import { PathManager } from "../models/PathManager.js";
import { CharacterRenderer } from "../views/CharacterRenderer.js";
import { HudRenderer } from "../views/HudRenderer.js";

const GAME_STATE =Object.freeze({
  IDLE: "idle", 
  PLAYING: "playing",
  WON: "won",
  LOST: "lost",
  STOPPED: "stopped", 
});

const TIME_LIMIT_MS = 60 * 1000;
const MAX_FRAME_MS = 100;

export class Game {
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

    this.state = GAME_STATE.IDLE;
    this.frameId = null;
    this.lastTimestamp = null;
    this.elapsedMs = 0;
  }

  start() {
    this.canvas.classList.remove("hidden");

    // Init
    this.character = new Character(this);
    this.characterRenderer = new CharacterRenderer(this, this.character, this.imageSources);
    this.hud = new HudRenderer(this.ctx);
    this.inputHandler = new InputHandler(this);
    this.pathManager = new PathManager(this);

    this.pathManager.arrayPath();
    this.pathManager.random();

    this.inputHandler.listen();

    this.state = GAME_STATE.PLAYING;
    this.frameId = requestAnimationFrame((t) => this.update(t));
  }

  update(timestamp) {
    if (this.state !== GAME_STATE.PLAYING) return;

    const delta = this.lastTimestamp === null ? 0 : timestamp - this.lastTimestamp;
    this.lastTimestamp = timestamp;
    this.elapsedMs += Math.min(delta, MAX_FRAME_MS);

    this.ctx.clearRect(0, 0, this.width, this.height);

    this.pathManager.drawPath();
    this.characterRenderer.drawCharacter();
    this.characterRenderer.drawLives();
    this.hud.drawTimer(this.elapsedMs);

    this.checkTimeUp();

    if (this.state === GAME_STATE.PLAYING) {
      this.frameId = requestAnimationFrame((t) => this.update(t));
    }
  }

  handleMove(direction) {
    if (this.state !== GAME_STATE.PLAYING) return;

    this.character.move(direction);
    this.checkBreakingGlass();
    this.checkGameOver();
    this.checkWin();
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
    if (this.elapsedMs >= TIME_LIMIT_MS) {
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
    if (this.state !== GAME_STATE.PLAYING) return;
    this.state = GAME_STATE.WON;
    this.destroy();
    this.canvas.classList.add("hidden");
    document.getElementById("btn-exit").classList.add("hidden");
    document.getElementById("screen-win").classList.remove("hidden");
  }

  stop() {
    if (this.state !== GAME_STATE.PLAYING) return;
    this.state = GAME_STATE.LOST;
    this.destroy();
    this.canvas.classList.add("hidden");
    document.getElementById("btn-exit").classList.add("hidden");
    document.getElementById("screen-loss").classList.remove("hidden");
  }

  destroy() {
    if (this.state === GAME_STATE.PLAYING) {
      this.state = GAME_STATE.STOPPED;
    }
    cancelAnimationFrame(this.frameId);
    this.frameId = null;
    if (this.inputHandler) this.inputHandler.destroy();
  }
}
