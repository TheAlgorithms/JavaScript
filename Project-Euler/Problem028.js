/**
 * Problem 28 - Number spiral diagonals
 *
 * @see {@link https://projecteuler.net/problem=28}
 *
 * Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
 *
 * 21 22 23 24 25
 * 20 07 08 09 10
 * 19 06 01 02 11
 * 18 05 04 03 12
 * 17 16 15 14 13
 *
 * It can be verified that the sum of the numbers on the diagonals is 101.
 * What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
 *
 * @author ddaniel27
 */

function problem28 (dim) {
  if (dim % 2 === 0) {
    throw new Error('Dimension must be odd')
  }
  if (dim < 1) {
    throw new Error('Dimension must be positive')
  }

  let result = 1
  for (let i = 3; i <= dim; i += 2) {
    result += (4 * i * i) + 6 * (1 - i) // Calculate sum of each dimension corner
  }
  return result
}

export { problem28 }
