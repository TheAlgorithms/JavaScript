/**
 * @function tribonacciNumber
 * @description The Tribonacci sequence is similar to Fibonacci but each
 *   number is the sum of the three preceding ones.
 *   Sequence: 0, 0, 1, 1, 2, 4, 7, 13, 24, 44...
 * @param {number} n - The position in the Tribonacci sequence (0-indexed)
 * @returns {number} - The nth Tribonacci number
 * @see https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Tribonacci_numbers
 * @example tribonacciNumber(0) => 0
 * @example tribonacciNumber(4) => 2
 * @example tribonacciNumber(7) => 13
 */
const tribonacciNumber = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  if (n === 0 || n === 1) return 0
  if (n === 2) return 1
  let a = 0
  let b = 0
  let c = 1
  for (let i = 3; i <= n; i++) {
    ;[a, b, c] = [b, c, a + b + c]
  }
  return c
}

export { tribonacciNumber }
