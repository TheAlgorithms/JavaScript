/**
 * Problem 24 - Lexicographic Permutations
 *
 * @see {@link https://projecteuler.net/problem=24}
 *
 * A permutation is an ordered arrangement of objects. For example, 3124 is one
 * possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
 * are listed numerically or alphabetically, we call it lexicographic order.
 * The lexicographic permutations of 0, 1 and 2 are:
 *
 * 012   021   102   120   201   210
 *
 * What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

export function lexicographicPermutations () {
  const factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let millionthCounter = 999999
  let result = ''

  for (let i = digits.length - 1; i >= 0; i--) {
    const permutation = (millionthCounter / factorial[i]) | 0

    millionthCounter %= factorial[i]
    result += digits[permutation]

    digits.splice(permutation, 1)
  }

  return result
}
