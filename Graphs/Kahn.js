/*
  Source:
    https://en.wikipedia.org/wiki/Topological_sorting#Kahn's_algorithm
*/

/*
   Kahn's Algorithm for Topological Sorting
   ----------------------------------------
   Works only on Directed Acyclic Graphs (DAGs).
   Idea:
    1. Compute indegree (number of incoming edges) for each node.
    2. Start with nodes having indegree = 0 (no dependencies).
    3. Repeatedly remove nodes with indegree = 0 and reduce indegree of their neighbors.
    4. If all nodes are processed, we have a valid topological order.
    5. If not, graph has a cycle.
  
   Time Complexity: O(V + E)  (V = vertices, E = edges)
   Space Complexity: O(V + E)
 */

const KahnsAlgorithm = (numNodes, edges) => {
  // Input:
  //   numNodes: number of vertices in the graph (0..numNodes-1)
  //   edges: list of directed edges [u, v] meaning u -> v
  // Output:
  //   topoOrder: array of vertices in topological order
  //              OR empty array if graph contains a cycle

  // Step 1: Build adjacency list and indegree array
  const adj = Array.from({ length: numNodes }, () => [])
  const indegree = Array(numNodes).fill(0)

  for (const [u, v] of edges) {
    adj[u].push(v)
    indegree[v]++
  }

  // Step 2: Initialize queue with all nodes having indegree = 0
  const queue = []
  for (let i = 0; i < numNodes; i++) {
    if (indegree[i] === 0) queue.push(i)
  }

  const topoOrder = []

  // Step 3: Process queue
  while (queue.length > 0) {
    const node = queue.shift()
    topoOrder.push(node)

    for (const neighbor of adj[node]) {
      indegree[neighbor]--
      if (indegree[neighbor] === 0) {
        queue.push(neighbor)
      }
    }
  }

  // Step 4: Verify if topological order includes all nodes
  return topoOrder.length === numNodes ? topoOrder : []
}

export { KahnsAlgorithm }
