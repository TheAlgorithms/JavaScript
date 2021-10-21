/*
    Problem statement and Explanation : https://medium.com/@ManBearPigCode/how-to-reverse-a-number-mathematically-97c556626ec6
*/

/**
 * ReverseNumber return the reversed value of the given number.
 * @param {Number} n any digit number.
 * @returns `Number` n reverse in reverse.
 */
const ReverseNumber = (number) => {
  // firstly, check that input is a number or not.
  if (typeof number !== 'number') {
    return new TypeError('Argument is not a number.')
  }
  // A variable for storing the reversed number.
  let reverseNumber = 0
  // Iterate the process until getting the number is 0.
  while (number > 0) {
    // get the last digit of the number
    const lastDigit = number % 10
    // add to the last digit to in reverseNumber
    reverseNumber = reverseNumber * 10 + lastDigit
    // reduce the actual number.
    number = Math.floor(number / 10)
  }
  return reverseNumber
}

export { ReverseNumber }
