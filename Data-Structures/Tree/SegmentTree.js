class SegmentTree {
  size
  tree
  constructor (arr) {
    this.size = arr.length
    this.tree = new Array(2 * this.size)
    this.tree.fill(0)

    this.build(arr)
  }

  build (arr) {
    const n = this.size
    // insert leaf nodes in tree
    for (let i = 0; i < n; i++) {
      this.tree[n + i] = arr[i]
    }

    // build the tree by calculating parents
    for (let i = n - 1; i > 0; --i) {
      this.tree[i] = this.tree[i << 1] + this.tree[(i << 1) | 1]
    }
  }

  update (p, value) {
    // set value at position p
    this.tree[p + this.size] = value
    p = p + this.size

    // move upward and update parents
    for (let i = p; i > 1; i >>= 1) {
      this.tree[i >> 1] = this.tree[i] + this.tree[i ^ 1]
    }
  }

  query (left, right) {
    right++
    let res = 0

    // loop to find the sum in the range
    for (
      left += this.size, right += this.size;
      left < right;
      left >>= 1, right >>= 1
    ) {
      if ((left & 1) > 0) {
        res += this.tree[left++]
      }

      if ((right & 1) > 0) {
        res += this.tree[--right]
      }
    }

    return res
  }
}

export { SegmentTree }
