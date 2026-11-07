/**
 * @function collatzSequence
 * @description The Collatz conjecture states that for any positive integer n,
 *   if n is even divide by 2, if n is odd multiply by 3 and add 1.
 *   Repeating this process will eventually reach 1.
 *   This function returns the full Collatz sequence for a given number.
 * @param {number} n - A positive integer
 * @returns {number[]} - The Collatz sequence starting from n
 * @see https://en.wikipedia.org/wiki/Collatz_conjecture
 * @example collatzSequence(6) => [6, 3, 10, 5, 16, 8, 4, 2, 1]
 * @example collatzSequence(1) => [1]
 */
const collatzSequence = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const sequence = [n]
  let current = n
  while (current !== 1) {
    current = current % 2 === 0 ? current / 2 : 3 * current + 1
    sequence.push(current)
  }
  return sequence
}

export { collatzSequence }
