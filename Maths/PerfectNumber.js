/**
 * Author: dephraiim
 * License: GPL-3.0 or later
 *
 * == Perfect Number ==
 * In number theory, a perfect number is a positive integer that is equal to the sum of
 * its positive divisors(factors), excluding the number itself.
 * For example: 6 ==> divisors[1, 2, 3, 6]
 *      Excluding 6, the sum(divisors) is 1 + 2 + 3 = 6
 *      So, 6 is a Perfect Number
 * Other examples of Perfect Numbers: 28, 486, ...
 *
 * More on Perfect Number:
 *      https://en.wikipedia.org/wiki/Perfect_number
 *
 */

const factorsExcludingNumber = (n) => {
  return [...Array(n).keys()].filter((num) => n % num === 0)
}

const perfectNumber = (n) => {
  const factorSum = factorsExcludingNumber(n).reduce((num, initialValue) => {
    return num + initialValue
  }, 0)

  return factorSum === n
}

export { perfectNumber }
