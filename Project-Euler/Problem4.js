function isPalindrome (number) {
  // just 2 random names for variables!
  const look = String(number)
  let hear = false

  for (let i = 0; i < look.length; i++) {
    if (look[i] === look[(look.length) - (i + 1)]) {
      hear = true
    } else {
      return false
    }
  }
  return hear
}

function largestPalindromeProduct (n) {
  let product = 0
  let largestPalindrome = 11

  for (let i = 10 ** (n - 1); i < 10 ** n; i++) {
    for (let j = 10 ** (n - 1); j < 10 ** n; j++) {
      product = i * j
      if (isPalindrome(product) && product > largestPalindrome) { largestPalindrome = product }
    }
  }
  return largestPalindrome
}

console.log(isPalindrome(9009))
console.log(largestPalindromeProduct(2))
