/**
 * @function perrinNumber
 * @description The Perrin sequence is similar to Padovan but starts
 *   with 3, 0, 2. Each number is the sum of the second and third
 *   preceding numbers.
 *   Sequence: 3, 0, 2, 3, 2, 5, 5, 7, 10, 12, 17...
 * @param {number} n - The position in the Perrin sequence (0-indexed)
 * @returns {number} - The nth Perrin number
 * @see https://en.wikipedia.org/wiki/Perrin_number
 * @example perrinNumber(0) => 3
 * @example perrinNumber(4) => 2
 * @example perrinNumber(6) => 5
 */
const perrinNumber = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  if (n === 0) return 3
  if (n === 1) return 0
  if (n === 2) return 2
  let a = 3
  let b = 0
  let c = 2
  for (let i = 3; i <= n; i++) {
    ;[a, b, c] = [b, c, a + b]
  }
  return c
}

export { perrinNumber }
