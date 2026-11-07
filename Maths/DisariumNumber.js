/**
 * @function isDisariumNumber
 * @description A Disarium number is a number where the sum of its digits
 *   powered with their respective positions is equal to the number itself.
 *   For example, 135: 1¹ + 3² + 5³ = 1 + 9 + 125 = 135.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is a Disarium number, false otherwise
 * @see https://en.wikipedia.org/wiki/Disarium_number
 * @example isDisariumNumber(135) => true
 * @example isDisariumNumber(89) => true
 * @example isDisariumNumber(10) => false
 */
const isDisariumNumber = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const digits = String(n).split('')
  const sum = digits.reduce((acc, d, i) => acc + Math.pow(Number(d), i + 1), 0)
  return sum === n
}

export { isDisariumNumber }
