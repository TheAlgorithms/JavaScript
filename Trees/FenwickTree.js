/*
 * Author: Mohit Kumar
 * Fenwick Tree Implementation in JavaScript
 * Fenwick Tree Implementation for finding prefix sum.
*/

class FenwickTree {
  constructor (feneickArray, array, n) {
    for (let i = 1; i <= n; i++) {
      feneickArray[i] = 0
    }
    for (let i = 0; i < n; i++) {
      this.update(feneickArray, n, i, array[i])
    }
  }

  update (feneickArray, n, index, value) {
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
