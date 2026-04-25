const screenStart = document.getElementById("screen-start");
const screenRules = document.getElementById("screen-rules");
const screenWin = document.getElementById("screen-win");
const screenLoss = document.getElementById("screen-loss");
const exitBtn = document.getElementById("btn-exit");
const gameCanvas = document.getElementById("game-canvas");

let game;
const imageSources = {
  playerImage: "./docs/assets/imgs/lee-jung-jae.png",
  heartImage: "./docs/assets/imgs/minecraft-full-heart.png",
};

window.onload = () => {
  document.getElementById("btn-start").onclick = () => {
    screenStart.classList.add("hidden");
    screenRules.classList.add("hidden");
    startGame();
  };

  document.getElementById("btn-exit").onclick = () => {
    gameCanvas.classList.add("hidden");
    screenStart.classList.remove("hidden");
    exitBtn.classList.add("hidden");
  };

  document.getElementById("btn-rules").onclick = () => {
    screenRules.classList.toggle("hidden");
  };

  document.getElementById("btn-play-again-loss").onclick = () => {
    screenLoss.classList.add("hidden");
    startGame();
  };

  document.getElementById("btn-play-again-win").onclick = () => {
    screenWin.classList.add("hidden");
    startGame();
  };
};

function startGame() {
  exitBtn.classList.remove("hidden");
  gameCanvas.classList.remove("hidden");
  game = new Game(imageSources);
  game.start();
}
