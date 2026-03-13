/**
 * @function unboundedKnapsack
 * @description Solve the Unbounded Knapsack problem using Dynamic Programming.
 * @param {number[]} weights - An array of item weights.
 * @param {number[]} values - An array of item values.
 * @param {number} capacity - The maximum capacity of the knapsack.
 * @return {number} The maximum value that can be obtained.
 * @see [UnboundedKnapsack](https://en.wikipedia.org/wiki/Knapsack_problem#Unbounded_knapsack_problem)
 */

function unboundedKnapsack(weights, values, capacity) {
    const n = weights.length;
    
    // Create a DP array to store the maximum value for each possible knapsack capacity.
    const dp = new Array(capacity + 1).fill(0);
  
    // Loop through each possible knapsack capacity from 0 to the maximum capacity.
    for (let w = 0; w <= capacity; w++) {
      // Loop through each item in the given items.
      for (let i = 0; i < n; i++) {
        // Check if the weight of the current item is less than or equal to the current knapsack capacity.
        if (weights[i] <= w) {
          // Update the DP array with the maximum value between not taking the current item
          // and taking the current item and adding its value.
          dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
      }
    }
  
    // The final element of the DP array stores the maximum value that can be obtained with
    // the given knapsack capacity.
    return dp[capacity];
  }
  
  export { unboundedKnapsack };
  