/**
 * @function squareRoot
 * @description Calculates the square root of a non-negative number
 *   using the Babylonian (Newton's) method without using Math.sqrt().
 * @param {number} n - A non-negative number
 * @param {number} precision - Decimal places of precision (default: 10)
 * @returns {number} - The square root of n
 * @see https://en.wikipedia.org/wiki/Methods_of_computing_square_roots
 * @example squareRoot(4) => 2
 * @example squareRoot(9) => 3
 * @example squareRoot(2) => 1.4142135624
 */
const squareRoot = (n, precision = 10) => {
  if (typeof n !== 'number' || isNaN(n) || n < 0) {
    throw new TypeError('Input must be a non-negative number')
  }
  if (!Number.isInteger(precision) || precision < 0) {
    throw new TypeError('Precision must be a non-negative integer')
  }
  if (n === 0 || n === 1) return n
  let guess = n / 2
  const epsilon = Math.pow(10, -precision)
  while (Math.abs(guess * guess - n) > epsilon) {
    guess = (guess + n / guess) / 2
  }
  return parseFloat(guess.toFixed(precision))
}

export { squareRoot }
