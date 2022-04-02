import { isEven } from './IsEven'

/**
 * This algorithm is divide the n by 2 every time and pass this to recursive call to find the result of smaller result.
 * why? Because
 *      x^n => [if n is even] x^(n / 2) *  x^(n / 2)     (example : 7^4 => 7^2 * 7^2)
 *             [if n is odd]  x^(n / 2) *  x^(n / 2) * x (example : 7^5 => 7^2 * 7^2 * 7)
 * and repeat the above step until we reach to the base case.
 *
 * @function PowLogarithmic
 * @description Given two integers x and n, return x^n in logarithmic complexity.
 * @param {Integer} x - The input integer
 * @param {Integer} n - The input integer
 * @return {Integer} - Returns x^n.
 * @see [Pow-Logarithmic](https://www.geeksforgeeks.org/write-a-c-program-to-calculate-powxn/)
 */
const powLogarithmic = (x, n) => {
  if (n === 0) return 1
  const result = powLogarithmic(x, Math.floor(n / 2))
  if (isEven(n)) {
    return result * result
  }
  return result * result * x
}

export { powLogarithmic }
