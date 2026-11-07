/**
 * @function motzkinNumber
 * @description Motzkin numbers count the number of different ways of
 *   drawing non-intersecting chords between points on a circle.
 *   Sequence: 1, 1, 2, 4, 9, 21, 51, 127, 323, 835...
 * @param {number} n - The position in the Motzkin sequence (0-indexed)
 * @returns {number} - The nth Motzkin number
 * @see https://en.wikipedia.org/wiki/Motzkin_number
 * @example motzkinNumber(0) => 1
 * @example motzkinNumber(4) => 9
 * @example motzkinNumber(6) => 51
 */
const motzkinNumber = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  if (n === 0 || n === 1) return 1
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.floor(
      ((2 * i + 1) * dp[i - 1] + (3 * i - 3) * dp[i - 2]) / (i + 2)
    )
  }
  return dp[n]
}

export { motzkinNumber }
