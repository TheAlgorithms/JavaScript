/**
 * Johnson's Algorithm for All-Pairs Shortest Paths
 * Reference: https://en.wikipedia.org/wiki/Johnson%27s_algorithm
 */

// Helper: Bellman-Ford algorithm
function bellmanFord(graph, source) {
  const dist = Array(graph.length).fill(Infinity)
  dist[source] = 0
  for (let i = 0; i < graph.length - 1; i++) {
    for (let u = 0; u < graph.length; u++) {
      for (const [v, w] of graph[u]) {
        if (dist[u] + w < dist[v]) {
          dist[v] = dist[u] + w
        }
      }
    }
  }
  // Check for negative-weight cycles
  for (let u = 0; u < graph.length; u++) {
    for (const [v, w] of graph[u]) {
      if (dist[u] + w < dist[v]) {
        throw new Error('Graph contains a negative-weight cycle')
      }
    }
  }
  return dist
}

// Helper: Dijkstra's algorithm
function dijkstra(graph, source) {
  const dist = Array(graph.length).fill(Infinity)
  dist[source] = 0
  const visited = Array(graph.length).fill(false)
  for (let i = 0; i < graph.length; i++) {
    let u = -1
    for (let j = 0; j < graph.length; j++) {
      if (!visited[j] && (u === -1 || dist[j] < dist[u])) {
        u = j
      }
    }
    if (dist[u] === Infinity) break
    visited[u] = true
    for (const [v, w] of graph[u]) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w
      }
    }
  }
  return dist
}

export function johnsonsAlgorithm(graph) {
  const n = graph.length

  const newGraph = graph.map((edges) => [...edges])
  newGraph.push([])
  for (let v = 0; v < n; v++) {
    newGraph[newGraph.length - 1].push([v, 0])
  }
  // Step 1: Run Bellman-Ford from new vertex
  const h = bellmanFord(newGraph, n)
  // Step 2: Reweight all edges
  const reweighted = []
  for (let u = 0; u < n; u++) {
    reweighted[u] = []
    for (const [v, w] of graph[u]) {
      reweighted[u].push([v, w + h[u] - h[v]])
    }
  }
  // Step 3: Run Dijkstra from each vertex
  const result = []
  for (let u = 0; u < n; u++) {
    const d = dijkstra(reweighted, u)
    result[u] = d.map((dist, v) => dist + h[v] - h[u])
  }
  return result
}

// Example usage:
// const graph = [
//   [[1, 3], [2, 8], [4, -4]],
//   [[3, 1], [4, 7]],
//   [[1, 4]],
//   [[0, 2], [2, -5]],
//   [[3, 6]]
// ]
// console.log(johnsonsAlgorithm(graph))
