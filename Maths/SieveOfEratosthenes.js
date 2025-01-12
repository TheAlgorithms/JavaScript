/**
 * @function sieveOfEratosthenes
 * @description Function to get all the prime numbers below a given number using sieve of eratosthenes algorithm
 * @param {Number} max The limit below which all the primes are required to be
 * @returns {Number[]} An array of all the prime numbers below max
 * @see [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
 * @example
 * sieveOfEratosthenes(1) // ====> []
 * @example
 * sieveOfEratosthenes(20) // ====> [2, 3, 5, 7, 11, 13, 17, 19]
 *
 */
function sieveOfEratosthenes(max) {
  const sieve = []
  const primes = []

  for (let i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      // If i has not been marked then it is prime
      primes.push(i)
      for (let j = i << 1; j <= max; j += i) {
        // Mark all multiples of i as non-prime
        sieve[j] = true
      }
    }
  }
  return primes
}

export { sieveOfEratosthenes }
