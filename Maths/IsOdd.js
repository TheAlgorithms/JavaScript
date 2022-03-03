/*
 * function to check if number is odd
 * return true if number is odd
 * else false
 */

export const isOdd = (value) => {
  return Boolean(value & 1) // 1 -> true, 0 -> false
}
