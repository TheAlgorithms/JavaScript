/**
 * @license             GPL-3.0 or later
 *
 * @description         Checking if number is odd
 */

/**
 * @function            isOdd
 * @description         Checking if number is odd
 *
 * If the division: number / 2 results in remainder being
 * different from 0 the number is odd, otherwise it's even
 *
 * @param {number}      number - Value to check
 * @return {boolean}    True if number is odd else False
 *
 * @see https://simple.wikipedia.org/wiki/Odd_number to get
 * more details on odd numbers
 */
const isOdd = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number))
    throw new TypeError('Argument is Not a Number')

  return Boolean(number % 2) === true
}

/**
 * @function            isOddBitwise
 * @description         Checking if number is odd using bitwise
 *                      operation
 *
 * Bitwise AND (&) compares the bits of the 32 bit binary
 * representations of the number and returns a number after
 * comparing each bit:
 *  0 & 0 -> 0
 *  0 & 1 -> 0
 *  1 & 0 -> 0
 *  1 & 1 -> 1
 * For odd numbers, the LSB (Least Significant Bit) will be 1
 * and for even numbers, the LSB will be 0. As the number is
 * compared to one, all other bits will become 0
 *  0 1 1 1 = 7
 *  & & & &
 *  0 0 0 1 = 1
 *  ↓ ↓ ↓ ↓
 *  0 0 0 1 = odd since LSB is equal to 1
 *
 * @param {number}      number - Value to check
 * @return {boolean}    True if number is odd else False
 *
 * @see https://en.wikipedia.org/wiki/Bit_numbering to get
 * details on LSB (Least Significant Bit) and
 * https://en.wikipedia.org/wiki/Bitwise_operation#AND
 * to get details on bitwise AND operator
 */
const isOddBitwise = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number))
    throw new TypeError('Argument is Not a Number')

  return Boolean(number & 1) === true
}

export { isOdd, isOddBitwise }
