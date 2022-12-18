/**
 * @function Factorial
 * @description function to find factorial using recursion.
 * @param {Integer} n - The input integer
 * @return {Integer} - Factorial of n.
 * @see [Factorial](https://en.wikipedia.org/wiki/Factorial)
 * @example 5! = 1*2*3*4*5 = 120
 * @example 2! = 1*2 = 2
 */

const factorial = (n) => {
  if (!Number.isInteger(n)) {
    throw new RangeError('Not a Whole Number')
  }

  if (n < 0) {
    throw new RangeError('Not a Positive Number')
  }

  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

export { factorial }
