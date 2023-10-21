console.log("Number Guessing Game Project Start")

import * as readline from 'readline';

// Create an interface to read input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

let numberOfTries = 0;
let gameOver = false;

function playGame() {
  rl.question('Guess the number between 1 and 100: ', (userInput) => {
    const userGuess = parseInt(userInput);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      console.log('Please enter a valid number between 1 and 100.');
    } else {
      numberOfTries++;

      if (userGuess < randomNumber) {
        console.log('Think higher! Try again.');
      } else if (userGuess > randomNumber) {
        console.log('Think lower! Try again.');
      } else {
        console.log(`Congratulations! You guessed the number in ${numberOfTries} tries.`);
        console.log("Number Guessing Game Project End")
        gameOver = true;
      }
    }

    if (!gameOver) {
      playGame(); // Recursively call playGame until the game is over
    } else {
      rl.close(); // Close the readline interface
    }
  });
}

console.log('Welcome to the Number Guessing Game!');
playGame();


