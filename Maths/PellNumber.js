/**
 * @function pellNumber
 * @description Pell numbers are an infinite sequence of integers similar
 *   to Fibonacci. Each number is the sum of twice the previous number
 *   and the number before that.
 *   Sequence: 0, 1, 2, 5, 12, 29, 70, 169...
 * @param {number} n - The position in the Pell sequence (0-indexed)
 * @returns {number} - The nth Pell number
 * @see https://en.wikipedia.org/wiki/Pell_number
 * @example pellNumber(0) => 0
 * @example pellNumber(1) => 1
 * @example pellNumber(4) => 12
 */
const pellNumber = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  if (n === 0) return 0
  if (n === 1) return 1
  let a = 0
  let b = 1
  for (let i = 2; i <= n; i++) {
    ;[a, b] = [b, 2 * b + a]
  }
  return b
}

export { pellNumber }
