
//  https://en.wikipedia.org/wiki/Fibonacci_number

/**
 * Return the N-th Fibonacci number
 *
 * @param {number} N
 * @returns {number}
 */
export const fibonacci = (N) => {
  if (N === 0 || N === 1) {
    return N
  }
  return fibonacci(N - 2) + fibonacci(N - 1)
}
