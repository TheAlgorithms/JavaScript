/*
 * Author: Akshay Dubey (https://github.com/itsAkshayDubey)
 * Binomial Coefficient: https://en.wikipedia.org/wiki/Binomial_coefficient
 * function to find binomial coefficient of numbers n and k.
 * return binomial coefficient of n,k
 */

/**
 * @function findBinomialCoefficient
 * @description -> this function returns binomial coefficient
 * of two numbers n & k given by n!/((n-k)!k!)
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

export const findBinomialCoefficient = (n, k) => {
  if (typeof n !== 'number' || typeof k !== 'number') {
    throw Error('Type of arguments must be number.')
  }
  if (n < 0 || k < 0) {
    throw Error('Arguments must be greater than zero.')
  }
  if (k > n) {
    return 0
  }
  // Multiplicative formula in exact integer arithmetic: after step i the
  // running value is exactly C(n, i + 1), since C(n, i) * (n - i) is always
  // divisible by (i + 1). BigInt keeps every intermediate exact, unlike the
  // factorial formula n! / (k! * (n - k)!), whose large intermediates lose
  // integer precision in floating point even for small answers
  // (e.g. C(25, 2) evaluated to 299.99999999999994).
  const steps = Math.min(k, n - k)
  let result = 1n
  for (let i = 0; i < steps; i++) {
    result = (result * BigInt(n - i)) / BigInt(i + 1)
  }
  return Number(result)
}
