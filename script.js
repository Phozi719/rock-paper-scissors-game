const choices = ["✊", "✋", "✌️"];
let wins = 0, losses = 0, draws = 0;
let playerName = "";

function startGame() {
  const nameInput = document.getElementById("playerName").value;
  if (!nameInput.trim()) {
    alert("Please enter your name!");
    return;
  }
  playerName = nameInput;
  document.getElementById("playerSection").style.display = "none";
  document.getElementById("gameSection").style.display = "block";
  document.getElementById("greeting").innerText = `Good luck, ${playerName}!`;
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function decide(player, comp) {
  if (player === comp) {
    draws++;
    return "It's a Draw!";
  }
  if (
    (player === 0 && comp === 2) ||
    (player === 1 && comp === 0) ||
    (player === 2 && comp === 1)
  ) {
    wins++;
    return "You Win!";
  }
  losses++;
  return "You Lose!";
}

function updateScore() {
  document.getElementById("scoreBoard").innerText = 
    `Wins: ${wins} | Losses: ${losses} | Draws: ${draws}`;
}

function endGame() {
  alert(`Game Over, ${playerName}!\n\nSummary:\nWins: ${wins}\nLosses: ${losses}\nDraws: ${draws}`);
}

function resetGame() {
  wins = 0;
  losses = 0;
  draws = 0;
  updateScore();
  document.getElementById("result").innerText = "";
}

document.querySelectorAll("#buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const player = +btn.dataset.choice;
    const comp = getComputerChoice();
    document.getElementById("result").innerText =
      `${playerName} picked ${choices[player]} | Computer picked ${choices[comp]}\n${decide(player, comp)}`;
    updateScore();
  });
});
