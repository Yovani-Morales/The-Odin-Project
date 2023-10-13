let userWins = 0;
let computerWins = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const options = {
        1: 'rock',
        2: 'paper',
        3: 'scissors'
    }
    return options[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    let message = '';

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        message = "You Lose! Paper beats Rock";
        computerWins++;

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        message = "You Lose! Scissors beats Paper";
        computerWins++;

    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        message = "You Lose! Rock beats Scissors";
        computerWins++;

    } else if (playerSelection === computerSelection) {
        message = "Tie!";
    } else {
        message = `You win! ${playerSelection} beats ${computerSelection}`;
        userWins++;
    }

    console.log('You: ', playerSelection);
    console.log('Computer: ', computerSelection);
    console.log(message);
}  

function game() {
    let count = 1;

    while (count <= 5) {
        alert(`Round ${count}`);
        const playerSelection = prompt('Rock, Paper, Scissors?').toLowerCase();
        const computerSelection = getComputerChoice();

        if (
            playerSelection == 'rock' ||
            playerSelection == 'paper' ||
            playerSelection == 'scissors'
        ) {
            playRound(playerSelection, computerSelection);
        } else {
            console.log('Invalid option');
        }

        count++;
    }

    if (userWins >= 3) {
        console.log(`Wins!. Rounds: ${userWins} - ${computerWins}`);
    } else if (userWins == computerWins) {
        console.log(`Tablas. Rounds: ${userWins} - ${computerWins}`);
    } else {
        console.log(`Game over. Rounds: ${userWins} - ${computerWins}`);
    }
}

game();