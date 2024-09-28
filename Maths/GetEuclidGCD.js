function CheckInput(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Arguments must be numbers')
  }
}

/**
 * GetEuclidGCD Euclidean algorithm to determine the GCD of two numbers
 * @param {Number} a integer (may be negative)
 * @param {Number} b integer (may be negative)
 * @returns {Number} Greatest Common Divisor gcd(a, b)
 */
export function GetEuclidGCD(a, b) {
  CheckInput(a, b)
  a = Math.abs(a)
  b = Math.abs(b)
  while (b !== 0) {
    const rem = a % b
    a = b
    b = rem
  }
  return a
}

/**
 * Recursive version of GetEuclidGCD
 * @param {Number} a integer (may be negative)
 * @param {Number} b integer (may be negative)
 * @returns {Number} Greatest Common Divisor gcd(a, b)
 */
export function GetEuclidGCDRecursive(a, b) {
  CheckInput(a, b)
  a = Math.abs(a)
  b = Math.abs(b)
  if (b == 0) {
    return a
  }
  return GetEuclidGCDRecursive(b, a % b)
}
