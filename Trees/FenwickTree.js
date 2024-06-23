/*
 * Author: Mohit Kumar
 * Fenwick Tree Implementation in JavaScript
 * Fenwick Tree Implementation for finding prefix sum.
 */

class FenwickTree {
  /**
   * Constructs a Fenwick Tree.
   * @param {Array} fenwickArray The Fenwick Tree array to be initialized.
   * @param {Array} array The input array whose prefix sum is to be calculated.
   * @param {number} n The size of the input array.
   */
  constructor(feneickArray, array, n) {
    for (let i = 1; i <= n; i++) {
      feneickArray[i] = 0
    }
    for (let i = 0; i < n; i++) {
      this.update(feneickArray, n, i, array[i])
    }
  }

  /**
   * Updates the Fenwick Tree with a new value at the specified index.
   * @param {Array} fenwickArray The Fenwick Tree array.
   * @param {number} n The size of the Fenwick Tree array.
   * @param {number} index The index at which the value is updated.
   * @param {number} value The new value to be added at the index.
   */
  update(feneickArray, n, index, value) {
    index = index + 1
    while (index <= n) {
      feneickArray[index] += value
      index += index & -index
    }
  }

  getPrefixSum(feneickArray, index) {
    let currSum = 0
    index = index + 1
    while (index > 0) {
      currSum += feneickArray[index]
      index -= index & -index
    }

    return currSum
  }
}
export { FenwickTree }
