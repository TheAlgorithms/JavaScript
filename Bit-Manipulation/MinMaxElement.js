/**
 * @author : nikgautamgithub
 *
 * Find max or min element using bit operators.
 * @param {number} x - The input number to compare.
 * @param {number} y - The input number to compare.
 * @returns Min/Max Element
 *
 * @example
 * const maxi = max(5,3) // Returns max number i.e. 5
 * const mini = min(5,3); // Returns min number i.e. 3
 */
const max = (x, y) => x ^ ((x ^ y) & -(x < y ? 1 : 0))

const min = (x, y) => y ^ ((x ^ y) & -(x < y ? 1 : 0))

export { min, max }
