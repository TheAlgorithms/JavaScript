const sieveOfEratosthenes = (n) => {
  /*
   * Calculates prime numbers till a number n
   * :param n: Number upto which to calculate primes
   * :return: A boolean list contaning only primes
   */
  const primes = new Array(n + 1)
  primes.fill(true) // set all as true initially
  primes[0] = primes[1] = false // Handling case for 0 and 1
  const sqrtn = Math.ceil(Math.sqrt(n))
  for (let i = 2; i <= sqrtn; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        /*
        Optimization.
        Let j start from i * i, not 2 * i, because smaller multiples of i have been marked false.

        For example, let i = 4.
        We do not have to check from 8(4 * 2) to 12(4 * 3)
        because they have been already marked false when i=2 and i=3.
        */
        primes[j] = false
      }
    }
  }
  return primes
}

export { sieveOfEratosthenes }
