/*
Breadth-first approach can be applied to determine the shortest path between two nodes
in an equi-weighted graph. It searches the target node among all neighbors of the
starting node, then the process is repeated on the level of the neighbors of the
neighbors and so on.
(See also: https://en.wikipedia.org/wiki/Breadth-first_search )
(see also: https://www.koderdojo.com/blog/breadth-first-search-and-shortest-path-in-csharp-and-net-core )
*/

/*
Doctests
> breadthFirstShortestPath(graph, 'C', 'E')
[ 'C', 'D', 'A', 'B', 'E' ]
> breadthFirstShortestPath(graph, 'E', 'B')
[ 'E', 'D', 'A', 'B' ]
> breadthFirstShortestPath(graph, 'F', 'G')
[ 'F', 'G' ]
> breadthFirstShortestPath(graph, 'A', 'G')
[]
*/

function breadthFirstShortestPath (graph, startNode, targetNode) {
  // check if startNode & targetNode are identical
  if (startNode === targetNode) {
    return [startNode]
  }

  // visited keeps track of all nodes visited
  const visited = new Set()

  // queue contains the paths to be explored in the future
  const initialPath = [startNode]
  const queue = [initialPath]

  while (queue.length > 0) {
    // start with the queue's first path
    const path = queue.shift()
    const node = path[path.length - 1]

    // explore this node if it hasn't been visited yet
    if (!visited.has(node)) {
      // mark the node as visited
      visited.add(node)

      const neighbors = graph[node]

      // create a new path in the queue for each neighbor
      for (let i = 0; i < neighbors.length; i++) {
        const newPath = path.concat([neighbors[i]])

        // the first path to contain the target node is the shortest path
        if (neighbors[i] === targetNode) {
          return newPath
        }

        // queue the new path
        queue.push(newPath)
      }
    }
  }

  // the target node was not reachable
  return []
}

const graph = {
  A: ['B', 'D'],
  B: ['E'],
  C: ['D'],
  D: ['A'],
  E: ['D'],
  F: ['G'],
  G: []
}
/*
      A <-> B
      ʌ     |
      |     |
      v     v
C --> D <-- E

F --> G
*/

console.log(breadthFirstShortestPath(graph, 'C', 'E'))
console.log(breadthFirstShortestPath(graph, 'E', 'B'))
console.log(breadthFirstShortestPath(graph, 'F', 'G'))
console.log(breadthFirstShortestPath(graph, 'A', 'G'))
