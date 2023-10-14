/*
 * Clear Bit: https://www.geeksforgeeks.org/program-to-clear-k-th-bit-of-a-number-n/
 *
 * To clear any bit we use bitwise AND (|) operator and bitwise NOT (~) operator.
 *
 *
 * 0 & 0 -> 0
 * 0 & 1 -> 0
 * 1 & 0 -> 0
 * 1 & 1 -> 1
 *
 * In-order to clear kth bit of a number (where k is the position where bit is to be changed)
 * we need to shift 1 k times to its left and then perform bitwise NOT on it later perform bitwise AND operation with the
 * number and result of left shift+negation performed just before.
 *
 * References:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
 */

/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */

export const clearBit = (number, bitPosition) => {
  return (number & (~(1 << (bitPosition - 1))));
}
