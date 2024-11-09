'use strict';

let maxNumber = parseInt(prompt("Choose the max number for the game:"));
while (!maxNumber) {
    parseInt(prompt("Invalid number! Choose another one:"))
}

let score = maxNumber;
let secretNumber = Math.trunc(Math.random() * maxNumber) + 1;
let highscore = 0;
console.log(secretNumber);

document.querySelector('.max-number').textContent = maxNumber;
document.querySelector('.score').textContent = score;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    // When there is no input
    if (!guess) {
        displayMegitssage('⛔ Invalid Number!');

    // When player wins
    } else if (guess === secretNumber) {

        displayMessage('🎉 You guessed it right!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('h1').textContent = '🥇 Congratulations! You nailed it!';
        

        document.querySelector('body').style.backgroundColor = '#60b347';                           
        document.querySelector('.number').style.width = '30rem';

        if (score === maxNumber) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            displayMessage('🏆 Max highscore unlocked!')
            document.querySelector('h1').textContent = '🔥 Got it on the first try!';
        } if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            displayMessage('🚀 New highscore!')
            document.querySelector('h1').textContent = '🌟 Highscore Achieved!';
        }

    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Try a lower number.' : '📉 Try guessing higher.');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💔 Better luck next time.');
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('h1').textContent = '❌ The number you missed was';
            document.querySelector('.score').textContent = 0;

            document.querySelector('body').style.backgroundColor = '#FF3333';
            document.querySelector('.number').style.width = '30rem';
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * maxNumber) + 1; 
    score = maxNumber;

    displayMessage('Start guessing...');
    document.querySelector('h1').textContent = 'Guess My Number!'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})