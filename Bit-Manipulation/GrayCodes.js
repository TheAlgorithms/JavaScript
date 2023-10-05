/**
 * Generates a Gray code sequence for the given number of bits.
 * @param {number} n - The number of bits in the Gray code sequence.
 * @returns {number[]} - An array of Gray codes in binary format.
 * @description
 * Gray codes are binary sequences in which two successive values differ in only one bit.
 * This function generates a Gray code sequence of length 2^n for the given number of bits.
 *
 * The algorithm follows these steps:
 *
 * 1. Initialize an array `grayCodes` to store the Gray codes. Start with [0, 1] for n = 1.
 * 2. Iterate from 1 to n:
 *    a. Calculate `highestBit` as 2^i, where `i` is the current iteration index.
 *    b. Iterate in reverse order through the existing Gray codes:
 *       - For each Gray code `code`, add `highestBit | code` to `grayCodes`.
 *       - This operation flips a single bit in each existing code, creating new codes.
 * 3. Return the `grayCodes` array containing the Gray codes in decimal representation.
 *
 *resources: [GFG](https://www.geeksforgeeks.org/generate-n-bit-gray-codes/)
 * @example
 * const n = 3;
 * const grayCodes = generateGrayCodes(n);
 * // grayCodes will be [0, 1, 3, 2, 6, 7, 5, 4] for n=3.
 */
function generateGrayCodes(n) {
  if (n <= 0) {
    return [0]
  }

  const grayCodes = [0, 1]

  for (let i = 1; i < n; i++) {
    const highestBit = 1 << i
    for (let j = grayCodes.length - 1; j >= 0; j--) {
      grayCodes.push(highestBit | grayCodes[j])
    }
  }

  return grayCodes
}

export { generateGrayCodes }
