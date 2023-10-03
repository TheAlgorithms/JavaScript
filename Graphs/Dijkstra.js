/**
 * Author: Samarth Jain
 * Dijkstra's Algorithm implementation in JavaScript
 * Dijkstra's Algorithm calculates the minimum distance between two nodes.
 * It is used to find the shortest path.
 * It uses graph data structure.
 */

function createGraph(V, E) {
  // V - Number of vertices in graph
  // E - Number of edges in graph (u,v,w)
  const adjList = [] // Adjacency list
  for (let i = 0; i < V; i++) {
    adjList.push([])
  }
  for (let i = 0; i < E.length; i++) {
    adjList[E[i][0]].push([E[i][1], E[i][2]])
    adjList[E[i][1]].push([E[i][0], E[i][2]])
  }
  return adjList
}

function djikstra(graph, V, src) {
  const vis = Array(V).fill(0)
  const dist = []
  for (let i = 0; i < V; i++) dist.push([10000, -1])
  dist[src][0] = 0

  for (let i = 0; i < V - 1; i++) {
    let mn = -1
    for (let j = 0; j < V; j++) {
      if (vis[j] === 0) {
        if (mn === -1 || dist[j][0] < dist[mn][0]) mn = j
      }
    }

    vis[mn] = 1
    for (let j = 0; j < graph[mn].length; j++) {
      const edge = graph[mn][j]
      if (vis[edge[0]] === 0 && dist[edge[0]][0] > dist[mn][0] + edge[1]) {
        dist[edge[0]][0] = dist[mn][0] + edge[1]
        dist[edge[0]][1] = mn
      }
    }
  }

  return dist
}

export { createGraph, djikstra }

// const V = 9
// const E = [
//   [0, 1, 4],
//   [0, 7, 8],
//   [1, 7, 11],
//   [1, 2, 8],
//   [7, 8, 7],
//   [6, 7, 1],
//   [2, 8, 2],
//   [6, 8, 6],
//   [5, 6, 2],
//   [2, 5, 4],
//   [2, 3, 7],
//   [3, 5, 14],
//   [3, 4, 9],
//   [4, 5, 10]
// ]

// const graph = createGraph(V, E)
// const distances = djikstra(graph, V, 0)

/**
 * The first value in the array determines the minimum distance and the
 * second value represents the parent node from which the minimum distance has been calculated
 */
