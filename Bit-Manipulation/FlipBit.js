/*
 * https://www.geeksforgeeks.org/modify-bit-given-position/
 *
 * To set any bit we use bitwise XOR (^) operator.
 *
 */

/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */

export const flipBit = (number, bitPosition) => {
  return number ^ (1 << bitPosition)
}
