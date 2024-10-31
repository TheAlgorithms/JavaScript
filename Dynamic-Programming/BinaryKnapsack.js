function knapSack(W, wt, val, n) {
    // Create a 2D DP array to store the maximum value for each subproblem
    let dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

    // Build table dp[][] in bottom-up manner
    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= W; w++) {
            if (i === 0 || w === 0) {
                dp[i][w] = 0;
            } else if (wt[i - 1] <= w) {
                dp[i][w] = Math.max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][W];
}

// Driver code
const val = [60, 100, 120];
const wt = [10, 20, 30];
const W = 50;
const n = val.length;

console.log("Maximum value in Knapsack =", knapSack(W, wt, val, n));
