/*
  A program to calculate the Aliquot Sum of a number.
  Article on Aliquot Sum: https://en.wikipedia.org/wiki/Aliquot_sum
 */

/**
 * @param {Number} input The number whose aliquot sum you want to calculate
 */
function aliquotSum (input) {
  // input can't be negative
  if (input < 0) throw new TypeError('Input cannot be Negative')

  // input can't be a decimal
  if (Math.floor(input) !== input) throw new TypeError('Input cannot be a Decimal')

  // Dealing with 1, which isn't a prime
  if (input === 1) return 0

  let sum = 0
  for (let i = 1; i <= (input / 2); i++) {
    if (input % i === 0) sum += i
  }

  return sum
}

export { aliquotSum }
