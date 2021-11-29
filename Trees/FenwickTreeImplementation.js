/*
 * Author: Mohit Kumar
 * Fedwick Tree Implementation in JavaScript
 * Fedwick Tree Implementation for finding prefix sum.
*/

class FenwickTree {
  constructor (feneickArray, array, n) {
    for (let i = 1; i <= n; i++) {
      feneickArray[i] = 0
    }
    for (let i = 0; i < n; i++) {
      this.updateFenwickTree(feneickArray, n, i, array[i])
    }
  }

  updateFenwickTree (feneickArray, n, index, value) {
    index = index + 1
    while (index <= n) {
      feneickArray[index] += value
      index += index & (-index)
    }
  }

  getPrefixSum (feneickArray, index) {
    let currSum = 0
    index = index + 1
    while (index > 0) {
      currSum += feneickArray[index]
      index -= index & (-index)
    }

    return currSum
  }
}
export { FenwickTree }
