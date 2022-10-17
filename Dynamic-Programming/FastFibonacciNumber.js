/**
 * @function fastFibonacci
 * @description fastFibonacci is same as fibonacci algorithm by calculating the sum of previous two fibonacci numbers but in O(log(n)).
 * @param {Integer} N - The input integer
 * @return {Integer} fibonacci of N.
 * @see [Fast_Fibonacci_Numbers](https://www.geeksforgeeks.org/fast-doubling-method-to-find-the-nth-fibonacci-number/)
 */

// recursive function that returns (F(n), F(n-1))
const fib = (N) => {
  if (N === 0) return [0, 1]
  const [a, b] = fib(Math.trunc(N / 2))
  const c = a * (b * 2 - a)
  const d = a * a + b * b
  return N % 2 ? [d, c + d] : [c, d]
}

const fastFibonacci = (N) => {
  if (!Number.isInteger(N)) {
    throw new TypeError('Input should be integer')
  }
  return fib(N)[0]
}

export { fastFibonacci }
