const buttons = document.querySelectorAll('button');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const result = document.getElementById('result');

let score = {player: 0, computer: 0};

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    score.player++;
    playerScore.textContent = score.player;
    if (score.player === 5) {
      result.textContent = 'Congratulations! You won the game!';
      disableButtons();
      return;
    }
    result.textContent = `You Win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    score.computer++;
    computerScore.textContent = score.computer;
    if (score.computer === 5) {
      result.textContent = 'Sorry, you lost the game.';
      disableButtons();
      return;
    }
    result.textContent = `You Lose! ${computerChoice} beats ${playerChoice}.`;
  }
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerChoice = button.id;
    const computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
  });
});
