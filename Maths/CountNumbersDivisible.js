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
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    typeof divider !== 'number'
  ) {
    throw new Error('Invalid input, please pass only numbers')
  }

  // Valid number range is num1 < num2, otherwise throw error
  if (num1 > num2) {
    throw new Error(
      'Invalid number range, please provide numbers such that num1 < num2'
    )
  }

  const positiveDivider = Math.abs(divider)
  return (
    Math.floor(num2 / positiveDivider) - Math.ceil(num1 / positiveDivider) + 1
  )
}

export { countNumbersDivisible }
