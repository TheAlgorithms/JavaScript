// Link :- https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
/*
* You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
* On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
* Find and return the maximum profit you can achieve.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    const dp = Array.from({ length: n }, () => Array(2).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        if (i === n - 1) {
            dp[i][0] = 0;
            dp[i][1] = prices[i];
            continue;
        }
        dp[i][0] = Math.max(dp[i + 1][1] - prices[i], dp[i + 1][0]);
        dp[i][1] = Math.max(dp[i + 1][1], dp[i + 1][0] + prices[i]);
    }

    return dp[0][0];
};
