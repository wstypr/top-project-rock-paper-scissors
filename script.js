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

function playRound(playerSelection, computerSelection) {
  // play 1 round
  if (playerSelection === computerSelection) {
    console.log("Draw!");
  } else if (rules[playerSelection] === computerSelection) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
}

function playGame() {
  // play 5 rounds of game
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    playRound(getPlayerSelection(), getComputerChoice());
  }
  console.log("Game Over");
}
