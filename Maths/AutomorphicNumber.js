/**
 * @function isAutomorphic
 * @author [SilverDragonOfR] (https://github.com/SilverDragonOfR)
 *
 * @see [Automorphic] (https://en.wikipedia.org/wiki/Automorphic_number)
 * @description This script will check whether a number is Automorphic or not
 * @description A number n is said to be a Automorphic number if the square of n ends in the same digits as n itself.
 *
 * @param {Integer} n - the n for nth Catalan Number
 * @return {Integer} - the nth Catalan Number
 * @complexity Time: O(log10(n)) , Space: O(1)
 *
 * @convention We define Automorphic only for whole number integers. For negetive integer we return False. For float or String we show error.
 * @examples 0, 1, 5, 6, 25, 76, 376, 625, 9376 are some Automorphic numbers
 */

// n is the number to be checked
export const isAutomorphic = (n) => {
  if (typeof n !== 'number') {
    throw new Error('Type of n must be number')
  }
  if (!Number.isInteger(n)) {
    throw new Error('n cannot be a floating point number')
  }
  if (n < 0) {
    return false
  }

  // now n is a whole number integer >= 0
  let n_sq = n * n
  while (n > 0) {
    if (n % 10 !== n_sq % 10) {
      return false
    }
    n = Math.floor(n / 10)
    n_sq = Math.floor(n_sq / 10)
  }

  return true
}
