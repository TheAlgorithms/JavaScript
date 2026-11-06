/**
 * @function isHarshadNumber
 * @description A Harshad number (also called Niven number) is an integer
 *   that is divisible by the sum of its digits.
 *   For example, 18 is a Harshad number because 1+8=9 and 18/9=2.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is a Harshad number, false otherwise
 * @see https://en.wikipedia.org/wiki/Harshad_number
 * @example isHarshadNumber(18) => true
 * @example isHarshadNumber(21) => true
 * @example isHarshadNumber(19) => false
 */
const isHarshadNumber = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const digitSum = String(n)
    .split('')
    .reduce((sum, d) => sum + Number(d), 0)
  return n % digitSum === 0
}

export { isHarshadNumber }
