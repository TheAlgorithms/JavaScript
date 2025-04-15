/*
Tarjan's Algorithm to find all Strongly Connected Components (SCCs) in a directed graph.
It performs a DFS traversal while keeping track of the discovery and low-link values
to identify root nodes of SCCs.

Complexity:
  Time: O(V + E), where V: vertices and E: edges.
  Space: O(V), for stack | discovery arrays | result.

Reference:
  https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
  https://cp-algorithms.com/graph/strongly-connected-components.html
*/

/**
 * Finds all strongly connected components in a directed graph using Tarjan's algorithm.
 *
 * @param {Object} graph - Directed graph represented as an adjacency list.
 * @returns {Array<Array<string|number>>} - List of strongly connected components (each SCC is a list of nodes).
 * @throws {Error} If the input graph is invalid or empty
 */
function TarjanSCC(graph) {
  // Input validation
  if (!graph || typeof graph !== 'object' || Array.isArray(graph)) {
    throw new Error(
      'Graph must be a non-null object representing an adjacency list'
    )
  }

  if (Object.keys(graph).length === 0) {
    return []
  }

  const ids = {} // Discovery time of each node
  const low = {} // Lowest discovery time reachable from the node
  const onStack = {} // To track if a node is on the recursion stack
  const stack = [] // Stack to hold the current path
  const result = [] // Array to store SCCs
  let time = 0 // Global timer for discovery time

  /**
   * Convert node to its proper type (number if numeric string, otherwise string)
   * @param {string|number} node
   * @returns {string|number}
   */
  function convertNode(node) {
    return !isNaN(node) && String(Number(node)) === String(node)
      ? Number(node)
      : node
  }

  /**
   * Recursive DFS function to explore the graph and find SCCs
   * @param {string|number} node
   */
  function dfs(node) {
    if (!(node in graph)) {
      throw new Error(`Node ${node} not found in graph`)
    }

    ids[node] = low[node] = time++
    stack.push(node)
    onStack[node] = true

    // Explore all neighbours
    const neighbors = graph[node]
    if (!Array.isArray(neighbors)) {
      throw new Error(`Neighbors of node ${node} must be an array`)
    }

    for (const neighbor of neighbors) {
      const convertedNeighbor = convertNode(neighbor)
      if (!(convertedNeighbor in ids)) {
        dfs(convertedNeighbor)
        low[node] = Math.min(low[node], low[convertedNeighbor])
      } else if (onStack[convertedNeighbor]) {
        low[node] = Math.min(low[node], ids[convertedNeighbor])
      }
    }

    // If the current node is the root of an SCC
    if (ids[node] === low[node]) {
      const scc = []
      let current
      do {
        current = stack.pop()
        onStack[current] = false
        scc.push(convertNode(current))
      } while (current !== node)
      result.push(scc)
    }
  }

  // Run DFS for all unvisited nodes
  try {
    for (const node in graph) {
      const convertedNode = convertNode(node)
      if (!(convertedNode in ids)) {
        dfs(convertedNode)
      }
    }
  } catch (error) {
    throw new Error(`Error during graph traversal: ${error.message}`)
  }

  return result
}

export { TarjanSCC }
