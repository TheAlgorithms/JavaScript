// Returns true if a number is odd, returns false if a number is even, and returns null if the number is a decimal.
function isOdd (num) {
  if (num < 0) {
    num *= -1
  }

  if (Math.floor(num) !== num) {
    console.error('Decimal Value')
    return null
  }

  if (num % 2 === 1) {
    return true
  }

  return false
}

console.log(isOdd(2))
console.log(isOdd(3))
