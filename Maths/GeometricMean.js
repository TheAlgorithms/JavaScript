/**
 * @function geometricMean
 * @description Calculates the geometric mean of an array of positive numbers.
 *   The geometric mean is the nth root of the product of n numbers.
 *   Formula: (x1 * x2 * ... * xn)^(1/n)
 * @param {number[]} arr - An array of positive numbers
 * @returns {number} - The geometric mean
 * @see https://en.wikipedia.org/wiki/Geometric_mean
 * @example geometricMean([1, 2, 3, 4]) => 2.213
 * @example geometricMean([2, 8]) => 4
 * @example geometricMean([4, 4, 4]) => 4
 */
const geometricMean = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError('Input must be a non-empty array')
  }
  if (!arr.every((n) => typeof n === 'number' && !isNaN(n) && n > 0)) {
    throw new TypeError('All elements must be positive numbers')
  }
  const product = arr.reduce((acc, n) => acc * n, 1)
  return Math.pow(product, 1 / arr.length)
}

export { geometricMean }
