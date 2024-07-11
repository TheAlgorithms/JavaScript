import Queue from '../Data-Structures/Queue/Queue'

/**
 * @author {RaviSadam}
 * @name KahnsAlgorithm
 * @description -
 * Kahn's Algorithm implementation in JavaScript
 * @summary
 * Kahn's Algorithm is used for finding the topological sorting order of directed acyclic graph
 *
 * @param graph - Graph (adjacency list)
 * @param n - Size of graph
 * @returns {Array} - null if cycle is detected or else result array
 *
 */

export function KahnsAlgorithm(graph, n) {
  if (n === null || n === undefined) throw Error('Invalid n was given')
  const inDegree = Array(n).fill(0)
  const result = []
  for (const neigbhours of graph) {
    for (const neigbhour of neigbhours) {
      inDegree[neigbhour] += 1
    }
  }
  const queue = new Queue()

  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.enqueue(i)
    }
  }
  while (queue.length !== 0) {
    const node = queue.dequeue()
    result.push(node)
    for (const neigbhour of graph[node]) {
      inDegree[neigbhour] -= 1
      if (inDegree[neigbhour] == 0) {
        queue.enqueue(neigbhour)
      }
    }
  }
  if (result.length !== n) return null
  return result
}
