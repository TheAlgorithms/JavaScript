/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9? 
*/

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1)
}

export function findNthLexicographicPermutation(digits, n) {
  let permutation = ''
  let k = n - 1

  while (digits.length > 0) {
    const fact = factorial(digits.length - 1)
    const index = Math.floor(k / fact)
    permutation += digits[index]
    digits.splice(index, 1)
    k %= fact
  }

  return permutation
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(findNthLexicographicPermutation(digits, 1000000))
