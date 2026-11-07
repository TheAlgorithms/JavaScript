/**
 * @function weightedAverage
 * @description Calculates the weighted average of an array of numbers
 *   given their corresponding weights. Each value is multiplied by its
 *   weight and the sum is divided by the total weight.
 * @param {number[]} values - An array of numbers
 * @param {number[]} weights - An array of corresponding weights
 * @returns {number} - The weighted average
 * @see https://en.wikipedia.org/wiki/Weighted_arithmetic_mean
 * @example weightedAverage([1, 2, 3], [1, 1, 1]) => 2
 * @example weightedAverage([1, 2, 3], [1, 2, 3]) => 2.333
 */
const weightedAverage = (values, weights) => {
  if (!Array.isArray(values) || !Array.isArray(weights)) {
    throw new TypeError('Both inputs must be arrays')
  }
  if (values.length === 0 || weights.length === 0) {
    throw new TypeError('Arrays must not be empty')
  }
  if (values.length !== weights.length) {
    throw new TypeError('Values and weights must have the same length')
  }
  if (!values.every((n) => typeof n === 'number' && !isNaN(n))) {
    throw new TypeError('All values must be numbers')
  }
  if (!weights.every((n) => typeof n === 'number' && !isNaN(n) && n >= 0)) {
    throw new TypeError('All weights must be non-negative numbers')
  }
  const totalWeight = weights.reduce((sum, w) => sum + w, 0)
  if (totalWeight === 0) {
    throw new RangeError('Total weight must not be zero')
  }
  const weightedSum = values.reduce((sum, v, i) => sum + v * weights[i], 0)
  return weightedSum / totalWeight
}

export { weightedAverage }
