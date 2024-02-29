const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const resultMessage = document.querySelector("#resultMessage");
const choiceBtn = document.querySelectorAll("button");

const playerScoreMessage = document.querySelector("#playerScore");
const computerScoreMessage = document.querySelector("#computerScore");

let playerScore = 0;
let computerScore = 0;

for (btn of choiceBtn) {
  btn.addEventListener("click", (event) => {
    playRound(event.target.getAttribute("id"));
  });
}

function getComputerChoice() {
  // randomly return rock/paper/scissors
  return Object.keys(rules)[Math.floor(Math.random() * 3)];
}

function getPlayerSelection() {
  // prompt player for rock/paper/scissors
  let hand = prompt("Pick your hand (rock/paper/scissors): ").toLowerCase();

  while (!Object.keys(rules).includes(hand)) {
    console.error(
      'You must pick either "rock" "paper" or "scissors" no other options'
    );
    hand = prompt("Pick your hand (rock/paper/scissors): ").toLowerCase();
  }
  return hand;
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  // play 1 round
  if (playerSelection === computerSelection) {
    resultMessage.textContent = `Draw! computer and player both are ${computerSelection}`;
  } else if (rules[playerSelection] === computerSelection) {
    resultMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScoreMessage.textContent = ++playerScore;
    if (playerScore === 5) {
      showWinner("Player");
    }
  } else {
    resultMessage.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScoreMessage.textContent = ++computerScore;
    if (computerScore === 5) {
      showWinner("Computer");
    }
  }
}

function showWinner(winner) {
  let announcement = document.createElement("p");
  announcement.textContent = `${winner} Win!!!`;
  resultMessage.appendChild(announcement);
}
