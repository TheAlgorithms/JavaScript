/*
 * The Fermat primality test is a probabilistic test to determine whether a number
 * is a probable prime.
 *
 * It relies on Fermat's Little Theorem, which states that if p is prime and a
 * is not divisible by p, then
 *
 *     a^(p - 1) % p = 1
 *
 * However, there are certain numbers (so called Fermat Liars) that screw things up;
 * if a is one of these liars the equation will hold even though p is composite.
 *
 * But not everything is lost! It's been proven that at least half of all integers
 * aren't Fermat Liars (these ones called Fermat Witnesses). Thus, if we keep
 * testing the primality with random integers, we can achieve higher reliability.
 *
 * The interesting about all of this is that since half of all integers are
 * Fermat Witnesses, the precision gets really high really fast! Suppose that we
 *  make the test 50 times: the chance of getting only Fermat Liars in all runs is
 *
 *     1 / 2^50 = 8.8 * 10^-16 (a pretty small number)
 *
 * For comparison, the probability of a cosmic ray causing an error to your
 * infallible program is around 1.4 * 10^-15. An order of magnitude below!
 *
 * But because nothing is perfect, there's a major flaw to this algorithm, and
 * the cause are the so called Carmichael Numbers. These are composite numbers n
 * that hold the equality from Fermat's Little Theorem for every a < n (excluding
 * is factors). In other words, if we are trying to determine if a Carmichael Number
 * is prime or not, the chances of getting a wrong answer are pretty high! Because
 * of that, the Fermat Primality Test is not used is serious applications. :(
 *
 * You can find more about the Fermat primality test and its flaws here:
 * https://en.wikipedia.org/wiki/Fermat_primality_test
 *
 * And about Carmichael Numbers here:
 * https://primes.utm.edu/glossary/xpage/CarmichaelNumber.html
 */

/**
 * Faster exponentiation that capitalize on the fact that we are only interested
 * in the modulus of the exponentiation.
 *
 * Find out more about it here: https://en.wikipedia.org/wiki/Modular_exponentiation
 *
 * @param {number} base
 * @param {number} exponent
 * @param {number} modulus
 */
const modularExponentiation = (base, exponent, modulus) => {
  if (modulus === 1) return 0 // after all, any x % 1 = 0

  let result = 1
  base %= modulus // make sure that base < modulus

  while (exponent > 0) {
    // if exponent is odd, multiply the result by the base
    if (exponent % 2 === 1) {
      result = (result * base) % modulus
      exponent--
    } else {
      exponent = exponent / 2 // exponent is even for sure
      base = (base * base) % modulus
    }
  }

  return result
}

/**
 * Test if a given number n is prime or not.
 *
 * @param {number} n The number to check for primality
 * @param {number} numberOfIterations The number of times to apply Fermat's Little Theorem
 * @returns True if prime, false otherwise
 */
const fermatPrimeCheck = (n, numberOfIterations = 50) => {
  // first check for edge cases
  if (n <= 1 || n === 4) return false
  if (n <= 3) return true // 2 and 3 are included here

  for (let i = 0; i < numberOfIterations; i++) {
    // pick a random number a, with 2 <= a < n - 2
    const randomNumber = Math.floor(Math.random() * (n - 2) + 2)

    // if a^(n - 1) % n is different than 1, n is composite
    if (modularExponentiation(randomNumber, n - 1, n) !== 1) {
      return false
    }
  }

  // if we arrived here without finding a Fermat Witness, this is almost guaranteed
  // to be a prime number (or a Carmichael number, if you are unlucky)
  return true
}

export { modularExponentiation, fermatPrimeCheck }
