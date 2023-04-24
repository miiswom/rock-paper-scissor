// Set up the score and message to display in each round
let computerScore = 0;
let playerScore = 0;
let roundScore = "";

// toggle the start-game button class
const startButton = document.getElementById('start-button');
function startGame () {
    let player = document.getElementById('player');
    let computer = document.getElementById('computer');
    player.style.display = 'inherit';
    computer.style.display = 'inherit'
    startButton.style.visibility = "hidden";
}

// Create a function that randomly return either 'rock, paper or scissor'
function getComputerChoice(choice) {
    choice = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice].toString();
}

// Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorButton = document.getElementById('scissor-button');

rockButton.addEventListener('click', playerSelectionIsRock);
paperButton.addEventListener('click', playerSelectionIsPaper);
scissorButton.addEventListener('click', playerSelectionIsScissor);

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
            textResult.textContent = 'It\'s a tie';
            finalScore()
        } else if (playerSelection === "rock" && computerSelection === "scissor") {
            textResult.textContent = "You win! Rock destroys Scissor";
            pScore.textContent = playerScore += 1;
            finalScore()
        } else if (playerSelection === "scissor" && computerSelection === "paper") {
            textResult.textContent = "You win! Scissor cuts Paper";
            pScore.textContent = playerScore += 1;
            finalScore()
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            textResult.textContent = "You win! Paper covers Rock";
            pScore.textContent = playerScore += 1;
            finalScore()
        } else {
            textResult.textContent = `You loose, The Computer overpowered you with ${computerSelection}`;
            cScore.textContent = computerScore += 1;
            finalScore()
        };
}; 

let modal = document.getElementById('myModal');
let winner = document.getElementById('winner');
// let youWin = document.getElementsById('player-winner');
// let youLoose = document.getElementById('player-loose');

function openModal() {
 modal.style.display = 'block';
};


function finalScore() {
    if(playerScore < 5 && computerScore < 5) {
        return;
    } else if (playerScore >= 5 || computerScore >= 5 ) {
        if (playerScore > computerScore) {
            openModal();
            winner.textContent = 'Hurray you won!';
        } else if (playerScore < computerScore) {
            openModal();
            winner.textContent = 'Oh no! The computer has beaten you up...';
        } else {
            alert("Error");
            window.location.reload();
        }
    }
};


let textResult = document.getElementById('text-result');
let cScore = document.getElementById('c-score');
let pScore = document.getElementById('p-score');
// let endScore = document.getElementById('endScore');


