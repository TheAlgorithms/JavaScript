/**
 * @function abs
 * @description This script will find the absolute value of a number.
 * @param {number} num - The input integer
 * @return {number} - Absolute number of num.
 * @see https://en.wikipedia.org/wiki/Absolute_value
 * @example abs(-10) = 10
 * @example abs(50) = 50
 * @example abs(0) = 0
 */

const abs = (num) => {
  const result = Math.abs(num)

  if (Number.isNaN(result))
    throw new TypeError('Argument is NaN - Not a Number.')

  return result
}

export { abs }
