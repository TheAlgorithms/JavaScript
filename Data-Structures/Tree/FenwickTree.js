/**
 * Time Complexity:
 * Update: O(log n)
 * Query: O(log n)
 * Range Query: O(log n)
 *
 * Space Complexity: O(n)
 *
 */

export default class FenwickTree {
  constructor(size) {
    this.size = size
    this.tree = new Array(size + 1).fill(0)
  }

  static fromArray(arr) {
    const ft = new FenwickTree(arr.length)
    for (let i = 0; i < arr.length; i++) {
      ft.update(i, arr[i])
    }
    return ft
  }

  update(index, delta) {
    let i = index + 1
    while (i <= this.size) {
      this.tree[i] += delta
      i += i & -i // Adding the lowest set bit
    }
  }

  query(index) {
    let i = index + 1
    let sum = 0
    while (i > 0) {
      sum += this.tree[i]
      i -= i & -i // Removing the lowest set bit
    }
    return sum
  }

  rangeQuery(left, right) {
    if (left === 0) return this.query(right)
    return this.query(right) - this.query(left - 1)
  }

  get(index) {
    return this.rangeQuery(index, index)
  }

  set(index, value) {
    const current = this.get(index)
    this.update(index, value - current)
  }
}
