class GraphUnweightedUndirected {
  // Unweighted Undirected Graph class
  constructor() {
    this.connections = {};
  }

  addNode(node) {
    // Function to add a node to the graph (connection represented by set)
    this.connections[node] = new Set();
  }

  addEdge(node1, node2) {
    // Function to add an edge (adds the node too if they are not present in the graph)
    if (!(node1 in this.connections)) {
      this.addNode(node1);
    }
    if (!(node2 in this.connections)) {
      this.addNode(node2);
    }
    this.connections[node1].add(node2);
    this.connections[node2].add(node1);
  }

  DFSIterative(node, value) {
    // DFS Function to search if a node with the given value is present in the graph
    const stack = [node];
    const visited = new Set([node]); // Start with the initial node already visited.
    while (stack.length > 0) {
      const currNode = stack.pop();
      if (currNode === value) {
        return true; // Early exit if the value is found
      }
      for (const neighbour of this.connections[currNode]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
          visited.add(neighbour);
        }
      }
    }
    return false;
  }
}

export { GraphUnweightedUndirected };

// Example

// const graph = new GraphUnweightedUndirected();
// graph.addEdge(1, 2);
// graph.addEdge(2, 3);
// graph.addEdge(2, 4);
// graph.addEdge(3, 5);
// console.log(graph.DFSIterative(5, 1)); // Should print true if 1 is reachable from 5
// console.log(graph.DFSIterative(5, 100)); // Should print false
