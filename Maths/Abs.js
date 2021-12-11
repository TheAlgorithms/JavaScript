/**
 * @function absVal
 * @description This script will find the absolute value of a number.
 * @param {Integer} num - The input integer
 * @return {Integer} - Absolute number of num.
 * @see [Absolute_value](https://en.wikipedia.org/wiki/Absolute_value)
 * @example absVal(-10) = 10
 * @example absVal(50) = 50
 * @example absVal(0) = 0
 */

const absVal = (num) => {
  // Find absolute value of `num`.
  'use strict'
  if (num < 0) {
    return -num
  }
  // Executes if condition is not met.
  return num
}

export { absVal }
