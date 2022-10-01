/**
 * @function fibonacci
 * @description Fibonacci is the sum of previous two fibonacci numbers.
 * @param {Integer} N - The input integer
 * @return {Integer} fibonacci of N.
 * @see [Fibonacci_Numbers](https://en.wikipedia.org/wiki/Fibonacci_number)
 */
const fibonacci = (N) => {
  if (!Number.isInteger(N)) {
    throw new TypeError('Input should be integer')
  }
  const dp = new Map()
  return fiboDP(N, dp)
}

const fiboDP = (N, dp) => {
  if (N <= 1) return N

  if (dp.has(N)) return dp.get(N)

  const result = fiboDP(N - 1, dp) + fiboDP(N - 2, dp)
  dp.set(N, result)
  return result
}

export { fibonacci }
