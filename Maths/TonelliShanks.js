/**
 * Tonelli–Shanks algorithm for modular square roots modulo an odd prime.
 * https://en.wikipedia.org/wiki/Tonelli%E2%80%93Shanks_algorithm
 *
 * Returns the smaller non-negative root r such that r^2 ≡ n (mod p).
 * Throws RangeError when n is not a quadratic residue or p is invalid.
 */

/**
 * @param {number} a
 * @param {number} p odd prime
 * @returns {number} Legendre symbol (a/p) in {-1, 0, 1}
 */
function legendreSymbol(a, p) {
  const exp = (p - 1) / 2
  let result = 1
  a = ((a % p) + p) % p
  let base = a
  let e = exp
  while (e > 0) {
    if (e % 2 === 1) result = (result * base) % p
    base = (base * base) % p
    e = Math.floor(e / 2)
  }
  if (result === p - 1) return -1
  return result
}

/**
 * @param {number} n integer
 * @param {number} p odd prime modulus
 * @returns {number} smaller non-negative modular square root
 */
export function tonelliShanks(n, p) {
  if (
    typeof n !== 'number' ||
    typeof p !== 'number' ||
    !Number.isInteger(n) ||
    !Number.isInteger(p)
  ) {
    throw new TypeError('Arguments must be integers')
  }
  if (p <= 2 || p % 2 === 0) {
    throw new RangeError('p must be an odd prime')
  }

  n = ((n % p) + p) % p
  if (n === 0) return 0

  const ls = legendreSymbol(n, p)
  if (ls !== 1) {
    throw new RangeError('n is not a quadratic residue modulo p')
  }

  const modPow = (base, exp, mod) => {
    let result = 1
    base = ((base % mod) + mod) % mod
    while (exp > 0) {
      if (exp % 2 === 1) result = (result * base) % mod
      base = (base * base) % mod
      exp = Math.floor(exp / 2)
    }
    return result
  }

  // Fast path: p ≡ 3 (mod 4)
  if (p % 4 === 3) {
    const r = modPow(n, (p + 1) / 4, p)
    return Math.min(r, p - r)
  }

  // Write p - 1 = q * 2^s with q odd
  let q = p - 1
  let s = 0
  while (q % 2 === 0) {
    q /= 2
    s += 1
  }

  // Find a quadratic non-residue z
  let z = 2
  while (legendreSymbol(z, p) !== -1) {
    z += 1
    if (z >= p) throw new RangeError('failed to find quadratic non-residue')
  }

  let m = s
  let c = modPow(z, q, p)
  let r = modPow(n, (q + 1) / 2, p)
  let t = modPow(n, q, p)

  while (t !== 1) {
    let i = 1
    let t2i = (t * t) % p
    while (t2i !== 1) {
      t2i = (t2i * t2i) % p
      i += 1
      if (i === m) throw new RangeError('tonelli-shanks failed')
    }
    const b = modPow(c, 2 ** (m - i - 1), p)
    r = (r * b) % p
    c = (b * b) % p
    t = (t * c) % p
    m = i
  }

  return Math.min(r, p - r)
}
