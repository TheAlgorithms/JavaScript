/**
 * @function fibonacci
 * @description Fibonacci is the sum of previous two fibonacci numbers.
 * @param {Integer} N - The input integer
 * @return {Integer} fibonacci of N.
 * @see [Fibonacci_Numbers](https://en.wikipedia.org/wiki/Fibonacci_number)
 */
const fibonacci = (N) => {
  if (!Number.isInteger(N)) {
    throw new TypeError('Input should be an integer')
  }

  if (N < 0) {
    throw new RangeError('Input should be a non-negative integer')
  }

  let firstNumber = 0
  let secondNumber = 1

  for (let i = 1; i < N; i++) {
    const sumOfNumbers = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = sumOfNumbers
  }

  return N ? secondNumber : firstNumber
}

export { fibonacci }
