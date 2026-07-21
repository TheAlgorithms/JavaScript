/**
 * Author: dephraiim
 * License: GPL-3.0 or later
 *
 * More on Factors:
 *      https://www.mathsisfun.com/definitions/factor.html
 *
 */

/**
 * Finds every positive factor of a number in ascending order.
 *
 * Time complexity: O(sqrt(number))
 * Space complexity: O(k), where k is the number of factors
 */
const factorsOfANumber = (number = 0) => {
  if (!Number.isInteger(number) || number <= 0) return []

  const lowerFactors = []
  const upperFactors = []

  for (let divisor = 1; divisor <= number / divisor; divisor++) {
    if (number % divisor !== 0) continue

    lowerFactors.push(divisor)

    const pairedDivisor = number / divisor
    if (pairedDivisor !== divisor) {
      upperFactors.push(pairedDivisor)
    }
  }

  return lowerFactors.concat(upperFactors.reverse())
}

export { factorsOfANumber }
