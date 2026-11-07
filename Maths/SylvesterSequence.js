/**
 * @function sylvesterSequence
 * @description Sylvester's sequence is an integer sequence where each
 *   term is the product of all previous terms plus one.
 *   Sequence: 2, 3, 7, 43, 1807, 3263443...
 * @param {number} n - Number of terms to generate (1-indexed count)
 * @returns {number[]} - Array of first n terms of Sylvester's sequence
 * @see https://en.wikipedia.org/wiki/Sylvester%27s_sequence
 * @example sylvesterSequence(1) => [2]
 * @example sylvesterSequence(4) => [2, 3, 7, 43]
 */
const sylvesterSequence = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const sequence = [2]
  for (let i = 1; i < n; i++) {
    const prev = sequence[i - 1]
    sequence.push(sequence.reduce((product, num) => product * num, 1) + 1)
  }
  return sequence
}

export { sylvesterSequence }
