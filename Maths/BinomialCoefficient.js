/**
 * @function binomialCoefficient
 * @description Calculates the binomial coefficient C(n, k), also known
 *   as "n choose k". It represents the number of ways to choose k
 *   items from n items without regard to order.
 *   Formula: C(n,k) = n! / (k! * (n-k)!)
 * @param {number} n - Total number of items
 * @param {number} k - Number of items to choose
 * @returns {number} - The binomial coefficient C(n, k)
 * @see https://en.wikipedia.org/wiki/Binomial_coefficient
 * @example binomialCoefficient(5, 2) => 10
 * @example binomialCoefficient(10, 3) => 120
 * @example binomialCoefficient(5, 0) => 1
 */
const binomialCoefficient = (n, k) => {
  if (!Number.isInteger(n) || !Number.isInteger(k)) {
    throw new TypeError('Both inputs must be integers')
  }
  if (n < 0 || k < 0) {
    throw new TypeError('Both inputs must be non-negative integers')
  }
  if (k > n) return 0
  if (k === 0 || k === n) return 1
  let result = 1
  for (let i = 0; i < k; i++) {
    result = (result * (n - i)) / (i + 1)
  }
  return Math.round(result)
}

export { binomialCoefficient }
