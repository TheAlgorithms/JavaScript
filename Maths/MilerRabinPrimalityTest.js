/*
 * Author: Sundaram krishnan (https://github.com/sundaram123krishnan)
 * Miller–Rabin primality test : https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test#:~:text=The%20Miller%E2%80%93Rabin%20primality%20test,the%20Solovay%E2%80%93Strassen%20primality%20test.
 * Used to check whether given number is probably prime or not
 * return true if the number is probably a prime
 * else false
 */

/**
 * @function MillerRabin
 * @description -> Checking if a number is probably prime or not
 * @param {number} number
 * @returns {boolean} true if the number is prime, otherwise false
 */

const power = (base, exponent, modulus) => {
  let result = 1
  base %= modulus

  while (exponent) {
    if (exponent & 1) {
      result = (result * base) % modulus
    }
    base = (base * base) % modulus
    exponent >>= 1
  }
  return result
}

const checkComposite = (n, a, d, s) => {
  let x = power(a, d, n)

  if (x === 1 || x === n - 1) {
    return false
  }

  for (let r = 1; r < s; r++) {
    x = (x * x) % n
    if (x === n - 1) {
      return false
    }
  }
  return true
}

const MillerRabin = (n, iter = 5) => {
  if (n < 4) {
    return n === 2 || n === 3
  }

  let s = 0

  let d = n - 1

  while ((d & 1) === 0) {
    d >>= 1
    s++
  }

  for (let i = 0; i < iter; i++) {
    const a = 2 + (Math.floor(Math.random() * (n - 2)) % (n - 4))
    if (checkComposite(n, a, d, s)) {
      return false
    }
  }
  return true
}

export { MillerRabin }
