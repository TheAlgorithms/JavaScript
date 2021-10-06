// Checks if a number is divisible by another number.

export const isDivisible = (num1, num2) => {
  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    throw new TypeError('Expected a number')
  }
  if (num2 === 0) {
    return false
  }
  return num1 % num2 === 0
}

console.log(isDivisible(10, 5)) // returns true
console.log(isDivisible(123498175, 5)) // returns true
console.log(isDivisible(99, 5)) // returns false
