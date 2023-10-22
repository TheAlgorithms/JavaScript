import Queue from '../Data-Structures/Queue/Queue'

/**
 * Breadth-first search is an algorithm for traversing a graph.
 *
 * It discovers all nodes reachable from the starting position by exploring all of the neighbor nodes at the present
 * depth prior to moving on to the nodes at the next depth level.
 *
 * (description adapted from https://en.wikipedia.org/wiki/Breadth-first_search)
 * @see https://www.koderdojo.com/blog/breadth-first-search-and-shortest-path-in-csharp-and-net-core
 */
export function breadthFirstSearch(graph, startingNode) {
  // visited keeps track of all nodes visited
  const visited = new Set()

  // queue contains the nodes to be explored in the future
  const queue = new Queue()
  queue.enqueue(startingNode)

  while (!queue.isEmpty()) {
    // start with the queue's first node
    const node = queue.dequeue()

    if (!visited.has(node)) {
      // mark the node as visited
      visited.add(node)
      const neighbors = graph[node]

      // put all its neighbors into the queue
      for (let i = 0; i < neighbors.length; i++) {
        queue.enqueue(neighbors[i])
      }
    }
  }

  return visited
}
