// Data Structure - DISJOINT SET
// Use-case - Used to find two nodes are in same component or not

// Time complexity
// constructor - O(n)
// find_parent - O(1)
// union_by_rank- O(1)

// Space Complexity: O(n)

class DSU {
  parent = []
  rank = []

  constructor(number_of_node) {
    this.parent = [...this.parent, ...Array(number_of_node).fill(0)]
    this.rank = [...this.rank, ...Array(number_of_node).fill(0)]

    // initially all nodes are parent of itself
    // initially there are (number_of _node) components
    for (let i = 0; i < number_of_node; i++) {
      this.parent[i] = i
    }
  }

  find_parent(node) {
    // if current node is parent of itself
    if (node == this.parent[node]) return node

    // Path Compression for finding the ultimate parent efficiently
    return (this.parent[node] = this.find_parent(this.parent[node]))
  }

  union_by_rank(node_1, node_2) {
    let node_1_parent = this.find_parent(node_1)
    let node_2_parent = this.find_parent(node_2)

    // if two nodes are already in same component
    if (node_1_parent === node_2_parent) return
    // if node_1_parent has more rank than node_2_parent
    else if (this.rank[node_1_parent] > this.rank[node_2_parent]) {
      // merging component 2 into component 1
      this.parent[node_2_parent] = node_1_parent
    }

    // if node_2_parent has more rank than node_1_parent
    else if (this.rank[node_2_parent] > this.rank[node_1_parent]) {
      // merging  component 1 into component 2
      this.parent[node_1_parent] = node_2_parent
    }

    // if node_1_parent and node_2_parent has equal rank
    else {
      // we can merge any one component to other component because both have same rank
      // we are merging component 1 into component 2
      this.parent[node_1_parent] = node_2_parent
      this.rank[node_2_parent]++
    }
  }
}

export default DSU
