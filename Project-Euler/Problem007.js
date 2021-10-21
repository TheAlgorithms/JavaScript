// https://projecteuler.net/problem=7
// My approach does not use the Sieve of Eratosthenes but that is another common way to approach this problem. Sieve of Atkin is another possibility as well.

export const calculatePrime = (num = 10001, primes = [2, 3, 5, 7, 11, 13]) => {
  // Calculate each next prime by checking each number to see what it's divisible by
  let count = primes.length // count number of primes calculated
  let current = primes[count - 1] + 1 // current number being assessed if prime
  while (count < num) { // repeat while we haven't reached goal number of primes
    // go through each prime and see if divisible by the previous primes
    let prime = false
    primes.some((n, i) => {
      if (current % n === 0) {
        return true
      }
      if (i === count - 1) {
        prime = true
      }
    })
    if (prime) { // if prime, add to prime list and increment count
      primes.push(current)
      count += 1
    }
    current += 1
  }
  return primes[num - 1]
}
