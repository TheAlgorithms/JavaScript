/**
 * @function rotate
 * @description Rotates an array to the right by k positions.
 *   Elements that fall off the end are placed at the beginning.
 * @param {Array} arr - The input array
 * @param {number} k - Number of positions to rotate right
 * @returns {Array} - The rotated array
 * @see https://en.wikipedia.org/wiki/Circular_shift
 * @example rotate([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 * @example rotate([1, 2, 3], 1) => [3, 1, 2]
 * @example rotate([1, 2, 3], 3) => [1, 2, 3]
 */
const rotate = (arr, k) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('First argument must be an array')
  }
  if (!Number.isInteger(k)) {
    throw new TypeError('Second argument must be an integer')
  }
  if (arr.length === 0) return []
  const steps = ((k % arr.length) + arr.length) % arr.length
  return [...arr.slice(arr.length - steps), ...arr.slice(0, arr.length - steps)]
}

export { rotate }
