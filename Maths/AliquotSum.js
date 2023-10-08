/*
  A program to calculate the Aliquot Sum of a number.
  The aliquot sum of a number n, is the sum of all the proper divisors of n apart from n itself
  For example, for the number 6
  The divisors are 1, 2, 3 (we don't consider 6), so its aliquot sum is 1 + 2 + 3 = 6
  1 is the only number whose aliquot sum is 0 (since its only divisor is 1 and aliquot sum of a number couldn't have itself)
  For all prime numbers, the aliquot sum is 1, since their only divisor apart from themselves is 1
  Article on Aliquot Sum: https://en.wikipedia.org/wiki/Aliquot_sum
 */

/**
 * @param {Number} input The number whose aliquot sum you want to calculate
 */
function aliquotSum(input) {
  // input can't be negative
  if (input < 0) throw new TypeError('Input cannot be Negative')

  // input can't be a decimal
  if (Math.floor(input) !== input)
    throw new TypeError('Input cannot be a Decimal')

  // Dealing with 1, which isn't a prime
  if (input === 1) return 0

  let sum = 0
  for (let i = 1; i <= input / 2; i++) {
    if (input % i === 0) sum += i
  }

  return sum
}

export { aliquotSum }
