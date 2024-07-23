import Queue from '../Data-Structures/Queue/Queue'
/**
 * @author {RaviSadam}
 * @name TopoSortIterative
 * @description -
 * Topological sorting algorithm implementation in JavaScript(Khan's Algorithm)
 * @summary
 * Topological sorting for Directed Acyclic Graph is a linear ordering of vertices
 * such that for every directed edge u-v, vertex u comes before v in the ordering.
 *
 * @param graph - Graph (adjacency list)
 * @returns {Array} - Gives null if graph has cycle otherwise result array
 *
 */

export function TopoSortIterative(graph) {
  const n = graph.length
  const inDegree = Array(n).fill(0)
  const queue = new Queue()
  const result = Array(n).fill(0)
  let index = 0

  for (const neighbors of graph) {
    for (const neighbor of neighbors) {
      inDegree[neighbor]++
    }
  }

  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.enqueue(i)
    }
  }
  while (queue.length !== 0) {
    const node = queue.dequeue()
    result[index] = node
    index++
    for (let neighbor of graph[node]) {
      inDegree[neighbor]--
      if (inDegree[neighbor] === 0) {
        queue.enqueue(neighbor)
      }
    }
  }
  if (index !== n) return null
  return result
}
