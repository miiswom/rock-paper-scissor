
// create a function that randomly return either 'rock, paper or scissor'
function getComputerChoice(choice) {
    choice = ["Rock", "Paper", "Scissor"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice].toString();
}

// create a function that plays 1 round with 2 par: playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return console.log("It\'s a tie!");
            return console.log("You win! Rock destroys Scissor");
        } else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "Paper") {
            return console.log("You win! Scissor cuts Paper");
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
            return console.log("You win! Paper covers Rock");
        } else {
            return console.log(`You loose, The Computer overpowered you with ${computerSelection}`);
        }  
    } 

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, paper or scissor:");
console.log(playRound(playerSelection, computerSelection));

// return a string that declares the winner of the round 'You lose! Paper beats Rock'
// user input should be case-insensitive

// rock > scissor
// scissor > paper
// paper > rock
