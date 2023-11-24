/*
 * Problem Statement: Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
 * what is palindrome partitioning?
 * - Palindrome partitioning means, partitioning a string into substrings such that every substring is a palindrome.
 * Reference to know more about palindrome partitioning:
 * - https://www.cs.columbia.edu/~sedwards/classes/2021/4995-fall/proposals/Palindrome.pdf
 */

class PalindromePartitioning {
  partition(s) {
    const result = []
    this.backtrack(s, [], result)
    return result
  }

  backtrack(s, path, result) {
    if (s.length === 0) {
      result.push([...path])
      return
    }

    for (let i = 0; i < s.length; i++) {
      const prefix = s.substring(0, i + 1)
      if (this.isPalindrome(prefix)) {
        path.push(prefix)
        this.backtrack(s.substring(i + 1), path, result)
        path.pop()
      }
    }
  }

  isPalindrome(s) {
    let start = 0
    let end = s.length - 1
    while (start < end) {
      if (s.charAt(start) !== s.charAt(end)) {
        return false
      }
      start++
      end--
    }
    return true
  }
}

export default PalindromePartitioning
