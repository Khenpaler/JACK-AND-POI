const buttons = document.querySelectorAll("button");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const result = document.getElementById("result");

let score = { player: 0, computer: 0 };

// FUNTION TO LET COMPUTER GET RANDOM CHOICE
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// ASSIGNING THE CHOICE OF THE PLAYER AND THE COMPUTER THEN DETERMINING THE WINNER USING playRound function
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
  });
});

// FUNTION FOR SCNEARIOS
function playRound(playerChoice, computerChoice) {
  // SAME CHOICE SCENARIO
  if (playerChoice === computerChoice) {
    result.innerHTML = `You're Tied! Computer also chose ${computerChoice}.`;
  }

  // PLAYER WINNER SCENARIO
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") || // CONDITIONS FOR PLAYER TO BE WINNER
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    score.player++;
    playerScore.textContent = score.player;
    // CONDITION FOR IF PLAYER IS THE FINAL WINNER
    if (score.player === 5) {
      result.textContent = "Congratulations! You won the game!";
      disableButtons();
      return;
    }
    result.innerHTML = `You Win! Your ${playerChoice} beats Computer's ${computerChoice}.`;
  }

  // COMPUMTER WINNER SCENARIO
  else {
    score.computer++;
    computerScore.textContent = score.computer;
    // CONDITION FOR IF COMPUTER IS THE FINAL WINNER
    if (score.computer === 5) {
      result.textContent = "Sorry, you lost the game.";
      disableButtons();
      return;
    }
    result.innerHTML = `You Lose! Computer's ${computerChoice} beats your ${playerChoice}.`;
  }
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
