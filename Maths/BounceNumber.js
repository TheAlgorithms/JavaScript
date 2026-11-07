/**
 * @function isBounceNumber
 * @description A bounce number is a number whose digits are neither
 *   entirely increasing nor entirely decreasing from left to right.
 *   For example, 155349 is a bounce number.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is a bounce number, false otherwise
 * @see https://projecteuler.net/problem=112
 * @example isBounceNumber(155349) => true
 * @example isBounceNumber(1234) => false
 * @example isBounceNumber(9876) => false
 */
const isBounceNumber = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const digits = String(n).split('').map(Number)
  if (digits.length === 1) return false
  let increasing = false
  let decreasing = false
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] > digits[i - 1]) increasing = true
    if (digits[i] < digits[i - 1]) decreasing = true
  }
  return increasing && decreasing
}

export { isBounceNumber }
