/**
 * @function percentile
 * @description Calculates the nth percentile of an array of numbers.
 *   The percentile indicates the value below which a given percentage
 *   of observations fall.
 * @param {number[]} arr - An array of numbers
 * @param {number} p - The percentile to calculate (0-100)
 * @returns {number} - The nth percentile value
 * @see https://en.wikipedia.org/wiki/Percentile
 * @example percentile([1, 2, 3, 4, 5], 50) => 3
 * @example percentile([1, 2, 3, 4, 5], 75) => 4
 */
const percentile = (arr, p) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError('First argument must be a non-empty array')
  }
  if (!arr.every((n) => typeof n === 'number' && !isNaN(n))) {
    throw new TypeError('All elements must be numbers')
  }
  if (typeof p !== 'number' || isNaN(p) || p < 0 || p > 100) {
    throw new TypeError('Percentile must be a number between 0 and 100')
  }
  const sorted = [...arr].sort((a, b) => a - b)
  if (p === 0) return sorted[0]
  if (p === 100) return sorted[sorted.length - 1]
  const index = (p / 100) * (sorted.length - 1)
  const lower = Math.floor(index)
  const upper = Math.ceil(index)
  return sorted[lower] + (sorted[upper] - sorted[lower]) * (index - lower)
}

export { percentile }
