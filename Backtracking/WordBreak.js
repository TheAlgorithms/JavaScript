/**
 * Determines if the input string can be segmented into words from the provided dictionary.
 * @param {string} s - The input string to be segmented.
 * @param {string[]} wordDict - An array of valid words for segmentation.
 * @returns {boolean} True if the string can be segmented into valid words, false otherwise.
 * @see https://www.geeksforgeeks.org/word-break-problem-using-backtracking/
 */

export class WordBreakSolution {
  // Function to determine if the input string 's' can be segmented into words from the 'wordDict'
  wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict) // Convert wordDict into a set for efficient lookups
    const memo = Array(s.length).fill(null) // Initialize memoization array to store results of subproblems
    return this.canBreak(0, s, wordSet, memo) // Start the recursive function from the 0th index
  }

  // Helper function to perform recursive backtracking with memoization
  canBreak(start, s, wordSet, memo) {
    if (start === s.length) {
      return true // If we reach the end of the string, return true as we successfully segmented it
    }

    if (memo[start] !== null) {
      return memo[start] // Return the cached result if already computed for this index
    }

    // Explore all possible substrings starting from 'start' index
    for (let end = start + 1; end <= s.length; end++) {
      const currentSubstring = s.slice(start, end) // Get the substring from 'start' to 'end'

      // If the current substring is a valid word and the rest of the string can be broken, return true
      if (
        wordSet.has(currentSubstring) &&
        this.canBreak(end, s, wordSet, memo)
      ) {
        memo[start] = true // Cache the result as true for this index
        return true
      }
    }

    memo[start] = false // Cache the result as false if no valid segmentation found
    return false
  }
}
