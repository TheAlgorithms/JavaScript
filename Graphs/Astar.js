/**
 * @author : Mathang Peddi
 * A* Algorithm calculates the minimum cost path between two nodes.
 * It is used to find the shortest path using heuristics.
 * It uses graph data structure.
 */

// Euclidean distance heuristic for 2D points
function euclideanHeuristic(pointA, pointB) {
  const dx = pointA[0] - pointB[0]
  const dy = pointA[1] - pointB[1]
  return Math.sqrt(dx * dx + dy * dy)
}

// Priority Queue (Min-Heap) implementation
class PriorityQueue {
  constructor() {
    this.elements = []
  }

  enqueue(node, priority) {
    this.elements.push({ node, priority })
    this.bubbleUp()
  }

  bubbleUp() {
    let index = this.elements.length - 1
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.elements[index].priority >= this.elements[parentIndex].priority)
        break
      ;[this.elements[index], this.elements[parentIndex]] = [
        this.elements[parentIndex],
        this.elements[index]
      ]
      index = parentIndex
    }
  }

  dequeue() {
    if (this.elements.length === 1) {
      return this.elements.pop().node
    }

    const node = this.elements[0].node
    this.elements[0] = this.elements.pop()
    this.sinkDown(0)
    return node
  }

  sinkDown(index) {
    const length = this.elements.length
    const element = this.elements[index]
    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let swapIndex = null

      if (
        leftChildIndex < length &&
        this.elements[leftChildIndex].priority < element.priority
      ) {
        swapIndex = leftChildIndex
      }

      if (
        rightChildIndex < length &&
        this.elements[rightChildIndex].priority <
          (swapIndex === null
            ? element.priority
            : this.elements[leftChildIndex].priority)
      ) {
        swapIndex = rightChildIndex
      }

      if (swapIndex === null) break
      ;[this.elements[index], this.elements[swapIndex]] = [
        this.elements[swapIndex],
        this.elements[index]
      ]
      index = swapIndex
    }
  }

  isEmpty() {
    return this.elements.length === 0
  }
}

function aStar(graph, src, target, points) {
  const openSet = new PriorityQueue() // Priority queue to explore nodes
  openSet.enqueue(src, 0)

  const cameFrom = Array(graph.length).fill(null) // Keep track of path
  const gScore = Array(graph.length).fill(Infinity) // Actual cost from start to a node
  gScore[src] = 0

  const fScore = Array(graph.length).fill(Infinity) // Estimated cost from start to goal (g + h)
  fScore[src] = euclideanHeuristic(points[src], points[target])

  while (!openSet.isEmpty()) {
    // Get the node in openSet with the lowest fScore
    const current = openSet.dequeue()

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

    // Explore neighbors using destructuring for cleaner code
    for (const [neighbor, weight] of graph[current]) {
      const tentative_gScore = gScore[current] + weight

      if (tentative_gScore < gScore[neighbor]) {
        cameFrom[neighbor] = current
        gScore[neighbor] = tentative_gScore
        const priority =
          gScore[neighbor] +
          euclideanHeuristic(points[neighbor], points[target])
        fScore[neighbor] = priority

        openSet.enqueue(neighbor, priority)
      }
    }
  }

  return null // Return null if there's no path to the target
}

// Define the graph as an adjacency list
const graph = [
  [
    [1, 4],
    [7, 8]
  ], // Node 0 connects to node 1 (weight 4), node 7 (weight 8)
  [
    [0, 4],
    [2, 8],
    [7, 11]
  ], // Node 1 connects to node 0, node 2, node 7
  [
    [1, 8],
    [3, 7],
    [5, 4],
    [8, 2]
  ], // Node 2 connects to several nodes
  [
    [2, 7],
    [4, 9],
    [5, 14]
  ], // Node 3 connects to nodes 2, 4, 5
  [
    [3, 9],
    [5, 10]
  ], // Node 4 connects to nodes 3 and 5
  [
    [2, 4],
    [3, 14],
    [4, 10],
    [6, 2]
  ], // Node 5 connects to several nodes
  [
    [5, 2],
    [7, 1],
    [8, 6]
  ], // Node 6 connects to nodes 5, 7, 8
  [
    [0, 8],
    [1, 11],
    [6, 1],
    [8, 7]
  ], // Node 7 connects to several nodes
  [
    [2, 2],
    [6, 6],
    [7, 7]
  ] // Node 8 connects to nodes 2, 6, 7
]

// Define 2D coordinates for each node (these can be changed based on actual node positions)
const points = [
  [0, 0], // Point for node 0
  [1, 2], // Point for node 1
  [2, 1], // Point for node 2
  [3, 5], // Point for node 3
  [4, 3], // Point for node 4
  [5, 6], // Point for node 5
  [6, 8], // Point for node 6
  [7, 10], // Point for node 7
  [8, 12] // Point for node 8
]

// Call the aStar function with the graph, source node (0), and target node (4)
const path = aStar(graph, 0, 4, points)

console.log('Shortest path from node 0 to node 4:', path)

/**
 * The function returns the optimal path from the source to the target node.
 * The heuristic used is Euclidean distance between nodes' 2D coordinates.
 */
