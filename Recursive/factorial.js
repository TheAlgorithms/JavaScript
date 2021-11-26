/**
 * @function Factorial
 * @description function to find factorial using recursion.
 * @param {Integer} x - The input integer
 * @param {Integer} n - The input integer
 * @return {Integer} - Returns x^n.
 * @see [Pow-Logarithmic](https://www.geeksforgeeks.org/write-a-c-program-to-calculate-powxn/)
 * @example 5! = 1*2*3*4*5 = 120
 * @example 2! = 1*2 = 2
 */

const factorial = (n) => {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

export { factorial }
