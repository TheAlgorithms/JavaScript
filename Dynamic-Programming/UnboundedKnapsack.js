/**
 * Problem Statement: Find the longest palindromic substring in a given string.
 * @param {string} s - The input string.
 * @returns {string} - The longest palindromic substring.
 * @see https://www.geeksforgeeks.org/unbounded-knapsack-repetition-of-items-allowed-set-2/
 */
const longestPalindromicSubstring = (s) => {
    const n = s.length;
    if (n <= 1) return s; // If the input string has 0 or 1 character, it's already a palindrome.
  
    let start = 0; // Start index of the longest palindromic substring found so far.
    let maxLength = 1; // Length of the longest palindromic substring found so far.
    const dp = new Array(n).fill(0); // Dynamic programming table to store the length of palindromes.
  
    // Iterate through the string in reverse order to build the dynamic programming table.
    for (let i = n - 1; i >= 0; i--) {
      let prev = 0; // Stores the value in dp[j-1] to track the previous value in the current row.
      for (let j = i; j < n; j++) {
        const temp = dp[j]; // Store the current dp[j] before updating it.
  
        // Check if characters at positions i and j are the same.
        if (s[i] === s[j]) {
          dp[j] = prev + 2; // Extend the palindrome length by 2.
          
          // Update start and maxLength if a longer palindrome is found.
          if (dp[j] > maxLength) {
            start = i;
            maxLength = dp[j];
          }
        } else {
          dp[j] = 0; // If characters are different, reset the length to 0.
        }
        
        prev = temp; // Update prev for the next iteration.
      }
    }
  
    // Return the longest palindromic substring using start and maxLength.
    return s.substring(start, start + maxLength);
  };
  
  export { longestPalindromicSubstring };
  