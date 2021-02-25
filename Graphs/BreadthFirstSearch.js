/*
Breadth-first search is an algorithm for traversing a graph. It's discovers all nodes reachable from the starting position by exploring all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.
(description adapted from https://en.wikipedia.org/wiki/Breadth-first_search )
(see also: https://www.koderdojo.com/blog/breadth-first-search-and-shortest-path-in-csharp-and-net-core )
*/

/*
Doctests
> breadthFirstSearch(graph, "C")
[ 'C', 'D', 'A', 'B', 'E' ]
> breadthFirstSearch(graph, "A")
[ 'A', 'B', 'D', 'E' ]
> breadthFirstSearch(graph, "F")
[ 'F', 'G' ]
*/

function breadthFirstSearch (graph, startingNode) {
  // visited keeps track of all nodes visited
  const visited = []

  // queue contains the nodes to be explored in the future
  const queue = [startingNode]

  while (queue.length > 0) {
    // start with the queue's first node
    const node = queue.shift()

    if (!visited.includes(node)) {
      // mark the node as visited
      visited.push(node)
      const neighbors = graph[node]

      // put all its neighbors into the queue
      for (let i = 0; i < neighbors.length; i++) {
        queue.push(neighbors[i])
      }
    }
  }

  return visited
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

console.log(breadthFirstSearch(graph, 'C'))
console.log(breadthFirstSearch(graph, 'A'))
console.log(breadthFirstSearch(graph, 'F'))
