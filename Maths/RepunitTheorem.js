/**
 * Repunit theorem helpers.
 *
 * A repunit of length n is:
 *   R_n = (10^n - 1) / 9
 *
 * For a prime p (p != 2, 5), p divides R_n iff ord_p(10) divides n.
 * Reference: https://en.wikipedia.org/wiki/Repunit
 */

const gcd = (a, b) => {
  let x = BigInt(a)
  let y = BigInt(b)
  while (y !== 0n) {
    ;[x, y] = [y, x % y]
  }
  return x < 0n ? -x : x
}

const modPow = (base, exp, mod) => {
  let result = 1n
  let b = BigInt(base) % BigInt(mod)
  let e = BigInt(exp)
  const m = BigInt(mod)

  while (e > 0n) {
    if (e & 1n) result = (result * b) % m
    b = (b * b) % m
    e >>= 1n
  }

  return result
}

const multiplicativeOrder10 = (prime) => {
  const p = BigInt(prime)
  if (p <= 1n) throw new RangeError('prime must be > 1')
  if (gcd(10n, p) !== 1n) throw new RangeError('10 and prime must be coprime')

  // For prime p, ord_p(10) divides p-1.
  const upper = p - 1n
  for (let k = 1n; k <= upper; k++) {
    if (upper % k === 0n && modPow(10n, k, p) === 1n) {
      return k
    }
  }

  throw new Error('multiplicative order not found')
}

const repunitMod = (length, mod) => {
  if (!Number.isInteger(length) || length < 1) {
    throw new RangeError('length must be a positive integer')
  }
  const m = BigInt(mod)
  if (m <= 0n) throw new RangeError('mod must be > 0')

  let remainder = 0n
  for (let i = 0; i < length; i++) {
    remainder = (remainder * 10n + 1n) % m
  }
  return remainder
}

const isRepunitDivisibleByPrime = (length, prime) => {
  if (!Number.isInteger(length) || length < 1) {
    throw new RangeError('length must be a positive integer')
  }

  const p = BigInt(prime)
  if (p === 2n || p === 5n) return false
  if (gcd(10n, p) !== 1n) return false

  const order = multiplicativeOrder10(p)
  return BigInt(length) % order === 0n
}

export { multiplicativeOrder10, repunitMod, isRepunitDivisibleByPrime }
