let startScreen = document.getElementById("start-screen");
let ruleScreen = document.getElementById("rules-screen");
let exitButton = document.getElementById("exit-button");
let winScreen = document.getElementById("win-screen");
let lossScreen = document.getElementById("loss-screen");
let canvas = document.getElementById("canvas");

let game;
let imageSources = {
  playerImage: "/docs/assets/imgs/lee-jung-jae.png",
  heartImage: "/docs/assets/imgs/minecraft-full-heart.png",
};

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startScreen.style.display = "none";
    ruleScreen.style.display = "none";
    startGame();
  };

  document.getElementById("exit-button").onclick = () => {
    canvas.style.display = "none";
    startScreen.style.display = "flex";
    exitButton.style.display = "none";
  };

  document.getElementById("rules-button").onclick = () => {
    if (ruleScreen.style.display === "none") {
      ruleScreen.style.display = "flex";
    } else {
      ruleScreen.style.display = "none";
    }
  };

  document.getElementById("loss-button").onclick = () => {
    lossScreen.style.display = "none";
    startGame();
  };

  document.getElementById("win-button").onclick = () => {
    winScreen.style.display = "none";
    startGame();
  };
};

function startGame() {
  exitButton.style.display = "block";
  game = new Game(imageSources);
  game.start();
}
