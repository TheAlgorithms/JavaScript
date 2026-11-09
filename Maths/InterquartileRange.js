/**
 * @function interquartileRange
 * @description Calculates the interquartile range (IQR) of an array.
 *   IQR is the difference between the 75th and 25th percentiles,
 *   representing the middle 50% spread of the data.
 * @param {number[]} arr - An array of numbers
 * @returns {number} - The interquartile range
 * @see https://en.wikipedia.org/wiki/Interquartile_range
 * @example interquartileRange([1, 2, 3, 4, 5]) => 2
 * @example interquartileRange([1, 2, 3, 4, 5, 6, 7]) => 3
 */
const interquartileRange = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError('Input must be a non-empty array')
  }
  if (!arr.every((n) => typeof n === 'number' && !isNaN(n))) {
    throw new TypeError('All elements must be numbers')
  }
  const sorted = [...arr].sort((a, b) => a - b)
  const getPercentile = (data, p) => {
    if (p === 0) return data[0]
    if (p === 100) return data[data.length - 1]
    const index = (p / 100) * (data.length - 1)
    const lower = Math.floor(index)
    const upper = Math.ceil(index)
    return data[lower] + (data[upper] - data[lower]) * (index - lower)
  }
  return getPercentile(sorted, 75) - getPercentile(sorted, 25)
}

export { interquartileRange }
