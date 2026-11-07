/**
 * @function padovanSequence
 * @description The Padovan sequence is similar to Fibonacci but each
 *   number is the sum of the second and third preceding numbers.
 *   Sequence: 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16...
 * @param {number} n - The position in the Padovan sequence (0-indexed)
 * @returns {number} - The nth Padovan number
 * @see https://en.wikipedia.org/wiki/Padovan_sequence
 * @example padovanSequence(0) => 1
 * @example padovanSequence(5) => 3
 * @example padovanSequence(7) => 5
 */
const padovanSequence = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  if (n === 0 || n === 1 || n === 2) return 1
  let a = 1
  let b = 1
  let c = 1
  for (let i = 3; i <= n; i++) {
    ;[a, b, c] = [b, c, a + b]
  }
  return c
}

export { padovanSequence }
