/*
 * You are given a rod of 'n' length and an array of prices associated with all the lengths less than 'n'.
 * Find the maximum profit possible by cutting the rod and selling the pieces.
 */

export function rodCut(prices, n) {
  if (!Array.isArray(prices)) {
    throw new TypeError('Prices must be an array')
  }

  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Rod length must be a non-negative integer')
  }

  if (n === 0) {
    return 0
  }

  const memo = new Array(n + 1)
  memo[0] = 0

  for (let i = 1; i <= n; i++) {
    let maxVal = Number.MIN_VALUE
    for (let j = 0; j < i; j++) {
      maxVal = Math.max(maxVal, prices[j] + memo[i - j - 1])
    }
    memo[i] = maxVal
  }

  return memo[n]
}
