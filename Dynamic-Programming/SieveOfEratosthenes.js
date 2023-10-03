/**
 * @function SieveOfEratosthenes
 * @description Calculates prime numbers till input number n
 * @param {Number} n - The input integer
 * @return {Number[]} List of Primes till n.
 * @see [Sieve_of_Eratosthenes](https://www.geeksforgeeks.org/sieve-of-eratosthenes/)
 */
function sieveOfEratosthenes(n) {
  if (n <= 1) return []
  const primes = new Array(n + 1).fill(true) // set all as true initially
  primes[0] = primes[1] = false // Handling case for 0 and 1
  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false
      }
    }
  }

  return primes.reduce((result, isPrime, index) => {
    if (isPrime) {
      result.push(index)
    }
    return result
  }, [])
}

// Example

// const n = 69 // number till where we wish to find primes
// const primes = sieveOfEratosthenes(n)

export { sieveOfEratosthenes }
