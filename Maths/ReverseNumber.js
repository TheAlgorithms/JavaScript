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

/**
 * @author dev-madhurendra
 * Reverses a number by converting it to a string.
 *
 * @param {number} n - The number to reverse.
 * @returns {number} The reversed number.
 *
 * @example
 * const reversed = reverseNumber(12345); // Returns 54321
 */

// This callback function is used to convert number to string and then reversing it and again converting it to number.
const callback = (n) => parseInt(n.toString().split('').reverse().join(''), 10)

const reverseNumberUsingString = (n) => n >= 0 ? callback(n) : -callback(n)

export { ReverseNumber, reverseNumberUsingString }
