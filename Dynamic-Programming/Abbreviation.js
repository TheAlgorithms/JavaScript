/**
 * @description
 * Given two strings, `a` and `b`, determine if it's possible to make `a` equal
 * to `b` You can perform the following operations on the string `a`:
 * 1. Capitalize zero or more of `a`'s lowercase letters.
 * 2. Delete all the remaining lowercase letters in `a`.
 *
 * ### Algorithm
 * The idea is in the problem statement itself: iterate through characters of
 * string `a` and `b` (for character indexes `i` and `j` respectively):
 * 1. If `a[i]` and `b[j]` are equal, then move to next position
 * 2. If `a[i]` is lowercase of `b[j]`, then explore two possibilities:
 * a) Capitalize `a[i]` or
 * b) Skip `a[i]`
 * 3. If the `a[i]` is not uppercase, just discard that character, else return
 * `false`
 *
 * Time Complexity: (O(|a|*|b|)) where `|a|` => length of string `a`
 *
 * @param {String} a
 * @param {String} b
 * @returns {Boolean}
 * @see https://www.hackerrank.com/challenges/abbr/problem - Related problem on HackerRank.
 */
export const abbreviation = (a, b) => {
  const n = a.length
  const m = b.length

  let dp = Array.from({length: n + 1}, () => Array(m + 1).fill(false))
  dp[0][0] = true

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= m; j++) {
      if (dp[i][j]) {
        if (j < m && a[i].toUpperCase() === b[j]) {
          dp[i + 1][j + 1] = true
        }
        if (a[i] === a[i].toLowerCase()) {
          dp[i + 1][j] = true
        }
      }
    }
  }

  return dp[n][m]
}