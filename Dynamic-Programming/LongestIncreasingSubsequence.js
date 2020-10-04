/**
 * A Dynamic Programming based solution for calculating Longest Increasing Subsequence
 * https://en.wikipedia.org/wiki/Longest_increasing_subsequence
 */

function main () {
  const x = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
  const length = x.length
  const dp = Array(length).fill(1)

  let res = 1

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (x[i] > x[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j])
        if (dp[i] > res)
          res = dp[i]
      }
    }
  }
  
  console.log('Length of Longest Increasing Subsequence is:', res)
}

main()
