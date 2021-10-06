<<<<<<< HEAD
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
=======
// https://projecteuler.net/problem=4
/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
   Find the largest palindrome made from the product of two 3-digit numbers.
*/
const largestPalindromic = (digits) => {
  let i
  let n
  let m
  let d
  let limit
  let number = 0

  for (i = 1; i < digits; i++) {
    number = 10 * number + 9
  }
  const inf = number // highest (digits - 1) number, in this example highest 2 digit number
  const sup = 10 * number + 9 // highest (digits) number, in this example highest 3 digit number

  const isPalindromic = (n) => {
    let p = 0
    const q = n
    let r
    while (n > 0) {
      r = n % 10
      p = 10 * p + r
      n = Math.floor(n / 10)
    }
    return p === q // returning whether the number is palindromic or not
  }

  for (n = sup * sup, m = inf * inf; n > m; n--) {
    if (isPalindromic(n)) {
      limit = Math.ceil(Math.sqrt(n))
      d = sup
      while (d >= limit) {
        if (n % d === 0 && n / d > inf) {
          return n
        }
        d -= 1
      }
    }
  }
  return NaN // returning not a number, if any such case arise
}

console.log(largestPalindromic(3))
>>>>>>> 6eeb9899307cc6eacb52592d91e9caa0e7615cf0
