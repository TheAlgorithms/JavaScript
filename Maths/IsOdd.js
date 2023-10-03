/*
 * Odd Number: https://simple.wikipedia.org/wiki/Odd_number
 * function to check if number is odd.
 * return true if number is odd.
 * else false
 */

/**
 * @function isOdd
 * @description -> Checking if number is odd using not divisibility by 2
 * If number is not divisible by 2 i.e remainder = 1, then it is odd
 * therefore, the function will return true
 *
 * If number is divisible by 2 i.e remainder != 1, then it is even
 * therefore, the function will return false
 * @param {number} number
 * @returns {boolean}
 */
const isOdd = (number) => Boolean(number % 2) // 1 -> true, 0 -> false
/**
 * @function isOddBitwise
 * @description -> Checking if number is even using bitwise operator
 * Bitwise AND (&) compares the bits of the 32
 * bit binary representations of the number and
 * returns a number after comparing each bit:
 *
 * 0 & 0 -> 0
 * 0 & 1 -> 0
 * 1 & 0 -> 0
 * 1 & 1 -> 1
 *
 * For every odd numbers, the last binary bit will be 1
 * and for even numbers, the last binary bit will be 0.
 *
 * As the number is compared with one, all the
 * other bits except the last will become 0. The
 * last bit will be 0 for even numbers and 1 for
 * odd numbers.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
 * @param {number} number
 * @returns {boolean}
 */
const isOddBitwise = (number) => Boolean(number & 1) // 1 -> true, 0 -> false

export { isOdd, isOddBitwise }
