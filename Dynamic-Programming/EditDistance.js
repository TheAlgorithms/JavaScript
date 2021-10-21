/*
Wikipedia -> https://en.wikipedia.org/wiki/Edit_distance

Q. -> Given two strings `word1` and `word2`. You can perform these operations on any of the string to make both strings similar.
    - Insert
    - Remove
    - Replace
Find the minimum operation cost required to make both same. Each operation cost is 1.

Algorithm details ->
time complexity - O(n*m)
space complexity - O(n*m)
*/

const minimumEditDistance = (word1, word2) => {
  const n = word1.length
  const m = word2.length
  const dp = new Array(m + 1).fill(0).map(item => [])

  /*
    fill dp matrix with default values -
        - first row is filled considering no elements in word2.
        - first column filled considering no elements in word1.
    */

  for (let i = 0; i < n + 1; i++) {
    dp[0][i] = i
  }

  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = i
  }

  /*
        indexing is 1 based for dp matrix as we defined some known values at first row and first column/
    */

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      const letter1 = word1[j - 1]
      const letter2 = word2[i - 1]

      if (letter1 === letter2) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1
      }
    }
  }

  return dp[m][n]
}

export { minimumEditDistance }
