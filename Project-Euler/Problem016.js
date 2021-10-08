/**
 * Problem 16 - Power digit sum
 *
 * @see {@link https://projecteuler.net/problem=16}
 *
 * 2¹⁵ = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 2¹⁰⁰⁰ ?
 */

/**
 * Returns the power digit sum of n^pow.
 *
 * @param {number} [n=2]
 * @param {number} [pow=1000]
 * @returns {number}
 */
const powerDigitSum = function (n = 2, pow = 1000) {
  // The idea is to consider each digit (d*10^exp) separately, right-to-left.
  // digits = [units, tens, ...]

  const digits = [n]
  let p = 1

  while (++p <= pow) {
    let carry = 0
    for (let exp = 0; exp < digits.length; exp++) {
      const prod = digits[exp] * n + carry
      carry = Math.floor(prod / 10)
      digits[exp] = prod % 10
    }
    while (carry > 0) {
      digits.push(carry % 10)
      carry = Math.floor(carry / 10)
    }
  }

  // (digits are reversed but we only want the sum so it doesn't matter)

  return digits.reduce((prev, current) => prev + current, 0)
}

export { powerDigitSum }
