/*
  LeetCode -> 70. Climbing Stairs
  Link -> https://leetcode.com/problems/climbing-stairs/

  You are climbing a stair case. It takes n steps to reach to the top.
  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

const climbStairs = function (n) {
  const dp = []

  // predefined values
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

const main = () => {
  console.log(climbStairs(2)) // 2
  console.log(climbStairs(3)) // 3
  console.log(climbStairs(5)) // 8
}

main()
