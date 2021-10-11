/**
 *
 *  This script will find next power of two
 *    of given number.
 *
 */

export const nextPowerOfTwo = (n) => {
  let result = 1
  while (n > 0) {
    result = result << 1
    n = n >> 1
  }
  return result
}
