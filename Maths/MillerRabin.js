/**
 * @function millerRabin
 * @description Check if number is prime or not (accurate for 64-bit integers)
 * @param {Integer} n
 * @returns {Boolean} true if prime, false otherwise
 * @url https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test
 * note: Here we are using BigInt to handle large numbers
 **/

// Modular Binary Exponentiation (Iterative)
const binaryExponentiation = (base, exp, mod) => {
  base = BigInt(base)
  exp = BigInt(exp)
  mod = BigInt(mod)

  let result = BigInt(1)
  base %= mod
  while (exp) {
    if (exp & 1n) {
      result = (result * base) % mod
    }
    base = (base * base) % mod
    exp = exp >> 1n
  }
  return result
}

// Check if number is composite
const checkComposite = (n, a, d, s) => {
  let x = binaryExponentiation(a, d, n)
  if (x == 1n || x == n - 1n) {
    return false
  }

  for (let r = 1; r < s; r++) {
    x = (x * x) % n
    if (x == n - 1n) {
      return false
    }
  }
  return true
}

// Miller Rabin Primality Test
export const millerRabin = (n) => {
  n = BigInt(n)

  if (n < 2) {
    return false
  }

  let s = 0n
  let d = n - 1n
  while ((d & 1n) == 0) {
    d = d >> 1n
    s++
  }

  // Only first 12 primes are needed to be check to find primality of any 64-bit integer
  let prime = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n]
  for (let a of prime) {
    if (n == a) {
      return true
    }
    if (checkComposite(n, a, d, s)) {
      return false
    }
  }
  return true
}
