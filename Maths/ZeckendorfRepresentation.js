/**
 * @function zeckendorfRepresentation
 * @description Zeckendorf's theorem states that every positive integer
 *   can be uniquely represented as a sum of non-consecutive Fibonacci numbers.
 *   This function returns those Fibonacci numbers.
 * @param {number} n - A positive integer
 * @returns {number[]} - Array of Fibonacci numbers that sum to n
 * @see https://en.wikipedia.org/wiki/Zeckendorf%27s_theorem
 * @example zeckendorfRepresentation(11) => [8, 3]
 * @example zeckendorfRepresentation(100) => [89, 8, 3]
 */
const zeckendorfRepresentation = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  const fibs = [1, 2]
  while (fibs[fibs.length - 1] < n) {
    const len = fibs.length
    fibs.push(fibs[len - 1] + fibs[len - 2])
  }
  const result = []
  let remaining = n
  for (let i = fibs.length - 1; i >= 0 && remaining > 0; i--) {
    if (fibs[i] <= remaining) {
      result.push(fibs[i])
      remaining -= fibs[i]
    }
  }
  return result
}

export { zeckendorfRepresentation }
