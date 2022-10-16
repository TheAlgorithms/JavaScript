/**
 * Problem 35 - Circular primes
 *
 * @see {@link https://projecteuler.net/problem=35}
 *
 * The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
 * There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
 * How many circular primes are there below one million?
 *
 * @author ddaniel27
 */

/**
 * Function to get all prime numbers below a given number
 * This function also discards all numbers that contain an even digit
 * @see {@link https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes}
 */
function getPrimes (max) {
  const sieve = []
  const primes = []

  for (let i = 2; i <= max; ++i) {
    if (!sieve[i]) { // If i has not been marked then it is prime
      const hasEven = String(i).split('').some((n) => n % 2 === 0) // Check if i contains an even digit
      !hasEven && primes.push(i)

      for (let j = i << 1; j <= max; j += i) { // Mark all multiples of i as non-prime
        sieve[j] = true
      }
    }
  }
  return primes
}

function problem35 (n) {
  if (n < 2) {
    throw new Error('Invalid input')
  }
  const list = getPrimes(n)

  const result = list.filter((number, _idx, arr) => {
    const str = String(number)
    const rotations = []
    for (let i = 0; i < str.length; i++) { // Get all rotations of the number
      rotations.push(str.slice(i) + str.slice(0, i))
    }
    return rotations.every((rotation) => arr.includes(Number(rotation))) // Check if all rotations are prime
  })

  return result.length + 1 // Add +1 to the result because 2 is not included in the list
}

export { problem35 }
