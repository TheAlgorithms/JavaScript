/**
 * Problem - Longest Recurring Cycle
 *
 * @see {@link https://projecteuler.net/problem=26}
 *
 * Find the value of denominator < 1000 for which 1/denominator contains the longest recurring cycle in its decimal fraction part.
 */

/**
 * Main function to find the denominator < limit with the longest recurring cycle in 1/denominator.
 *
 * @param {number} limit - The upper limit for the denominator (exclusive).
 * @returns {number} The denominator that has the longest recurring cycle in its decimal fraction part.
 */
function findLongestRecurringCycle(limit) {
  /**
   * Calculates the length of the recurring cycle for 1 divided by a given denominator.
   *
   * @param {number} denominator - The denominator of the unit fraction (1/denominator).
   * @returns {number} The length of the recurring cycle in the decimal part of 1/denominator.
   */
  function getRecurringCycleLength(denominator) {
    const remainderPositions = new Map()
    let numerator = 1
    let position = 0

    while (numerator !== 0) {
      if (remainderPositions.has(numerator)) {
        return position - remainderPositions.get(numerator)
      }

      remainderPositions.set(numerator, position)

      numerator = (numerator * 10) % denominator
      position++
    }

    return 0
  }

  let maxCycleLength = 0
  let denominatorWithMaxCycle = 0

  for (let denominator = 2; denominator < limit; denominator++) {
    const cycleLength = getRecurringCycleLength(denominator)

    if (cycleLength > maxCycleLength) {
      maxCycleLength = cycleLength
      denominatorWithMaxCycle = denominator
    }
  }

  return denominatorWithMaxCycle
}

export { findLongestRecurringCycle }
