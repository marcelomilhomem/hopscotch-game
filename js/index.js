let startScreen = document.getElementById('start-screen');
let winScreen = document.getElementById('win-screen');
let lossScreen = document.getElementById("loss-screen");

let game;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startScreen.style.display = "none";
    startGame();
  };

  document.getElementById("loss-button").onclick = () => {
    lossScreen.style.display = "none";
    startGame();
  }
}

function startGame() {
    game = new Game();
    game.start();
}
