/**
 * @function isDudeneyNumber
 * @description A Dudeney number is a positive integer that is a perfect
 *   cube such that the sum of its digits equals the cube root of the number.
 *   For example, 512: cube root of 512 = 8, and 5+1+2 = 8.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is a Dudeney number, false otherwise
 * @see https://en.wikipedia.org/wiki/Dudeney_number
 * @example isDudeneyNumber(512) => true
 * @example isDudeneyNumber(1) => true
 * @example isDudeneyNumber(100) => false
 */
const isDudeneyNumber = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const cubeRoot = Math.round(Math.cbrt(n))
  if (cubeRoot ** 3 !== n) return false
  const digitSum = String(n)
    .split('')
    .reduce((sum, d) => sum + Number(d), 0)
  return digitSum === cubeRoot
}

export { isDudeneyNumber }
