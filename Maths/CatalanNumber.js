/**
 * @function catalanNumber
 * @description Catalan numbers are a sequence of natural numbers with
 *   many applications in combinatorics. The nth Catalan number is given
 *   by: C(n) = (2n)! / ((n+1)! * n!)
 * @param {number} n - A non-negative integer
 * @returns {number} - The nth Catalan number
 * @see https://en.wikipedia.org/wiki/Catalan_number
 * @example catalanNumber(0) => 1
 * @example catalanNumber(3) => 5
 * @example catalanNumber(5) => 42
 */
const catalanNumber = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  if (n === 0 || n === 1) return 1
  let result = 0
  for (let i = 0; i < n; i++) {
    result += catalanNumber(i) * catalanNumber(n - 1 - i)
  }
  return result
}

export { catalanNumber }
