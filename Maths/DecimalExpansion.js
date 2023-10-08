/**
 * @author Eric Lavault <https://github.com/lvlte>
 *
 * Represents the decimal (or binary, octal, any base from 2 to 10) expansion
 * of a/b using euclidean division.
 *
 * Because this function is recursive, it may throw an error when reaching the
 * maximum call stack size.
 *
 * Returns an array containing : [
 *  0: integer part of the division
 *  1: array of decimals (if any, or an empty array)
 *  2: indexOf 1st cycle digit in decimals array if a/b is periodic, or undef.
 * ]
 *
 * @see https://mathworld.wolfram.com/DecimalExpansion.html
 *
 * @param {number} a
 * @param {number} b
 * @param {number} [base=10]
 * @returns {array}
 */
export function decExp(a, b, base = 10, exp = [], d = {}, dlen = 0) {
  if (base < 2 || base > 10) {
    throw new RangeError('Unsupported base. Must be in range [2, 10]')
  }

  if (a === 0) {
    return [0, [], undefined]
  }

  if (a === b && dlen === 0) {
    return [1, [], undefined]
  }

  // d contains the dividends used so far and the corresponding index of its
  // euclidean division by b in the expansion array.
  d[a] = dlen++

  if (a < b) {
    exp.push(0)
    return decExp(a * base, b, base, exp, d, dlen)
  }

  // Euclid's division lemma : a = bq + r
  const r = a % b
  const q = (a - r) / b

  // Decimal expansion (1st element is the integer part)
  exp.push(+q.toString(base))

  if (r === 0) {
    // got a regular number (division terminates)
    return [exp[0], exp.slice(1), undefined]
  }

  // For the next iteration
  a = r * base

  // Check if `a` has already been used as a dividend, in which case it means
  // the expansion is periodic.
  if (a in d) {
    return [exp[0], exp.slice(1), d[a] - 1]
  }

  return decExp(a, b, base, exp, d, dlen)
}
