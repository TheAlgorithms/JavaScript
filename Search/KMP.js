/*
 * Implements the Knuth-Morris-Pratt (KMP) algorithm for pattern searching.
 *
 * The KMP algorithm is a string searching algorithm that utilizes the concept of prefix tables or failure functions
 * to efficiently match patterns in strings. It avoids unnecessary comparisons by taking advantage of the information
 * gained from previous comparisons.
 *
 * This implementation constructs a prefix table that stores the longest proper prefix that is also a suffix for each
 * prefix of the pattern. This table is then used to guide the pattern matching process, skipping over characters that
 * are known to not match.
 *
 * The algorithm returns the starting index of the first occurrence of the pattern in the text. If the pattern is not
 * found, the algorithm returns -1.
 *
 * Reference: https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm
 */

function KMPSearch(text, pattern) {
  let lps = new Array(pattern.length).fill(0)
  computeLPS(pattern, lps)
  let i = 0
  let j = 0
  while (i < text.length) {
    if (pattern[j] == text[i]) {
      j++
      i++
    }
    if (j == pattern.length) {
      return i - j
    } else if (i < text.length && pattern[j] != text[i]) {
      if (j != 0) j = lps[j - 1]
      else i = i + 1
    }
  }
  return -1
}

function computeLPS(pattern, lps) {
  let len = 0
  let i = 1
  while (i < pattern.length) {
    if (pattern[i] == pattern[len]) {
      len++
      lps[i] = len
      i++
    } else {
      if (len != 0) {
        len = lps[len - 1]
      } else {
        lps[i] = 0
        i++
      }
    }
  }
}

export { KMPSearch }
