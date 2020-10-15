/**
 *
 * Project Euler 3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor
 * of the number 600851475143
 *
 */

function largestPrimeFactor(n) {
  const isPrime = (num) => {
    for (let n = 2; n < num; n++) {
      if (num % n === 0) {
        return false
      }
    }
    return true
  }

  let primeFactors = []

  for (let i = 2; i < n; i++) {
    if (isPrime(i) && n % i === 0) {
      primeFactors.push(i)
    }
  }

  return primeFactors
}

largestPrimeFactor(600851475143)
