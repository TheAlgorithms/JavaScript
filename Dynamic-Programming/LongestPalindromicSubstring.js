/*
  LeetCode -> https://leetcode.com/problems/longest-palindromic-substring

  Given a string s, find the longest palindromic substring in s.
  You may assume that the maximum length of s is 1000.

*/
/**
 * Finds the longest palindromic substring
 * @param {string} s Input string 
 * @returns {string} Longest Palindromic Substring
 */
function longestPalindrome(s) {
    const n = s.length;
    const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    const len = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    let str = "";
    let mx = 0;
//fill for single character
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
        len[i][i] = 1;
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j] && j - i === 1) {
                len[i][j] = 2;
                dp[i][j] = 1;
            } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = 1;
                len[i][j] = j - i + 1;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (len[i][j] > mx && dp[i][j]) {
                mx = len[i][j];
                str = s.substring(i, j + 1);
            }
        }
    }

    return str;
}
