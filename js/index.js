let startScreen = document.getElementById('start-screen');

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
