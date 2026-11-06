/**
 * @function compact
 * @description Removes all falsy values from an array.
 *   Falsy values are: false, null, 0, "", undefined, NaN.
 * @param {Array} arr - The input array
 * @returns {Array} - A new array with all falsy values removed
 * @see https://en.wikipedia.org/wiki/Truthiness
 * @example compact([1, false, 2, null, 3, undefined]) => [1, 2, 3]
 * @example compact([0, 1, "", 2, NaN, 3]) => [1, 2, 3]
 */
const compact = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array')
  }
  return arr.filter(Boolean)
}

export { compact }
