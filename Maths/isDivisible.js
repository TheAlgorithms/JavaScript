// Checks if a number is divisible by another number.

const isDivisible = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2) || num1 == null || num2 == null) {
    return 'All parameters have to be numbers'
  }
  if (num2 === 0) {
    return 'Not possible to divide by zero'
  }
  return num1 % num2 === 0
}

console.log(isDivisible(10, 5)) // returns true
console.log(isDivisible(123498175, 5)) // returns true
console.log(isDivisible(99, 5)) // returns false
