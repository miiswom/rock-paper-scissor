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
function getComputerChoice(choice, result) {
    choice = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    result = choice[randomChoice].toString();
    if (result === "rock") {
            computerRockButton.classList.add('computer-clicks');
            setTimeout( () => {
                computerRockButton.classList.remove('computer-clicks');
            }, 300);
        } else if (result === "paper") {
            computerPaperButton.classList.add('computer-clicks');
            setTimeout( () => {
                computerPaperButton.classList.remove('computer-clicks');
            }, 300);
        } else if (result === "scissor") {
            computerScissorButton.classList.add('computer-clicks');
            setTimeout( () => {
                computerScissorButton.classList.remove('computer-clicks');
            }, 300);
        }; return result; 
}

// Add background color to the selected button
const computerRockButton = document.getElementById('computer-selects-rock');
const computerPaperButton = document.getElementById('computer-selects-paper');
const computerScissorButton = document.getElementById('computer-selects-scissor');

// function colorComputerChoice () {
//     
// };

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
    rockButton.classList.add('player-clicks');
    playRound();
    setTimeout( () => {
        rockButton.classList.remove('player-clicks');
    }, 200);
};

function playerSelectionIsPaper() {
    playerSelections = 'paper';
    paperButton.classList.add('player-clicks');
    playRound();
    setTimeout( () => {
        paperButton.classList.remove('player-clicks');
    }, 200);
};

function playerSelectionIsScissor() {
    playerSelections = 'scissor';
    scissorButton.classList.add('player-clicks');
    playRound();
    setTimeout( () => {
        scissorButton.classList.remove('player-clicks');
    }, 200);
};

let playerSelections = '';

// Create a function that plays 1 round with 2 par: playerSelection and computerSelection

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelections;
    // colorComputerChoice();
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
let modalContent = document.getElementById('modal-content');
let thumbsUp = document.getElementById('thumbs-up');
let thumbsDown = document.getElementById('thumbs-down');
// let youWin = document.getElementsById('player-winner');
// let youLoose = document.getElementById('player-loose');

function openModal() {
modal.style.display = 'block';

 if (playerScore > computerScore) {
    winner.textContent = `Hurray you won ${pScore.textContent} against ${cScore.textContent}!`; 
    thumbsDown.classList.toggle('hidden');
 } else if (playerScore < computerScore) {
    winner.textContent = `Oh no! The computer has beaten you up ${cScore.textContent} against ${pScore.textContent}`;
    thumbsUp.classList.toggle('hidden');
 }
};


function finalScore() {
    if(playerScore < 5 && computerScore < 5) {
        return;
    } else if (playerScore >= 5 || computerScore >= 5 ) {
        openModal();
    } else {
            alert("Error");
        window.location.reload();
    }
};


let textResult = document.getElementById('text-result');
let cScore = document.getElementById('c-score');
let pScore = document.getElementById('p-score');
// let endScore = document.getElementById('endScore');


