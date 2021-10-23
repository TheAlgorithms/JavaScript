/*
 * Problem Statement: Given a positive number `num`, find it's binary equivalent using recursion
 *
 * What is Binary Equivalent?
 * - In binary number system, a number is represented in terms of 0s and 1s,
 *   for example:
 *    - Binary Of 2 = 10
 *    - Binary of 3 = 11
 *    - Binary of 4 = 100
 *
 * Reference on how to find Binary Equivalent
 * - https://byjus.com/maths/decimal-to-binary/
 *
 */

export const binaryEquivalent = (num) => {
  if (num === 0 || num === 1) {
    return String(num)
  }
  return binaryEquivalent(Math.floor(num / 2)) + String(num % 2)
}
