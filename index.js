"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Number Guessing Game Project Start");
const readline = __importStar(require("readline"));
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
        }
        else {
            numberOfTries++;
            if (userGuess < randomNumber) {
                console.log('Think higher! Try again.');
            }
            else if (userGuess > randomNumber) {
                console.log('Think lower! Try again.');
            }
            else {
                console.log(`Congratulations! You guessed the number in ${numberOfTries} tries.`);
                console.log("Number Guessing Game Project End");
                gameOver = true;
            }
        }
        if (!gameOver) {
            playGame(); // Recursively call playGame until the game is over
        }
        else {
            rl.close(); // Close the readline interface
        }
    });
}
console.log('Welcome to the Number Guessing Game!');
playGame();
