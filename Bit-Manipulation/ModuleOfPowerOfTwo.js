/**
 * @author: gianvallejos92
 * This script will find the module of S % N using bitmask
 * N is power of 2. E.g: 1, 2, 4, 8, 16, 32...
 * Reference: https://www.geeksforgeeks.org/compute-modulus-division-by-a-power-of-2-number/
 */

export const ModuleOfPowerOfTwo = (s, n) => {
  return (s & (n - 1))
}
