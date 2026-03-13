/**
 * @license             GPL-3.0 or later
 *
 * @description         Checking if number is even
 */

/**
 * @function            isEven
 * @description         Checking if number is even
 *
 * If the division: number / 2 results in remainder being 0
 * the number is even, otherwise it's odd
 *
 * @param {number}      number - Value to check
 * @return {boolean}    True if number is even else False
 *
 * @see https://simple.wikipedia.org/wiki/Even_number to get
 * more details on even numbers
 */
const isEven = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number))
    throw new TypeError('Argument is Not a Number')

  return Boolean(number % 2) === false
}

/**
 * @function            isEvenBitwise
 * @description         Checking if number is even using bitwise
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
 * @return {boolean}    True if number is even else False
 *
 * @see https://en.wikipedia.org/wiki/Bit_numbering to get
 * details on LSB (Least Significant Bit) and
 * https://en.wikipedia.org/wiki/Bitwise_operation#AND
 * to get details on bitwise AND operator
 */
const isEvenBitwise = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number))
    throw new TypeError('Argument is Not a Number')

  return Boolean(number & 1) === false
}

export { isEven, isEvenBitwise }
