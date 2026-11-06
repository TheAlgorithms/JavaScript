/**
 * @function leastCommonMultiple
 * @description Finds the least common multiple (LCM) of two positive
 *   integers using the relationship: LCM(a, b) = (a * b) / GCD(a, b).
 * @param {number} a - First positive integer
 * @param {number} b - Second positive integer
 * @returns {number} - The LCM of a and b
 * @see https://en.wikipedia.org/wiki/Least_common_multiple
 * @example leastCommonMultiple(4, 6) => 12
 * @example leastCommonMultiple(12, 15) => 60
 * @example leastCommonMultiple(7, 5) => 35
 */
const leastCommonMultiple = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) {
    throw new TypeError('Both inputs must be positive integers')
  }
  const gcd = (x, y) => {
    while (y !== 0) {
      ;[x, y] = [y, x % y]
    }
    return x
  }
  return (a * b) / gcd(a, b)
}

export { leastCommonMultiple }
