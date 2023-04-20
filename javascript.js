// Set up the score and message to display in each round
let computerScore = 0;
let playerScore = 0;
let roundScore = "";

// Create a function that randomly return either 'rock, paper or scissor'
function getComputerChoice(choice) {
    choice = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice].toString();
}

// Create a function for each button selection that calls the playround() with correct selection

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



// Create a function that plays 1 round with 2 par: playerSelection and computerSelection

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelections;
        if (playerSelection === computerSelection) {
            div.textContent = 'It\'s a tie';
            finalScore()
        } else if (playerSelection === "rock" && computerSelection === "scissor") {
            div.textContent = "You win! Rock destroys Scissor";
            pScore.textContent = playerScore += 1;
            finalScore()
        } else if (playerSelection === "scissor" && computerSelection === "paper") {
            div.textContent = "You win! Scissor cuts Paper";
            pScore.textContent = playerScore += 1;
            finalScore()
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            div.textContent = "You win! Paper covers Rock";
            pScore.textContent = playerScore += 1;
            finalScore()
        } else {
            div.textContent = `You loose, The Computer overpowered you with ${computerSelection}`;
            cScore.textContent = computerScore += 1;
            finalScore()
        };
}; 

// Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.

const buttons = document.getElementsByClassName("playerSelection");

const rockButton = buttons[0];
const paperButton = buttons[1];
const scissorButton = buttons[2];

rockButton.addEventListener('click', playerSelectionIsRock);
paperButton.addEventListener('click', playerSelectionIsPaper);
scissorButton.addEventListener('click', playerSelectionIsScissor);

function finalScore() {
    if(playerScore < 5 && computerScore < 5) {
        return;
    } else if (playerScore >= 6 || computerScore >= 6 ) {
        if (playerScore > computerScore) {
            alert("Hurray! You won!");
            window.location.reload();
        } else if (playerScore < computerScore) {
            alert("Oh no! The computer has beaten you up...");
            window.location.reload();
        } else {
            alert("TIE");
            window.location.reload();
        }
    }
};

let div = document.getElementById('textResult');
let cScore = document.getElementById('computerScore');
let pScore = document.getElementById('playerScore');
let endScore = document.getElementById('endScore');

// toggle the start-game button class
const startButton = document.getElementById('start-button');
function startGame () {
    let element = document.getElementById('myDiv');
    element.style.display = 'block';
    startButton.style.visibility = "hidden";
}
