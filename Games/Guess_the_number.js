
/*Guess the number game */

/* this function is used to get the random number */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let randomNumber = getRandomInt(1, 100);   // random number is stored in this
let guessedNumber;
let count =0;


do{
   guessedNumber = prompt("guess the number");  // used to get the number from user
   if (guessedNumber < randomNumber)  
        console.log("The number is greater than you guessed");
   if (guessedNumber > randomNumber)
        console.log("The number is Smaller than you guessed");
  count++;
} while(guessedNumber != randomNumber);  // loop is continue till the number is not guessed 

console.log("Your Score : ", 100 - count);
