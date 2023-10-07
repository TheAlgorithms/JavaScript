/**
 * @details Calculates the number of permutations and combinations.
 * @external_link (Permutation And Combinations)[https://www.geeksforgeeks.org/permutation-and-combination/]
 */

/**
 * @brief Calculates the factorial of the given number.
 * @details Factorial of n = n * (n - 1) * (n - 2) * ... * 1
 *
 * @returns {number}: Factorial of the number.
 NaN: if negative number is provided.
 * @param n
 */
const factorial = (n) => {
  if (n >= 0) {
    if (n === 0) {
      return 1
    } else {
      return n * factorial(n - 1)
    }
  } else {
    return NaN
  }
}

/**
 * @brief Calculates the number of Permutations from the given data.
 * n: integer -> number of items.
 * r: integer -> number of times n is taken.
 * @returns {number}: The number of permutations.
 NaN: if negative number is provided.
 * @param n
 * @param r
 */
const permutation = (n, r) => {
  return factorial(n) / factorial(n - r)
}

/**
 * @brief Calculates the number of Combinations from the given data.
 * n -> number of items.
 * r -> number of times n is taken.
 * @returns {number}: The number of combinations.
 NaN: if negative number is provided.
 * @param n
 * @param r
 */
const combination = (n, r) => {
  return factorial(n) / (factorial(r) * factorial(n - r))
}

// Exports the functions to be used in other files.
export { factorial, permutation, combination }
