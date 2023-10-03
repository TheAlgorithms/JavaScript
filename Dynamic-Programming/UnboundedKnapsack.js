/**
 * @class UnboundedKnapsack
 * @description Solves the Unbounded Knapsack problem using dynamic programming.
   
   The Unbounded Knapsack problem is about packing items with weights and values into a knapsack to maximize the 
   total value. Unlike the standard Knapsack problem, you can use an unlimited number of each item. 
   For example, with items of weights [2, 3, 4] and values [5, 7, 10] and a knapsack capacity of 5, 
   you can achieve a maximum value of 12 by selecting two instances of the item with weight 4.
 */

  //  * Reference to know more about Unbounded Knapsack :
  //  * - https://en.wikipedia.org/wiki/List_of_knapsack_problems

class UnboundedKnapsack {
    /**
     * @constructor
     * @param {Array} values - An array of values for items.
     * @param {Array} weights - An array of weights for items.
     * @param {number} capacity - The maximum capacity of the knapsack.
     */
    constructor(values, weights, capacity) {
      if (!Array.isArray(values) || !Array.isArray(weights) || typeof capacity !== 'number') {
        throw new TypeError('Invalid input. values and weights should be arrays, and capacity should be a number.');
      }
  
      if (values.length !== weights.length) {
        throw new RangeError('The length of values and weights arrays should be the same.');
      }
  
      this.values = values;
      this.weights = weights;
      this.capacity = capacity;
    }
  
    /**
     * @function solve
     * @description Solves the Unbounded Knapsack problem and returns the maximum value.
     * @returns {number} The maximum value that can be obtained.
     */
    solve() {
      const n = this.values.length;
      const dp = new Array(this.capacity + 1).fill(0);
  
      for (let i = 0; i <= this.capacity; i++) {
        for (let j = 0; j < n; j++) {
          if (this.weights[j] <= i) {
            dp[i] = Math.max(dp[i], dp[i - this.weights[j]] + this.values[j]);
          }
        }
      }
  
      return dp[this.capacity];
    }
  }
  
  // Example usage
  const values = [10, 40, 50];
  const weights = [1, 3, 4];
  const capacity = 6;
  
  const knapsack = new UnboundedKnapsack(values, weights, capacity);
  const maxValue = knapsack.solve();
  console.log(`Maximum value that can be obtained: ${maxValue}`);
  