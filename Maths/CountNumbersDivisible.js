/**
 * Count the numbers divisible by ‘M’ in a given range
 *
 * @see {@link https://www.tutorialspoint.com/count-the-numbers-divisible-by-m-in-a-given-range-in-cplusplus}
 *
 * We have 3 numbers A, B, M as inputs, A and B defines the numbers range [A, B]
 * Count the total number of divisibles in that range by number M
 *
 * @author Chetan07j
 */

/**
 * Function to find total divisibles in given range
 *
 * @param {number} num1
 * @param {number} num2
 * @param {number} divider
 *
 * @returns {number} count of total number of divisibles
 */
const countNumbersDivisible = (num1, num2, divider) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof divider !== 'number') {
    throw new Error('Invalid input, please pass only numbers')
  }

  // Valid number range is num1 < num2, otherwise throw error
  if (num1 > num2) {
    throw new Error('Invalid number range, please provide numbers such that num1 < num2')
  }

  // if divider is out of range then return 0
  // as in such case no divisible exists
  if (divider > num2) {
    return 0
  }

  // Find the number of multiples of divider for num1 and num2
  // integer division part
  const num1Multiplier = num1 / divider
  const num2Multiplier = num2 / divider

  // The count of numbers divisibles by divider between num1 and num2
  let divisibleCount = num2Multiplier - num1Multiplier

  // If num1 is divisible by divider then, edge case for num1 is ignored
  // which results in 1 less count
  // to fix that we add +1 in this case
  if (num1 % divider === 0) {
    divisibleCount++
  }

  // As it includes integer division meaning floating values
  // to get exact count Math.round() is added
  return Math.round(divisibleCount)
}

export { countNumbersDivisible }
