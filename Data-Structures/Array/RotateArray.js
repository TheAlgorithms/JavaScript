/**
 * Rotates an array to the right by k positions
 * @see https://en.wikipedia.org/wiki/Circular_shift
 * @param {number[]} array - The array to rotate
 * @param {number} k - Number of positions to rotate
 * @returns {number[]} - New array rotated to the right by k positions
 * @throws {TypeError} - If input is not an array
 */
const rotateRight = (array, k) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array')
  }

  if (!Number.isInteger(k) || k < 0) {
    throw new TypeError('Rotation count must be a non-negative integer')
  }

  const length = array.length
  if (length === 0) return []

  const normalizedK = k % length
  const rotated = new Array(length)

  for (let i = 0; i < length; i++) {
    rotated[(i + normalizedK) % length] = array[i]
  }

  return rotated
}

/**
 * Rotates an array to the left by k positions
 * @see https://en.wikipedia.org/wiki/Circular_shift
 * @param {number[]} array - The array to rotate
 * @param {number} k - Number of positions to rotate
 * @returns {number[]} - New array rotated to the left by k positions
 * @throws {TypeError} - If input is not an array
 */
const rotateLeft = (array, k) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array')
  }

  if (!Number.isInteger(k) || k < 0) {
    throw new TypeError('Rotation count must be a non-negative integer')
  }

  const length = array.length
  if (length === 0) return []

  const normalizedK = k % length
  const rotated = new Array(length)

  for (let i = 0; i < length; i++) {
    rotated[i] = array[(i + normalizedK) % length]
  }

  return rotated
}

export { rotateRight, rotateLeft }
