/**
 * @function isKrishnamurthyNumber
 * @description A Krishnamurthy number (also called a Strong number) is a
 *   number whose sum of factorials of its digits equals the number itself.
 *   For example, 145: 1! + 4! + 5! = 1 + 24 + 120 = 145.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is a Krishnamurthy number, false otherwise
 * @see https://en.wikipedia.org/wiki/Krishnamurthy_number
 * @example isKrishnamurthyNumber(145) => true
 * @example isKrishnamurthyNumber(40585) => true
 * @example isKrishnamurthyNumber(100) => false
 */
const isKrishnamurthyNumber = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const factorial = (num) => {
    if (num === 0 || num === 1) return 1
    let result = 1
    for (let i = 2; i <= num; i++) result *= i
    return result
  }
  const sum = String(n)
    .split('')
    .reduce((acc, d) => acc + factorial(Number(d)), 0)
  return sum === n
}

export { isKrishnamurthyNumber }
