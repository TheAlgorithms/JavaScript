class GraphUnweightedUndirected {
  // Unweighted Undirected Graph class
  constructor() {
    this.connections = {}
  }

  addNode(node) {
    // Function to add a node to the graph (connection represented by set)
    this.connections[node] = new Set()
  }

  addEdge(node1, node2) {
    // Function to add an edge (adds the node too if they are not present in the graph)
    if (!(node1 in this.connections)) {
      this.addNode(node1)
    }
    if (!(node2 in this.connections)) {
      this.addNode(node2)
    }
    this.connections[node1].add(node2)
    this.connections[node2].add(node1)
  }

  IDS(targetValue) {
    // Iterative Deepening Search (IDS) Function
    let depth = 0
    while (true) {
      const found = this.DFS(1, targetValue, depth)
      if (found) {
        return true
      }
      depth++
      if (depth > Object.keys(this.connections).length) {
        return false
      }
    }
  }

  DFS(node, targetValue, maxDepth) {
    // Depth-First Search (DFS) Function with depth limit
    const stack = [{ node, depth: 0 }]
    const visited = new Set()

    while (stack.length > 0) {
      const { node, depth } = stack.pop()
      
      if (node === targetValue) {
        return true
      }

      if (depth >= maxDepth) {
        continue
      }

      visited.add(node)

      for (const neighbor of this.connections[node]) {
        if (!visited.has(neighbor)) {
          stack.push({ node: neighbor, depth: depth + 1 })
        }
      }
    }

    return false
  }
}

export { GraphUnweightedUndirected }

// Example

// const graph = new GraphUnweightedUndirected()
// graph.addEdge(1, 2)
// graph.addEdge(2, 3)
// graph.addEdge(2, 4)
// graph.addEdge(3, 5)
// console.log(graph.IDS(5, 1)) // Output: true
// console.log(graph.IDS(100, 1)) // Output: false
