/**
 * Author: Adrito Mukherjee
 * Finding Lowest Common Ancestor By Binary Lifting implementation in JavaScript
 * The technique requires preprocessing the tree in O(N log N) using dynamic programming)
 * It can be used to find Lowest Common Ancestor of two nodes in O(log N)
 * Tutorial on Lowest Common Ancestor: https://www.geeksforgeeks.org/lca-in-a-tree-using-binary-lifting-technique
 */

import { BinaryLifting } from './BinaryLifting'

class LCABinaryLifting extends BinaryLifting {
  constructor (root, tree) {
    super(root, tree)
    this.depth = new Map() // depth[node] stores the depth of node from root
    this.depth.set(root, 1)
    this.dfsDepth(root, root)
  }

  dfsDepth (node, parent) {
    // DFS to find depth of every node in the tree
    for (const child of this.connections.get(node)) {
      if (child !== parent) {
        this.depth.set(child, this.depth.get(node) + 1)
        this.dfsDepth(child, node)
      }
    }
  }

  getLCA (node1, node2) {
    // We make sure that node1 is the deeper node among node1 and node2
    if (this.depth.get(node1) < this.depth.get(node2)) {
      [node1, node2] = [node2, node1]
    }
    // We check if node1 is the ancestor of node2, and if so, then return node1
    const k = this.depth.get(node1) - this.depth.get(node2)
    node1 = this.kthAncestor(node1, k)
    if (node1 === node2) {
      return node1
    }

    for (let i = this.log - 1; i >= 0; i--) {
      if (this.up.get(node1).get(i) !== this.up.get(node2).get(i)) {
        node1 = this.up.get(node1).get(i)
        node2 = this.up.get(node2).get(i)
      }
    }
    return this.up.get(node1).get(0)
  }
}

function lcaBinaryLifting (root, tree, queries) {
  const graphObject = new LCABinaryLifting(root, tree)
  const lowestCommonAncestors = []
  for (const [node1, node2] of queries) {
    const lca = graphObject.getLCA(node1, node2)
    lowestCommonAncestors.push(lca)
  }
  return lowestCommonAncestors
}

export default lcaBinaryLifting
