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
  constructor(arr) {
    // we define tree like this
    // tree[1] : root node of tree
    // tree[i] : i'th node
    // tree[i * 2] : i'th left child
    // tree[i * 2 + 1] : i'th right child
    // and we use bit, shift operation for index
    this.size = arr.length
    this.tree = new Array(2 * arr.length)
    this.tree.fill(0)

    this.build(arr)
  }

  // function to build the tree
  build(arr) {
    const { size, tree } = this
    // insert leaf nodes in tree
    // leaf nodes will start from index N
    // in this array and will go up to index (2 * N – 1)
    for (let i = 0; i < size; i++) {
      tree[size + i] = arr[i]
    }

    // build the tree by calculating parents
    // tree's root node will contain all leaf node's sum
    for (let i = size - 1; i > 0; --i) {
      // current node's value is the sum of left child, right child
      tree[i] = tree[i * 2] + tree[i * 2 + 1]
    }
  }

  update(index, value) {
    const { size, tree } = this

    // only update values in the parents of the given node being changed.
    // to get the parent move to parent node (index / 2)

    // set value at position index
    index += size
    // tree[index] is leaf node and index's value of array
    tree[index] = value

    // move upward and update parents
    for (let i = index; i > 1; i >>= 1) {
      // i ^ 1 turns (2 * i) to (2 * i + 1)
      // i ^ 1 is second child
      tree[i >> 1] = tree[i] + tree[i ^ 1]
    }
  }

  // interval [L,R) with left index(L) included and right (R) excluded.
  query(left, right) {
    const { size, tree } = this
    // cause R is excluded, increase right for convenient
    right++
    let res = 0

    // loop to find the sum in the range
    for (left += size, right += size; left < right; left >>= 1, right >>= 1) {
      // L is the left border of an query interval

      // if L is odd it means that it is the right child of its parent and our interval includes only L and not the parent.
      // So we will simply include this node to sum and move to the parent of its next node by doing L = (L + 1) / 2.

      // if L is even it is the left child of its parent
      // and the interval includes its parent also unless the right borders interfere.
      if ((left & 1) > 0) {
        res += tree[left++]
      }

      // same in R (the right border of an query interval)
      if ((right & 1) > 0) {
        res += tree[--right]
      }
    }

    return res
  }
}

export { SegmentTree }
