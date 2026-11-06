/**
 * @function primeFactorization
 * @description Returns all prime factors of a given positive integer.
 *   Prime factorization is the process of determining which prime numbers
 *   multiply together to make the original number.
 * @param {number} n - A positive integer greater than 1
 * @returns {number[]} - An array of prime factors in ascending order
 * @see https://en.wikipedia.org/wiki/Integer_factorization
 * @example primeFactorization(12) => [2, 2, 3]
 * @example primeFactorization(28) => [2, 2, 7]
 * @example primeFactorization(13) => [13]
 */
const primeFactorization = (n) => {
  if (!Number.isInteger(n) || n < 2) {
    throw new TypeError('Input must be an integer greater than or equal to 2')
  }
  const factors = []
  let num = n
  for (let i = 2; i <= Math.sqrt(num); i++) {
    while (num % i === 0) {
      factors.push(i)
      num = Math.floor(num / i)
    }
  }
  if (num > 1) factors.push(num)
  return factors
}

export { primeFactorization }
