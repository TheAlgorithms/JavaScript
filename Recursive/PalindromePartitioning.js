/*
 * Problem Statement: Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
 * what is palindrome partitioning?
 * - Palindrome partitioning means, partitioning a string into substrings such that every substring is a palindrome.
 * Reference to know more about palindrome partitioning:
 * - https://www.cs.columbia.edu/~sedwards/classes/2021/4995-fall/proposals/Palindrome.pdf
 */

import { palindrome } from './Palindrome'

const partitionPalindrome = (s) => {
  const result = []
  backtrack(s, [], result)
  return result
}

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
