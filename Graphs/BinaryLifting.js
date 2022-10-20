/**
 * Author: Adrito Mukherjee
 * Binary Lifting implementation in Javascript
 * Binary Lifting is a technique that is used to find the kth ancestor of a node in a rooted tree with N nodes
 * The technique requires preprocessing the tree in O(N log N) using dynamic programming
 * The techniqe can answer Q queries about kth ancestor of any node in O(Q log N)
 * It is faster than the naive algorithm that answers Q queries with complexity O(Q K)
 * It can be used to find Lowest Common Ancestor of two nodes in O(log N)
 */

class BinaryLifting {
  constructor (root, tree) {
    this.connections = {}
    this.up = {} // up[node][i] stores the 2^i-th  parent of node
    for (const [i, j] of tree) {
      this.addEdge(i, j)
    }
    // LOG should be such that 2^LOG is greater than total number of nodes in the tree
    this.LOG = 0
    while ((1 << this.LOG) <= Object.keys(this.connections).length) {
      this.LOG++
    }
    this.dfs(root, root)
  }

  addNode (node) {
    // Function to add a node to the tree (connection represented by set)
    this.connections[node] = new Set()
  }

  addEdge (node1, node2) {
    // Function to add an edge (adds the node too if they are not present in the tree)
    if (!(node1 in this.connections)) {
      this.addNode(node1)
    }
    if (!(node2 in this.connections)) {
      this.addNode(node2)
    }
    this.connections[node1].add(node2)
    this.connections[node2].add(node1)
  }

  dfs (node, parent) {
    this.up[node] = {}
    this.up[node][0] = parent
    for (let i = 1; i < this.LOG; i++) {
      this.up[node][i] = this.up[this.up[node][i - 1]][i - 1]
    }
    for (const child of this.connections[node]) {
      if (child !== parent) this.dfs(child, node)
    }
  }

  kthAncestor (node, k) {
    for (let i = 0; i < this.LOG; i++) {
      if (k & (1 << i)) {
        node = this.up[node][i]
      }
    }
    return node
  }
}

function binaryLifting (root, tree, queries) {
  const graphObject = new BinaryLifting(root, tree)
  const ancestors = []
  for (const [node, k] of queries) {
    const ancestor = graphObject.kthAncestor(node, k)
    ancestors.push(ancestor)
  }
  return ancestors
}

export { binaryLifting }

// binaryLifting(
//   0,
//   [
//     [0, 1],
//     [0, 3],
//     [0, 5],
//     [5, 6],
//     [1, 2],
//     [1, 4],
//     [4, 7],
//     [7, 11],
//     [7, 8],
//     [8, 9],
//     [9, 10]
//   ],
//   [
//     [10, 4],
//     [10, 7],
//     [7, 2],
//     [11, 3]
//   ]
// )

// [4, 0, 1, 1]
