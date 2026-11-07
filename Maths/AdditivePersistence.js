/**
 * @function additivePersistence
 * @description Additive persistence is the number of times you must
 *   add the digits of a number until you reach a single digit.
 *   For example, 1679: 1+6+7+9=23, 2+3=5 — persistence is 2.
 * @param {number} n - A non-negative integer
 * @returns {number} - The additive persistence of n
 * @see https://en.wikipedia.org/wiki/Persistence_of_a_number
 * @example additivePersistence(1679) => 2
 * @example additivePersistence(199) => 3
 * @example additivePersistence(5) => 0
 */
const additivePersistence = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  let count = 0
  let current = n
  while (current >= 10) {
    current = String(current)
      .split('')
      .reduce((sum, d) => sum + Number(d), 0)
    count++
  }
  return count
}

export { additivePersistence }
