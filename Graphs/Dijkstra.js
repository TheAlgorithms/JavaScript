const BinaryHeap = require('../Data-Structures/Heap/BinaryHeap').BinaryHeap

/**
 *
 * @param {Object} graph
 * @param {String} src
 * @param {String} dest
 */
export function dijkstra (graph, src, dest) {
  // path heap is a min-heap, but of paths instead of numbers
  const pathHeap = new BinaryHeap((parent, child) => parent.length <= child.length)
  const visited = {}
  pathHeap.insert({ at: src, path: [], length: 0 })
  while (!pathHeap.empty()) {
    const smallestPath = pathHeap.extract()
    if (smallestPath.at === dest) return { length: smallestPath.length, path: smallestPath.path }
    if (smallestPath.at in visited) continue // we have already been here through a shorter
    // path, so ignore
    visited[smallestPath.at] = true
    Object.entries(graph[smallestPath.at]).forEach(
      ([node, weight]) => {
        if (!(node in visited)) {
          pathHeap.insert({
            at: node,
            path: smallestPath.path.concat([smallestPath.at]),
            length: weight + smallestPath.length
          })
        }
      }
    )
  }
}