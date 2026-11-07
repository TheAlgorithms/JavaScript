/**
 * @function isKaprekarNumber
 * @description A Kaprekar number is a positive integer whose square can
 *   be split into two parts that add up to the original number.
 *   For example, 9: 9²=81, 8+1=9. 45: 45²=2025, 20+25=45.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is a Kaprekar number, false otherwise
 * @see https://en.wikipedia.org/wiki/Kaprekar_number
 * @example isKaprekarNumber(9) => true
 * @example isKaprekarNumber(45) => true
 * @example isKaprekarNumber(10) => false
 */
const isKaprekarNumber = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const square = String(n * n)
  for (let i = 1; i < square.length; i++) {
    const left = Number(square.slice(0, i)) || 0
    const right = Number(square.slice(i))
    if (right > 0 && left + right === n) return true
  }
  return false
}

export { isKaprekarNumber }
