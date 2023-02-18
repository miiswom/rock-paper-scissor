// create a function that randomly return either 'rock, paper or scissor'
function getComputerChoice(choice) {
    choice = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice].toString();
}

function getPlayerSelection(result) {
    result = prompt("Rock, paper or scissor?:");
    if (result.length === 4) {
        return "rock";
    } else if (result.length === 5) {
        return "paper";
    } else if (result.length === 7) {
        return "scissor";
    }
}

// create a function that plays 1 round with 2 par: playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerSelection();
        if (playerSelection === computerSelection)
            return "It\'s a tie!";
        else if (playerSelection === "rock" && computerSelection === "scissor") {
            return "You win! Rock destroys Scissor";
        } else if (playerSelection === "scissor" && computerSelection === "paper") {
            return "You win! Scissor cuts Paper";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You win! Paper covers Rock";
        } else {
            return `You loose, The Computer overpowered you with ${computerSelection}`;
        }  
} 

for (let i = 0; i < 5; i++) {
    console.log(playRound() + i);
} 

function game() {

}

//ROCK 4 
//PAPER 5
//SCISSOR 7 

//console.log(playRound(playerSelection, computerSelection));
// return a string that declares the winner of the round 'You lose! Paper beats Rock'
// user input should be case-insensitive


// Write a NEW function called game(). 
// Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.




let computerScore = 0;
let playerScore = 0;

//for(let i = 0; i < 5; i++) {
//    console.log(playRound() + i) ;
//} 


// rock > scissor
// scissor > paper
// paper > rock