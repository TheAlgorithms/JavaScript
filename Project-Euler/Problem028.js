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

function problem28(dim) {
  if (dim % 2 === 0) {
    throw new Error('Dimension must be odd')
  }
  if (dim < 1) {
    throw new Error('Dimension must be positive')
  }

  let result = 1
  for (let i = 3; i <= dim; i += 2) {
    /**
     * Adding more dimensions to the matrix, we will find at the top-right corner the follow sequence:
     * 01, 09, 25, 49, 81, 121, 169, ...
     * So this can be expressed as:
     * i^2, where i is all odd numbers
     *
     * Also, we can know which numbers are in each corner dimension
     * Just develop the sequence counter clockwise from top-right corner like this:
     * First corner: i^2
     * Second corner: i^2 - (i - 1) | The "i - 1" is the distance between corners in each dimension
     * Third corner: i^2 - 2 * (i - 1)
     * Fourth corner: i^2 - 3 * (i - 1)
     *
     * Doing the sum of each corner and simplifying, we found that the result for each dimension is:
     * sumDim = 4 * i^2 + 6 * (1 - i)
     *
     * In this case I skip the 1x1 dim matrix because is trivial, that's why I start in a 3x3 matrix
     */
    result += 4 * i * i + 6 * (1 - i) // Calculate sum of each dimension corner
  }
  return result
}

export { problem28 }
