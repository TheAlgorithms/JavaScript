/**
 * @function eulerTotient
 * @description Euler's totient function counts the positive integers up to n
 *   that are relatively prime to n (i.e., gcd(k, n) = 1).
 * @param {number} n - A positive integer greater than 0
 * @returns {number} - Count of integers from 1 to n coprime to n
 * @see https://en.wikipedia.org/wiki/Euler%27s_totient_function
 * @example eulerTotient(9) => 6
 * @example eulerTotient(1) => 1
 */
const eulerTotient = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  let result = n
  let p = 2
  let temp = n
  while (p * p <= temp) {
    if (temp % p === 0) {
      while (temp % p === 0) temp = Math.floor(temp / p)
      result -= Math.floor(result / p)
    }
    p++
  }
  if (temp > 1) result -= Math.floor(result / temp)
  return result
}

export { eulerTotient }
