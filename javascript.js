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

// create a function for each button selection that calls the playround() with correct selection

function playerSelectionIsRock() {
    playerSelections = 'rock';
    playRound();
};

function playerSelectionIsPaper() {
    playerSelections = 'paper';
    playRound();
};

function playerSelectionIsScissor() {
    playerSelections = 'scissor';
    playRound();
};

let playerSelections = '';



// create a function that plays 1 round with 2 par: playerSelection and computerSelection

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelections;
        if (playerSelection === computerSelection)
        div.textContent = 'It\'s a tie';
        else if (playerSelection === "rock" && computerSelection === "scissor") {
            playerScore += 1;
            div.textContent = "You win! Rock destroys Scissor";
        } else if (playerSelection === "scissor" && computerSelection === "paper") {
            playerScore += 1;
            div.textContent = "You win! Scissor cuts Paper";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1;
            div.textContent = "You win! Paper covers Rock";
        } else {
            computerScore += 1;
            div.textContent = `You loose, The Computer overpowered you with ${computerSelection}`;
        }  
} 

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

let div = document.getElementById('result');
