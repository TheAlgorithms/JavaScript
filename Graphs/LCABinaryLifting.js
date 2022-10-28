/**
 * Author: Adrito Mukherjee
 * Findind Lowest Common Ancestor By Binary Lifting implementation in JavaScript
 * The technique requires preprocessing the tree in O(N log N) using dynamic programming)
 * It can be used to find Lowest Common Ancestor of two nodes in O(log N)
 * Tutorial on Lowest Common Ancestor: https://www.geeksforgeeks.org/lca-in-a-tree-using-binary-lifting-technique
 */

class LCABinaryLifting {
  constructor (root, tree) {
    this.root = root
    this.connections = new Map()
    this.up = new Map() // up[node][i] stores the 2^i-th  parent of node
    this.depth = new Map() // depth[node] stores the depth of node from root
    this.depth.set(root, 1)
    for (const [i, j] of tree) {
      this.addEdge(i, j)
    }
    this.log = Math.ceil(Math.log2(this.connections.size))
    this.dfs(root, root)
  }

  addNode (node) {
    // Function to add a node to the tree (connection represented by set)
    this.connections.set(node, new Set())
  }

  addEdge (node1, node2) {
    // Function to add an edge (adds the node too if they are not present in the tree)
    if (!this.connections.has(node1)) {
      this.addNode(node1)
    }
    if (!this.connections.has(node2)) {
      this.addNode(node2)
    }
    this.connections.get(node1).add(node2)
    this.connections.get(node2).add(node1)
  }

  dfs (node, parent) {
    // The dfs function calculates 2^i-th ancestor of all nodes for i ranging from 0 to this.log
    // We make use of the fact the two consecutive jumps of length 2^(i-1) make the total jump length 2^i
    this.up.set(node, new Map())
    this.up.get(node).set(0, parent)
    for (let i = 1; i < this.log; i++) {
      this.up
        .get(node)
        .set(i, this.up.get(this.up.get(node).get(i - 1)).get(i - 1))
    }
    for (const child of this.connections.get(node)) {
      if (child !== parent) {
        this.depth.set(child, this.depth.get(node) + 1)
        this.dfs(child, node)
      }
    }
  }

  kthAncestor (node, k) {
    // if value of k is more than or equal to the number of total nodes, we return the root of the graph
    if (k >= this.connections.size) {
      return this.root
    }
    // if i-th bit is set in the binary representation of k, we jump from a node to its 2^i-th ancestor
    // so after checking all bits of k, we will have made jumps of total length k, in just log k steps
    for (let i = 0; i < this.log; i++) {
      if (k & (1 << i)) {
        node = this.up.get(node).get(i)
      }
    }
    return node
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
