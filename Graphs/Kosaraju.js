/**
 * Author: Adrito Mukherjee
 * Kosaraju's Algorithm implementation in Javascript
 * Kosaraju's Algorithm finds all the connected components in a Directed Acyclic Graph (DAG)
 * It uses Stack data structure to store the Topological Sorted Order of vertices and also Graph data structure
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Kosaraju%27s_algorithm
 *
 */

class Kosaraju {
  constructor(graph) {
    this.connections = {}
    this.reverseConnections = {}
    this.stronglyConnectedComponents = []
    for (const [i, j] of graph) {
      this.addEdge(i, j)
    }
    this.topoSort()
    return this.kosaraju()
  }

  addNode(node) {
    // Function to add a node to the graph (connection represented by set)
    this.connections[node] = new Set()
    this.reverseConnections[node] = new Set()
    this.topoSorted = []
  }

  addEdge(node1, node2) {
    // Function to add an edge (adds the node too if they are not present in the graph)
    if (!(node1 in this.connections) || !(node1 in this.reverseConnections)) {
      this.addNode(node1)
    }
    if (!(node2 in this.connections) || !(node2 in this.reverseConnections)) {
      this.addNode(node2)
    }
    this.connections[node1].add(node2)
    this.reverseConnections[node2].add(node1)
  }

  dfsTopoSort(node, visited) {
    visited.add(node)
    for (const child of this.connections[node]) {
      if (!visited.has(child)) this.dfsTopoSort(child, visited)
    }
    this.topoSorted.push(node)
  }

  topoSort() {
    // Function to perform topological sorting
    const visited = new Set()
    const nodes = Object.keys(this.connections).map((key) => Number(key))
    for (const node of nodes) {
      if (!visited.has(node)) this.dfsTopoSort(node, visited)
    }
  }

  dfsKosaraju(node, visited) {
    visited.add(node)
    this.stronglyConnectedComponents[
      this.stronglyConnectedComponents.length - 1
    ].push(node)
    for (const child of this.reverseConnections[node]) {
      if (!visited.has(child)) this.dfsKosaraju(child, visited)
    }
  }

  kosaraju() {
    // Function to perform Kosaraju Algorithm
    const visited = new Set()
    while (this.topoSorted.length > 0) {
      const node = this.topoSorted.pop()
      if (!visited.has(node)) {
        this.stronglyConnectedComponents.push([])
        this.dfsKosaraju(node, visited)
      }
    }
    return this.stronglyConnectedComponents
  }
}

function kosaraju(graph) {
  const stronglyConnectedComponents = new Kosaraju(graph)
  return stronglyConnectedComponents
}

export { kosaraju }

// kosaraju([
//   [1, 2],
//   [2, 3],
//   [3, 1],
//   [2, 4],
//   [4, 5],
//   [5, 6],
//   [6, 4],
// ])

// [ [ 1, 3, 2 ], [ 4, 6, 5 ] ]
