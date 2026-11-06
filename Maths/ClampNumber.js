/**
 * @function clampNumber
 * @description Clamps a number between a minimum and maximum value.
 *   If the number is less than min, returns min.
 *   If the number is greater than max, returns max.
 *   Otherwise returns the number itself.
 * @param {number} num - The number to clamp
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} - The clamped number
 * @see https://en.wikipedia.org/wiki/Clamping_(graphics)
 * @example clampNumber(5, 1, 10) => 5
 * @example clampNumber(-5, 1, 10) => 1
 * @example clampNumber(15, 1, 10) => 10
 */
const clampNumber = (num, min, max) => {
  if (
    typeof num !== 'number' ||
    typeof min !== 'number' ||
    typeof max !== 'number' ||
    isNaN(num) ||
    isNaN(min) ||
    isNaN(max)
  ) {
    throw new TypeError('All inputs must be numbers')
  }
  if (min > max) {
    throw new RangeError('min must be less than or equal to max')
  }
  return Math.min(Math.max(num, min), max)
}

export { clampNumber }
