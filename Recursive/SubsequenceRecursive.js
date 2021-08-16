/*
 * Problem Statement: Find all distinct, non-empty subsequence of given string in lexicographical order using recursive approach.
 *
 * What is subsequence?
 * A Subsequence is sequence obtained by deleting some or no elements without changing the order of elements
 * Example: Given a string = "abcd"
 * 1. "abc" is a subsequence
 * 2. "abd" is a subsequence
 * 3. But "ba" is not a subsequence (because order is changed)
 *
 * What is lexicographical order?
 * In simple terms, lexicographical order is dictionary order.
 * Example: Given a string = "abcd"
 * 1. "abc" will come before "abcd".
 * 2. "abd" will come before "ac".
 *
 * References for meaning of subsequence & lexicographical:
 * https://en.wikipedia.org/wiki/Subsequence
 * https://en.wikipedia.org/wiki/Lexicographic_order
 */

const subsequence = (str, seq, low) => {
  if (low <= str.length && str.length !== '') {
    console.log(seq)
  }
  for (let i = low; i < str.length; i++) {
    subsequence(str, seq + str[i], i + 1)
  }
}

const str = 'abcd'
subsequence(str, '', 0)
