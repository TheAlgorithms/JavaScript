/**
 * @function lucasNumber
 * @description Lucas numbers are an integer sequence similar to Fibonacci,
 *   starting with 2 and 1. Each subsequent number is the sum of the two
 *   preceding ones: 2, 1, 3, 4, 7, 11, 18, 29, ...
 * @param {number} n - The position in the Lucas sequence (0-indexed)
 * @returns {number} - The nth Lucas number
 * @see https://en.wikipedia.org/wiki/Lucas_number
 * @example lucasNumber(0) => 2
 * @example lucasNumber(4) => 7
 */
const lucasNumber = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  if (n === 0) return 2
  if (n === 1) return 1
  let a = 2
  let b = 1
  for (let i = 2; i <= n; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}

export { lucasNumber }
