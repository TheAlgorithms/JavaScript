/**
 * @author : dev-madhurendra
 * Checks whether the given number is a power of four or not.
 *
 * A number is considered a power of four if and only if there is a single '1' bit in its binary representation,
 * and that '1' bit is at the first position, followed by an even number of '0' bits.
 *
 * @param {number} n - The input number to check.
 * @returns {boolean} True if the number is a power of four, false otherwise.
 *
 * @example
 * const result = isPowerOfFour(16); // Returns true (16 is 4^2)
 * const result2 = isPowerOfFour(5);  // Returns false (5 is not a power of four)
 */
const isPowerOfFour = (n) => n > 0 && (n & (n - 1)) === 0 && n % 3 === 1

export { isPowerOfFour }
