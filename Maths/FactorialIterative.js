/**
 * @function factorialIterative
 * @description Calculates the factorial of a non-negative integer
 *   using an iterative approach. The factorial of n (n!) is the
 *   product of all positive integers less than or equal to n.
 * @param {number} n - A non-negative integer
 * @returns {number} - The factorial of n
 * @see https://en.wikipedia.org/wiki/Factorial
 * @example factorialIterative(0) => 1
 * @example factorialIterative(5) => 120
 * @example factorialIterative(10) => 3628800
 */
const factorialIterative = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

export { factorialIterative }
