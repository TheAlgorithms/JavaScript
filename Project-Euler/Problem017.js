/**
 * Problem 17 - Number letter counts
 *
 * @see {@link https://projecteuler.net/problem=17}
 *
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
 *
 * @author Chetan07j
 */

// Array of number word length from 0 -> 19
const ones = [4, 3, 3, 5, 4, 4, 3, 5, 5, 4, 3, 6, 6, 8, 8, 7, 7, 9, 8, 8]

// Array for tens from 20, 30, 40, 50, 60, 70, 80, 90 in words length
const tens = [6, 6, 5, 5, 5, 7, 6, 6]

// Word length for words thousand, hundred, and
const thousandLength = 8
const hundredLength = 7
const andLength = 3

/**
 * Function to convert number to word
 *
 * This function is called recursively to handle thousand and its sub part
 */
const numberToWordLength = (n) => {
  let count = 0

  // If number is < 20 then return its corresponding value from ones
  if (n < 20) {
    return ones[n]
  }

  /**
   * To calculate tens value "n / 10 - 2" is performed, which might return decimal value
   * to extract proper integer value Math.floor is added
   * Here  "-2" is performed as our tens array start with index 0
   * To get appropriate value from that for our number it is required
   * e.g.,
   * -> 34 -> 34/10= 3.4 -> Math.floor(3.4) = 3
   * -> ones[3] = 5 // this is wrong
   * -> 3 - 2 = 1 -> ones[1] = 6
   *
   * To find ones part, unit is identified by n % 10
   * If > 0 then ones word is appended to tens word otherwise nothing
   * e.g.,
   * 1. 34 -> 10
   * 2. 30 -> 6
   */
  if (n >= 20 && n < 100) {
    const unit = n % 10
    return tens[Math.floor(n / 10 - 2)] + ((unit !== 0) ? ones[unit] : 0)
  }

  // Find thousand, hundred and sub part
  const hundred = Math.floor(n / 100) % 10
  const thousand = Math.floor(n / 1000)
  const sub = n % 100

  // Find ones for thousand part number
  // e.g., thousand = 2 => inWord = twothousand
  if (n > 999) {
    count += numberToWordLength(thousand) + thousandLength
  }

  // Find ones for hundred part number
  // e.g., hundred = 1 => inWord = onehundred
  if (hundred !== 0) {
    count += ones[hundred] + hundredLength
  }

  // Find and part of number
  // e.g., 922 => ninehundred"andtwentytwo"
  if (sub !== 0) {
    count += andLength + numberToWordLength(sub)
  }

  // return number in word format
  return count
}

/**
 * Function responsible for calculating total number word length
 * for provided input number
 * Validation is performed for input
 * Loop is executed to find total word length for given number range
 * starting from 1
 *
 *
 * @param {number} number
 * @returns {number}
 */
const countNumberWordLength = (number) => {
  let count = 0

  // Not a number check
  if (Number.isNaN(parseInt(number))) {
    throw new Error('Invalid input, please provide valid number')
  }

  // Number should be greater than 1
  if (number < 1) {
    throw new Error('Please provide number greater that 1')
  }

  // Loop to calculate word length by calling {@link numberToWord}
  for (let i = 1; i <= number; i++) {
    count += numberToWordLength(i)
  }

  // return final count for number word length
  return count
}

export { countNumberWordLength }
