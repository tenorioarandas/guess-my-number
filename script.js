'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    // When there is no input
    if (!guess) {
        displayMessage('⛔ Invalid Number!');

    // When player wins
    } else if (guess === secretNumber) {

        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('h1').textContent = '🏆 You got it right!';
        

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('❌ You lost the game!');
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('h1').textContent = '🔎 The secret number was';
            document.querySelector('.score').textContent = 0;

            document.querySelector('body').style.backgroundColor = '#FF3333';
            document.querySelector('.number').style.width = '30rem';
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1; 
    score = 20;

    displayMessage('Start guessing...');
    document.querySelector('h1').textContent = 'Guess My Number!'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})