/**
 *
 * Project Euler 4
 *
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the
 * product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made
 * from the product of two 3-digit numbers.
 *
 */

function largestPalindrome(n) {
  const max = parseInt('1' + '0'.repeat(n))
  const min = parseInt('9'.repeat(n - 1))

  const palindromes = []
  for (let i = min + 1; i < max; i++) {
    for (let j = min + 1; j < max; j++) {
      if (
        (i * j).toString().split('').reverse().join('') === (i * j).toString()
      ) {
        palindromes.push(i * j)
      }
    }
  }

  return Math.max(...palindromes)
}

console.log(largestPalindrome(3))
