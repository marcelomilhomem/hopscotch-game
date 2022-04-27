let startScreen = document.getElementById('start-screen');
let winScreen = document.getElementById('win-screen');



window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startScreen.style.display = "none";
    startGame();
  };
};

function startGame() {
  const game = new Game();
  game.start();
}
