/**
 * Segment Tree
 * concept : [Wikipedia](https://en.wikipedia.org/wiki/Segment_tree)
 * inspired by : https://www.geeksforgeeks.org/segment-tree-efficient-implementation/
 *
 * time complexity
 * - init : O(N)
 * - update : O(log(N))
 * - query : O(log(N))
 *
 * space complexity : O(N)
 */
class SegmentTree {
  size
  tree
  constructor (arr) {
    this.size = arr.length
    this.tree = new Array(2 * arr.length)
    this.tree.fill(0)

    this.build(arr)
  }

  build (arr) {
    const { size, tree } = this
    // insert leaf nodes in tree
    for (let i = 0; i < size; i++) {
      tree[size + i] = arr[i]
    }

    // build the tree by calculating parents
    for (let i = size - 1; i > 0; --i) {
      tree[i] = tree[i << 1] + tree[(i << 1) | 1]
    }
  }

  update (p, value) {
    const { size, tree } = this

    // set value at position p
    tree[p + size] = value
    p += size

    // move upward and update parents
    for (let i = p; i > 1; i >>= 1) {
      tree[i >> 1] = tree[i] + tree[i ^ 1]
    }
  }

  query (left, right) {
    const { size, tree } = this
    right++
    let res = 0

    // loop to find the sum in the range
    for (left += size, right += size; left < right; left >>= 1, right >>= 1) {
      if ((left & 1) > 0) {
        res += tree[left++]
      }

      if ((right & 1) > 0) {
        res += tree[--right]
      }
    }

    return res
  }
}

export { SegmentTree }
