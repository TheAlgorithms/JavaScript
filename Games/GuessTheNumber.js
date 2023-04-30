/*
  => Guess the number game 
  - In this game you have to guess the number between 1 to 100 
  - The Random number is already choosen  by the getRandomInt function
  - you only have to guess the number 
  - once you guess the number if the number is  matched yo will get your score 
  - else if the number is greater or smaller you will get the hint 
  */

/* this function is used to get the random number */
const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
}

let randomNumber = getRandomInt(1, 100)   // random number is stored in this
let guessedNumber,  count = 0

do{
   guessedNumber = prompt("guess the number")  // used to get the number from user
   if (guessedNumber < randomNumber)  
      console.log("The number is greater than you guessed")
   if (guessedNumber > randomNumber)
      console.log("The number is Smaller than you guessed")
   count++;
} while(guessedNumber != randomNumber)  // loop is continue till the number is not guessed 

console.log("Your Score : ", 100 - count)
