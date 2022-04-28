let startScreen = document.getElementById("start-screen");
let winScreen = document.getElementById("win-screen");
let lossScreen = document.getElementById("loss-screen");
let rewardScreem = document.getElementById("reward-screen");

let game;
let sound;
let music = new Audio("/docs/assets/sounds/Squid Game - Way Back Then.mp3");
let spongeGame = ["./docs/assets/imgs/amongus.png", "./docs/assets/imgs/money-yen.png", "./docs/assets/imgs/My project (1).png"];
/* let squidGame = [player, objective, timer];
let anotherOne = [player, objective, timer]; */

window.onload = () => {
  music.play();
  document.getElementById("start-button").onclick = () => {
    startScreen.style.display = "none";
    startGame();
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
  game = new Game(spongeGame);
  game.start();
}
