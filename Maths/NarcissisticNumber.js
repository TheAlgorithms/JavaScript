/**
 * @function isNarcissisticNumber
 * @description A narcissistic number (also known as an Armstrong number)
 *   for a given number of digits n is a number that equals the sum of
 *   its digits each raised to the power n. This function checks all
 *   narcissistic numbers up to a given limit.
 * @param {number} limit - A positive integer upper limit
 * @returns {number[]} - Array of all narcissistic numbers up to limit
 * @see https://en.wikipedia.org/wiki/Narcissistic_number
 * @example getNarcissisticNumbers(500) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407]
 * @example getNarcissisticNumbers(10) => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
const getNarcissisticNumbers = (limit) => {
  if (!Number.isInteger(limit) || limit < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const result = []
  for (let n = 1; n <= limit; n++) {
    const digits = String(n).split('')
    const power = digits.length
    const sum = digits.reduce((acc, d) => acc + Math.pow(Number(d), power), 0)
    if (sum === n) result.push(n)
  }
  return result
}

export { getNarcissisticNumbers }
