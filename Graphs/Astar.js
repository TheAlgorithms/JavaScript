/**
 * Author: Mathang Peddi
 * A* Search Algorithm implementation in JavaScript
 * A* Algorithm calculates the minimum cost path between two nodes.
 * It is used to find the shortest path using heuristics.
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
  
  // Heuristic function to estimate the cost to reach the goal
  // You can modify this based on your specific problem, for now, we're using Manhattan distance
  function heuristic(a, b) {
    return Math.abs(a - b)
  }
  
  function aStar(graph, V, src, target) {
    const openSet = new Set([src]) // Nodes to explore
    const cameFrom = Array(V).fill(-1) // Keep track of path
    const gScore = Array(V).fill(Infinity) // Actual cost from start to a node
    gScore[src] = 0
  
    const fScore = Array(V).fill(Infinity) // Estimated cost from start to goal (g + h)
    fScore[src] = heuristic(src, target)
  
    while (openSet.size > 0) {
      // Get the node in openSet with the lowest fScore
      let current = -1
      openSet.forEach((node) => {
        if (current === -1 || fScore[node] < fScore[current]) {
          current = node
        }
      })
  
      // If the current node is the target, reconstruct the path and return
      if (current === target) {
        const path = []
        while (cameFrom[current] !== -1) {
          path.push(current)
          current = cameFrom[current]
        }
        path.push(src)
        return path.reverse()
      }
  
      openSet.delete(current)
  
      // Explore neighbors
      for (let i = 0; i < graph[current].length; i++) {
        const neighbor = graph[current][i][0]
        const tentative_gScore = gScore[current] + graph[current][i][1]
  
        if (tentative_gScore < gScore[neighbor]) {
          cameFrom[neighbor] = current
          gScore[neighbor] = tentative_gScore
          fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, target)
  
          if (!openSet.has(neighbor)) {
            openSet.add(neighbor)
          }
        }
      }
    }
  
    return [] // Return empty path if there's no path to the target
  }
  
  module.exports = { createGraph, aStar }

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
  // const path = aStar(graph, V, 0, 4) // Find path from node 0 to node 4
  // console.log(path)
  
  /**
   * The function returns the optimal path from the source to the target node.
   * The heuristic used is Manhattan distance but it can be modified.
   */
  