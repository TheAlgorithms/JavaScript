function isPrime (n) {
  let prime = false

  if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        prime = true
        break
      }
    }
  }

  return !prime
}

/**
 * @function twinPrime
 * Gets the 'twin prime' of a prime number.
 * @returns {Array} Either an array with the original [0], and the twin [1], or an empty array if one of the numbers are not prime.
 * @see https://en.wikipedia.org/wiki/Twin_prime
 * @example twinPrime(5) = [5, 7]
 * @example twinPrime(4) = []
*/
function twinPrime (n) {
  const result = []
  const prime = isPrime(n)

  if (!prime) {
    return []
  }

  result.push(n)

  if (!isPrime(n + 2)) {
    return []
  }

  result.push(n + 2)

  return result
}

export { isPrime, twinPrime }
