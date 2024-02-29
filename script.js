const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

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
    console.log(`Draw! computer and player both are ${computerSelection}`);
  } else if (rules[playerSelection] === computerSelection) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
}
