/**
 * @function multiplicativePersistence
 * @description Multiplicative persistence is the number of times you must
 *   multiply the digits of a number until you reach a single digit.
 *   For example, 39: 3×9=27, 2×7=14, 1×4=4 — persistence is 3.
 * @param {number} n - A non-negative integer
 * @returns {number} - The multiplicative persistence of n
 * @see https://en.wikipedia.org/wiki/Persistence_of_a_number
 * @example multiplicativePersistence(39) => 3
 * @example multiplicativePersistence(999) => 4
 * @example multiplicativePersistence(4) => 0
 */
const multiplicativePersistence = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  let count = 0
  let current = n
  while (current >= 10) {
    current = String(current)
      .split('')
      .reduce((product, d) => product * Number(d), 1)
    count++
  }
  return count
}

export { multiplicativePersistence }
