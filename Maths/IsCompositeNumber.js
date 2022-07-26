/*
 * Composite number: https://en.wikipedia.org/wiki/Composite_number
 * function isCompositeNumber
 * Check if a given number is a composite number or not?
 * isCompositeNumber(6) // returns true
 * isCompositeNumber(577) // returns false
 * isCompositeNumber(2024) // returns true
 * A composite number is a positive integer that is not prime. In other words, it has a positive divisor other than one or itself.
 * First few composite numbers are 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, ………
 * Every integer greater than one is either a prime number or a composite number.
 * The number one is a unit – it is neither prime nor composite.
 * Reference: https://www.geeksforgeeks.org/composite-number/
 */

function isCompositeNumber (number) {
  // Condition that can immediate skip:
  // Corner cases
  if (number <= 1) return false
  if (number <= 3) return false
  // middle five numbers in below loop
  if (number % 2 === 0 || number % 3 === 0) return true

  for (let i = 5; i * i <= number; i = i + 6) {
    if (number % i === 0 || number % (i + 2) === 0) { return true }
  }

  return false
}

export { isCompositeNumber }
