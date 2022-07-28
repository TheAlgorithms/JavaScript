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
 */

import { PrimeCheck } from './PrimeCheck'

function isCompositeNumber (number) {
  return number > 1 && !PrimeCheck(number)
}

export { isCompositeNumber }
