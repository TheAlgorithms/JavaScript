/**
 *
 *  This script will find next power of two
 *    of given number.
 *  More about it:
 *   https://www.techiedelight.com/round-next-highest-power-2/
 *
 */

export const nextPowerOfTwo = (n) => {
  if (n > 0 && (n & (n - 1)) === 0) return n
  let result = 1
  while (n > 0) {
    result = result << 1
    n = n >> 1
  }
  return result
}
