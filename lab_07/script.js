let attempts = 3;
let currentBalance = 100; 
const totalNumbers = 10;
let randomNumber = Math.floor(Math.random() * totalNumbers) + 1; 

const userGuessInput = document.getElementById('user-guess');
const submitButton = document.getElementById('submit-btn');

function checkGuess() {
    const userGuess = parseInt(userGuessInput.value);
    

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert('Please, enter number from 1 to 10.');
        return;
    }

    if (userGuess === randomNumber) {
        currentBalance += 50; 
        alert(`Congradulation, you guess number ${randomNumber}! Your balance: ${currentBalance} UAN`);
        alert('Game over. You win!');
        submitButton.disabled = true; 
    } else {
 
        attempts--;
        currentBalance -= 10; 

        if (attempts === 0) {
            alert(`You didn't guess. Number was ${randomNumber}. Your balance: ${currentBalance} UAN`);
            alert('Game over. You lost!');
            submitButton.disabled = true; 
        } else {
            alert(`Wong! Try again! Your balance: ${currentBalance} UAN. Attempts left: ${attempts}`);
        }
    }
}

submitButton.addEventListener('click', checkGuess);




