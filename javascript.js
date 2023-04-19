// set up the score and message to display in each round
let computerScore = 0;
let playerScore = 0;
let roundScore = "";

// create a function that randomly return either 'rock, paper or scissor'
function getComputerChoice(choice) {
    choice = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice].toString();
}

// create a function that asks for user input and return the correct word according to str.length
function playerSelection() {
    if (result.length === 4) {
        return "rock";
    } else if (result.length === 5) {
        return "paper";
    } else if (result.length === 7) {
        return "scissor";
    }
}

function playerSelectionIsRock() {
    console.log('rock')
};

function playerSelectionIsPaper() {
    console.log('paper')
};

function playerSelectionIsScissor() {
    console.log('scissor')
};

// create a function that plays 1 round with 2 par: playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelection();
        if (playerSelection === computerSelection)
            return roundScore = "It\'s a tie!";
        else if (playerSelection === "rock" && computerSelection === "scissor") {
            playerScore += 1;
            return roundScore = "You win! Rock destroys Scissor";
        } else if (playerSelection === "scissor" && computerSelection === "paper") {
            playerScore += 1;
            return roundScore = "You win! Scissor cuts Paper";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1;
            return roundScore = "You win! Paper covers Rock";
        } else {
            computerScore += 1;
            return roundScore = `You loose, The Computer overpowered you with ${computerSelection}`;
        }  
} 

// create a loop that plays 5 rounds of the playRound function with an alert message at the end with the winner
// Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// for (let i = 0; i < 5; i++) {
//} 

// console.log(playRound());



// Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.
const buttons = document.getElementsByClassName("playerSelection");

const rockButton = buttons[0];
const paperButton = buttons[1];
const scissorButton = buttons[2];

rockButton.addEventListener('click', playerSelectionIsRock);
paperButton.addEventListener('click', playerSelectionIsPaper);
scissorButton.addEventListener('click', playerSelectionIsScissor);

function result() {
alert(roundScore);
if (playerScore > computerScore) {
    alert("Hurray! You won!");
} else if (playerScore < computerScore){
    alert("Oh no! The computer has beaten you up...");
} else {
    alert("TIE");
}
};

//ROCK 4 letters
//PAPER 5 letters
//SCISSOR 7 letters

//console.log(playRound(playerSelection, computerSelection));
// return a string that declares the winner of the round 'You lose! Paper beats Rock'
// user input should be case-insensitive


// Write a NEW function called game(). 






//for(let i = 0; i < 5; i++) {
//    console.log(playRound() + i) ;
//} 


// rock > scissor
// scissor > paper
// paper > rock