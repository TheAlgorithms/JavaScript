/**
 * @function bellNumber
 * @description Bell numbers count the number of ways to partition a set.
 *   They are computed using Bell triangle.
 *   Sequence: 1, 1, 2, 5, 15, 52, 203, 877...
 * @param {number} n - The position in the Bell sequence (0-indexed)
 * @returns {number} - The nth Bell number
 * @see https://en.wikipedia.org/wiki/Bell_number
 * @example bellNumber(0) => 1
 * @example bellNumber(3) => 5
 * @example bellNumber(5) => 52
 */
const bellNumber = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  const triangle = [[1]]
  for (let i = 1; i <= n; i++) {
    const row = [triangle[i - 1][i - 1]]
    for (let j = 1; j <= i; j++) {
      row.push(row[j - 1] + triangle[i - 1][j - 1])
    }
    triangle.push(row)
  }
  return triangle[n][0]
}

export { bellNumber }
