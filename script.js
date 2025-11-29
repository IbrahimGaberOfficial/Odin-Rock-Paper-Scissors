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
  return choice;
}

/**
 * Get the choice of user from prompt message
 */
function getHumanChoice(){
    let choice = prompt('Enter your choice from list \n [Rock, Paper, Scissors].')
    // console.log(typeof choice, choice);
    return choice;
}
