/**
 * @function Tribonacci
 * @description Tribonacci is the sum of previous three tribonacci numbers.
 * @param {Integer} n - The input integer
 * @return {Integer} tribonacci of n.
 * @see [Tribonacci_Numbers](https://www.geeksforgeeks.org/tribonacci-numbers/)
 */
const tribonacci = (n) => {
  // creating array to store previous tribonacci numbers
  const dp = new Array(n + 1)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 1
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }
  return dp[n]
}

export { tribonacci }
