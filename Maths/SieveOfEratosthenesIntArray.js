/**
 * Function to get all prime numbers below a given number
 * This function returns an array of prime numbers
 * @see {@link https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes}
 */

function sieveOfEratosthenes (max) {
  const sieve = []
  const primes = []

  for (let i = 2; i <= max; ++i) {
    if (!sieve[i]) { // If i has not been marked then it is prime
      primes.push(i)
      for (let j = i << 1; j <= max; j += i) { // Mark all multiples of i as non-prime
        sieve[j] = true
      }
    }
  }
  return primes
}

export { sieveOfEratosthenes }
