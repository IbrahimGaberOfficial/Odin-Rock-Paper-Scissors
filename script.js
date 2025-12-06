/**
 * getComputerChoice()
 * get randome number between 0 and 100
 * and for each range we get different choice each time
 * @returns randome choice from list ["Rock", "Paper", "Scissors"]
 */
function getComputerChoice() {
  let randomeNumber = Math.floor(Math.random() * 100);
  let choice = "";

  if (0 <= randomeNumber && randomeNumber <= 30) choice = "Rock";
  else if (31 <= randomeNumber && randomeNumber <= 60) choice = "Paper";
  else choice = "Scissors";
  console.log("computer choiced ", choice);
  return choice.toLocaleLowerCase();
}

/**
 * Get the choice of user from prompt message
 */
// function getHumanChoice() {
//   let choice = prompt(
//     "Enter your choice from list \n [Rock, Paper, Scissors]."
//   );
//   // console.log(typeof choice, choice);
//   console.log("human choiced ", choice);
//   return choice.toLocaleLowerCase();
// }

/**
 * get humand and computer choices as parameters
 * and check who is the winner.
 */
function playRound(humanChoice = "", computerChoice = "") {
  // check for similar choices
  // alert(`you choiced ${humanChoice}, computer choiced ${computerChoice}`);
  if (humanChoice === computerChoice) return "it's a tie";
  else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  )
    return "human";
  else return "computer";
}

/**
 * calls playRound to play 5 rounds,
 * keeps track of the scores and declares a winner at the end.
 */
// function playGame() {
//   let result;
//   for (let i = 1; i <= 5; i++) {
//     result = playRound(getHumanChoice(), getComputerChoice());
//     if (result == "human") {
//       alert("you win this round!.");
//       humandScore += 1;
//     } else if (result == "computer") {
//       alert("computer win this round!.");
//       computerScore += 1;
//     } else {
//       alert("It is a tie!.");
//     }
//   }
//   if (humandScore > computerScore) alert("you are the winner of the game!!.");
//   else alert("Computer is the winner of the game!!.");

//   humandScore = computerScore = 0;
// }

let humanScore = 0,
  computerScore = 0;

// const startBtn = document.getElementById("start-btn");
// // guessSubmit.addEventListener("click", checkGuess);
// startBtn.addEventListener("click", playGame);

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let resultContainer = document.querySelector("#result-container");
let choises = document.querySelector("#choises");
let reoundResult = document.querySelector("#round-result");

// event delegation
let btnsContainer = document.querySelector("#btns-container");

btnsContainer.addEventListener("click", (event) => {

  let humanChoice = event.target.id;
  let computerChoice = getComputerChoice();
  let result = playRound(humanChoice, computerChoice);
  let message = `Your choice is: ${humanChoice} | Computer 's choice is: ${computerChoice}`;
  let resultMessage =
    result == "human" || result == "computer" ? "winner is " + result : result;
  
    choises.textContent = message;
  reoundResult.textContent = resultMessage;

  switch (result) {
    case "computer":
      computerScore++;
      break;
    case "human":
      humanScore++;
    default:
      break;
  }

  let finalResult = document.querySelector("#final-result");
  finalResult.textContent = "";

  let announceWinner = function (winner) {
    finalResult.textContent = winner + " is the winner!!.";
    choises.textContent = "";
    reoundResult.textContent = "";
    humanScore = 0;
    computerScore = 0;
  };

  let humanScoreValue = document.querySelector("#human-score-value");
  let computerScoreValue = document.querySelector("#computer-score-value");

  humanScoreValue.textContent = humanScore;
  computerScoreValue.textContent = computerScore;

  if (computerScore >= 5) {
    announceWinner("Computer");
    return;
  } else if (humanScore >= 5) {
    announceWinner("Human");
    return;
  }
});
