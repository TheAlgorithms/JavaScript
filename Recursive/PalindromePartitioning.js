import { palindrome } from './Palindrome'

/*
 * Given a string s, return all possible palindrome partitionings of s.
 * A palindrome partitioning partitions a string into palindromic substrings.
 * @see https://www.cs.columbia.edu/~sedwards/classes/2021/4995-fall/proposals/Palindrome.pdf
 */
/**
 * Returns all possible palindrome partitionings of a given string.
 * @param {string} s
 * @returns {string[][]} - Array of arrays containing all possible palindrome partitionings.
 */
const partitionPalindrome = (s) => {
  const result = []
  backtrack(s, [], result)
  return result
}

/**
 * Backtracking function to find palindrome partitionings.
 * @param {string} s - The remaining part of the string to be checked for partitioning.
 * @param {string[]} path - Current partitioning path.
 * @param {string[][]} result - Array to store all valid palindrome partitionings.
 */
const backtrack = (s, path, result) => {
  if (s.length === 0) {
    result.push([...path])
    return
  }

  for (let i = 0; i < s.length; i++) {
    const prefix = s.substring(0, i + 1)
    if (palindrome(prefix)) {
      path.push(prefix)
      backtrack(s.substring(i + 1), path, result)
      path.pop()
    }
  }
}

export default partitionPalindrome
