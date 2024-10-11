/**
 *
 *  This script will check whether a number is even or odd
 *    using bit manipulation.
 *  Idea:
 *  A number can be determined as even or odd by the lsb(least significant bit) or the
 *  right most bit in binary representation
 *  if we simply perform an and operation with 1 and the number we can determine:
 *  eg:
 *  number & 1 == 1, the number is odd
 *  number & 1 == 0, the number is even
 *
 * More about it :
 * https://www.geeksforgeeks.org/check-if-a-number-is-odd-or-even-using-bitwise-operators/
 *
 */

export const evenOrOdd = (number) => {
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    throw new Error('Input must be an integer.')
  }
  return number & 1 ? 'odd' : 'even'
}
