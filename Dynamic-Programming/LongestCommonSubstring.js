/**
 * A Dynamic Programming based solution for calculation of the Longest Common Substring Problem
 * https://en.wikipedia.org/wiki/Longest_common_substring_problem
 */

// Function to find Longest common substring of sequences str1[0..n-1] and str2[0..m-1]
function LCS (str1, str2, n, m) {
  var maxLength = 0 // stores the max length of LCS
  var endingIndex = n // stores the ending index of LCS in str1

  const lookup = new Array(n + 1)
  for (let i = 0; i < n + 1; i++) {
    lookup[i] = new Array(m + 1)
  }
  // fill the lookup table in bottom-up manner
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      lookup[i][j] = 0
      // if current character of str1 and str2 matches
      if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
        lookup[i][j] = lookup[i - 1][j - 1] + 1

        // update the maximum length and ending index
        if (lookup[i][j] > maxLength) {
          maxLength = lookup[i][j]
          endingIndex = i
        }
      }
    }
  }

  // return Longest common substring having length equal to maxLength
  return str1.substring(endingIndex - maxLength, endingIndex)
}

function main () {
  const str1 = 'ABACCDAABC'
  const str2 = 'BBABDCCDACDAC'

  const n = str1.length
  const m = str2.length

  const lcs = LCS(str1, str2, n, m)
  // Print Longest Common Substring of the 2 strings given
  if (lcs != null) {
    console.log('The Longest Common Substring is: ' + lcs)
    console.log('Longest Common Substring length: ' + lcs.length)
  }
}

main()
