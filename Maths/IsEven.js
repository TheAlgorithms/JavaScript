/*
 * Even Number: https://simple.wikipedia.org/wiki/Even_number
 *
 * function to check if number is even
 * return true if number is even
 * else false
 */

/**
 * @function isEven
 * @description - Checking if number is even using divisibility by 2
 *
 * If number is divisible by 2 i.e remainder = 0, then it is even
 * therefore, the function will return true
 *
 * If number is not divisible by 2 i.e remainder != 0, then it is not even i.e odd
 * therefore, the function will return false
 * @param {number} number
 * @return {boolean}
 */
export const isEven = (number) => number % 2 === 0

/**
 * @function isEvenBitwise
 * @description - Checking if number is even using bitwise operator
 * Bitwise AND (&) compares the bits of the 32
 * bit binary representations of the number and
 * returns a number after comparing each bit:
 *
 * 0 & 0 -> 0
 * 0 & 1 -> 0
 * 1 & 0 -> 0
 * 1 & 1 -> 1
 *
 * For odd numbers, the last binary bit will be 1
 * and for even numbers, the last binary bit will
 * be 0.
 *
 * As the number is compared with one, all the
 * other bits except the last will become 0. The
 * last bit will be 0 for even numbers and 1 for
 * odd numbers, which is checked with the use
 * of the equality operator.
 * @param {number} number
 * @returns {boolean}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
 */
export const isEvenBitwise = (number) => (number & 1) === 0
