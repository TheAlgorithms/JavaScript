/**
 * Finds the unique element in an array where all other elements are repeated twice.
 *
 * @param {number[]} arr - The input array of integers.
 * @returns {number} The unique element.
 *
 * @example
 * const arr = [1, 2, 1, 2, 3];
 * const uniqueElement = findUniqueElement(arr); // Returns 3
 */
const findUniqueElement = (arr) => arr.reduce((acc, val) => acc ^ val, 0)

export { findUniqueElement }
