/**
 * @function digitalRoot
 * @description The digital root is the single digit obtained by repeatedly
 *   summing the digits of a number until a single digit is reached.
 *   For example, 493: 4+9+3=16, 1+6=7 — digital root is 7.
 * @param {number} n - A non-negative integer
 * @returns {number} - The digital root of n
 * @see https://en.wikipedia.org/wiki/Digital_root
 * @example digitalRoot(493) => 7
 * @example digitalRoot(999) => 9
 * @example digitalRoot(0) => 0
 */
const digitalRoot = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  if (n === 0) return 0
  return n % 9 === 0 ? 9 : n % 9
}

export { digitalRoot }
