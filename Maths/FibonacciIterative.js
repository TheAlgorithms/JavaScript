/**
 * @function fibonacciIterative
 * @description Returns the nth Fibonacci number using an iterative approach.
 *   The Fibonacci sequence starts with 0 and 1, and each subsequent number
 *   is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, ...
 * @param {number} n - The position in the Fibonacci sequence (0-indexed)
 * @returns {number} - The nth Fibonacci number
 * @see https://en.wikipedia.org/wiki/Fibonacci_sequence
 * @example fibonacciIterative(0) => 0
 * @example fibonacciIterative(6) => 8
 * @example fibonacciIterative(10) => 55
 */
const fibonacciIterative = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  if (n === 0) return 0
  if (n === 1) return 1
  let a = 0
  let b = 1
  for (let i = 2; i <= n; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}

export { fibonacciIterative }
