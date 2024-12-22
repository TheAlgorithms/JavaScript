/*
 * You are given a rod of 'n' length and an array of prices associated with all the lengths less than 'n'.
 * Find the maximum profit possible by cutting the rod and selling the pieces.
 * Read more about the problem here: https://kallalakshminarayana888.medium.com/rod-cutting-problem-using-top-down-dynamic-programming-me-ac4655139199
 */

function memoizedCutRod(prices, n) {
  let memo = new Array(n + 1).fill(-1)
  return memoizedCutRodAux(prices, n, memo)
}

function memoizedCutRodAux(prices, n, memo) {
  if (memo[n] >= 0) {
    return memo[n]
  }
  let maxVal = Number.MIN_VALUE
  if (n == 0) {
    maxVal = 0
  } else {
    for (let i = 0; i < n; i++) {
      maxVal = Math.max(
        maxVal,
        prices[i] + memoizedCutRodAux(prices, n - i - 1, memo)
      )
    }
  }
  memo[n] = maxVal
  return maxVal
}

export { memoizedCutRod }
