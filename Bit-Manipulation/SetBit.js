/*
 * Setting Bit: https://www.geeksforgeeks.org/set-k-th-bit-given-number/
 *
 * To set any bit we use bitwise OR (|) operator.
 *
 * Bitwise OR (|) compares the bits of the 32
 * bit binary representations of the number and
 * returns a number after comparing each bit.
 *
 * 0 | 0 -> 0
 * 0 | 1 -> 1
 * 1 | 0 -> 1
 * 1 | 1 -> 1
 *
 * In-order to set kth bit of a number (where k is the position where bit is to be changed)
 * we need to shift 1 k times to its left and then perform bitwise OR operation with the
 * number and result of left shift performed just before.
 *
 * References:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR
 */

/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */

export const setBit = (number, bitPosition) => {
  return number | (1 << bitPosition)
}
