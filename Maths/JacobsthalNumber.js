/**
 * @function jacobsthalNumber
 * @description Jacobsthal numbers are a sequence where each number is
 *   the sum of the previous number and twice the number before that.
 *   Sequence: 0, 1, 1, 3, 5, 11, 21, 43, 85, 171...
 * @param {number} n - The position in the Jacobsthal sequence (0-indexed)
 * @returns {number} - The nth Jacobsthal number
 * @see https://en.wikipedia.org/wiki/Jacobsthal_number
 * @example jacobsthalNumber(0) => 0
 * @example jacobsthalNumber(4) => 5
 * @example jacobsthalNumber(6) => 21
 */
const jacobsthalNumber = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  if (n === 0) return 0
  if (n === 1) return 1
  let a = 0
  let b = 1
  for (let i = 2; i <= n; i++) {
    ;[a, b] = [b, b + 2 * a]
  }
  return b
}

export { jacobsthalNumber }
