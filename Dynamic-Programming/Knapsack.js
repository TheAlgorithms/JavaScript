/**
 * A DynamicProgramming based solution for 0-1 Knapsack problem
 * https://en.wikipedia.org/wiki/Knapsack_problem#0-1_knapsack_problem
 */

function knapSack (W, wt, val, n) {
  const rv = new Array(n + 1) // rv means return value
  for (let i = 0; i < n + 1; i++) {
    rv[i] = new Array(W + 1)
  }

  // Build table rv[][] in bottom up manner
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (i === 0 || w === 0) { rv[i][w] = 0 } else if (wt[i - 1] <= w) { rv[i][w] = Math.max(val[i - 1] + rv[i - 1][w - wt[i - 1]], rv[i - 1][w]) } else { rv[i][w] = rv[i - 1][w] }
    }
  }

  return rv[n][W]
}

// Driver program to test above function
function main () {
  const val = [50, 100, 130]
  const wt = [10, 20, 40]
  const W = 50
  const n = val.length
  console.log(knapSack(W, wt, val, n))
}

main()
