/**
 * GetEuclidGCD Euclidean algorithm to determine the GCD of two numbers
 * @param {Number} a integer (may be negative)
 * @param {Number} b integer (may be negative)
 * @returns {Number} Greatest Common Divisor gcd(a, b)
 */
export function GetEuclidGCD (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Arguments must be numbers')
  }
  if (a === 0 && b === 0) return undefined // infinitely many numbers divide 0
  a = Math.abs(a)
  b = Math.abs(b)
  while (b !== 0) {
    const rem = a % b
    a = b
    b = rem
  }
  return a
}
