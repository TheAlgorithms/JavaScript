/**
 * @function primesInRange
 * @description Returns all prime numbers in a given range [start, end]
 *   using the Sieve of Eratosthenes algorithm.
 * @param {number} start - The start of the range (inclusive)
 * @param {number} end - The end of the range (inclusive)
 * @returns {number[]} - Array of all prime numbers in the range
 * @see https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * @example primesInRange(1, 10) => [2, 3, 5, 7]
 * @example primesInRange(10, 20) => [11, 13, 17, 19]
 */
const primesInRange = (start, end) => {
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    throw new TypeError('Both inputs must be integers')
  }
  if (start < 1 || end < 1) {
    throw new TypeError('Both inputs must be positive integers')
  }
  if (start > end) {
    throw new RangeError('Start must be less than or equal to end')
  }
  const sieve = new Array(end + 1).fill(true)
  sieve[0] = false
  sieve[1] = false
  for (let i = 2; i <= Math.sqrt(end); i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= end; j += i) {
        sieve[j] = false
      }
    }
  }
  return sieve
    .slice(start)
    .map((isPrime, i) => (isPrime ? start + i : null))
    .filter((n) => n !== null)
}

export { primesInRange }
