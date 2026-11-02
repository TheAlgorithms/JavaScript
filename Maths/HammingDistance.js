/**
 * @function hammingDistance
 * @description Hamming distance between two integers is the number of
 *   positions at which the corresponding bits are different.
 * @param {number} a - First non-negative integer
 * @param {number} b - Second non-negative integer
 * @returns {number} - The Hamming distance between a and b
 * @see https://en.wikipedia.org/wiki/Hamming_distance
 * @example hammingDistance(1, 4) => 2
 * @example hammingDistance(3, 1) => 1
 */
const hammingDistance = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    throw new TypeError('Inputs must be non-negative integers')
  }
  let xor = a ^ b
  let distance = 0
  while (xor > 0) {
    distance += xor & 1
    xor >>= 1
  }
  return distance
}

export { hammingDistance }
