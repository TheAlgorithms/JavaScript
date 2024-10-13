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
