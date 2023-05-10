//Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
let randomNumber = Math.floor(Math.random() * 10) + 1;


let userGuess = parseInt(prompt('Guess a number between 1 and 10:'));


if (userGuess === randomNumber) {
  console.log('Good Work');
} else {
  console.log('Not matched');
}