/**
 * GetEuclidGCD Euclidean algorithm to determine the GCD of two numbers
 * @param {Number} a integer (may be negative)
 * @param {Number} b integer (may be negative)
 * @returns {Number} Greatest Common Divisor gcd(a, b)
 */
export function GetEuclidGCD(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Arguments must be numbers')
  }
  a, b = Math.abs(a), Math.abs(b)
  if (a == 0 && b == 0) return undefined // infinitely many numbers divide 0
  if (a < 0) a = -a
  if (b < 0) b = -b
  while (b !== 0) {
    a, b = b, a % b
  }
  return b
}
