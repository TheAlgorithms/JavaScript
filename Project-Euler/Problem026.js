/**
 * Problem - Longest Recurring Cycle
 *
 * @see {@link https://projecteuler.net/problem=26}
 *
 * Find the value of denominator < 1000 for which 1/denominator contains the longest recurring cycle in its decimal fraction part.
 *
 * A unit fraction (1/denominator) either terminates or repeats. We need to determine the length of the repeating sequence (cycle)
 * for each fraction where the denominator is between 2 and 999, and find the denominator that produces the longest cycle.
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
    // A map to store the position of each remainder encountered during division
    const remainderPositions = new Map()
    let numerator = 1 // We start with 1 as the numerator (as we're computing 1/denominator)
    let position = 0 // This tracks the position of each digit in the decimal sequence

    // Continue until the remainder becomes 0 (terminating decimal) or a cycle is found
    while (numerator !== 0) {
      // If the remainder has been seen before, we've found the start of the cycle
      if (remainderPositions.has(numerator)) {
        // The length of the cycle is the current position minus the position when the remainder first appeared
        return position - remainderPositions.get(numerator)
      }

      // Record the position of this remainder
      remainderPositions.set(numerator, position)

      // Multiply numerator by 10 to simulate long division and get the next digit
      numerator = (numerator * 10) % denominator
      position++ // Move to the next digit position
    }

    // If numerator becomes 0, it means the decimal terminates (no cycle)
    return 0
  }

  let maxCycleLength = 0 // Store the maximum cycle length found
  let denominatorWithMaxCycle = 0 // Store the denominator corresponding to the longest cycle

  // Iterate through each possible denominator from 2 up to (limit - 1)
  for (let denominator = 2; denominator < limit; denominator++) {
    // Calculate the cycle length for the current denominator
    const cycleLength = getRecurringCycleLength(denominator)

    // Update the maximum length and the corresponding denominator if a longer cycle is found
    if (cycleLength > maxCycleLength) {
      maxCycleLength = cycleLength
      denominatorWithMaxCycle = denominator
    }
  }

  // Return the denominator that has the longest recurring cycle
  return denominatorWithMaxCycle
}

// Exporting the main function for use in other modules
export { findLongestRecurringCycle }
