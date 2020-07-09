// Priority Queue Helper functions
function getParentPosition (position) {
  // Get the parent node of the current node
  return Math.floor((position - 1) / 2)
}
function getChildrenPosition (position) {
  // Get the children nodes of the current node
  return [2 * position + 1, 2 * position + 2]
}

class PriorityQueue {
  // Priority Queue class using Minimum Binary Heap
  constructor () {
    this._heap = []
    this.keys = {}
  }

  isEmpty () {
    // Checking if the heap is empty
    return this._heap.length === 0
  }

  push (key, priority) {
    // Adding element to the queue (equivalent to add)
    this._heap.push([key, priority])
    this.keys[key] = this._heap.length - 1
    this._shiftUp(this.keys[key])
  }

  pop () {
    // Removing the element with least priority (equivalent to extractMin)
    this._swap(0, this._heap.length - 1)
    const [key] = this._heap.pop()
    delete this.keys[key]
    this._shiftDown(0)
    return key
  }

  contains (key) {
    // Check if a given key is present in the queue
    return (key in this.keys)
  }

  update (key, priority) {
    // Update the priority of the given element (equivalent to decreaseKey)
    const currPos = this.keys[key]
    this._heap[currPos][1] = priority
    const parentPos = getParentPosition(currPos)
    const currPriority = this._heap[currPos][1]
    let parentPriority = Infinity
    if (parentPos >= 0) {
      parentPriority = this._heap[parentPos][1]
    }
    const [child1Pos, child2Pos] = getChildrenPosition(currPos)
    let [child1Priority, child2Priority] = [Infinity, Infinity]
    if (child1Pos < this._heap.length) {
      child1Priority = this._heap[child1Pos][1]
    }
    if (child2Pos < this._heap.length) {
      child2Priority = this._heap[child2Pos][1]
    }

    if (parentPos >= 0 && parentPriority > currPriority) {
      this._shiftUp(currPos)
    } else if (child2Pos < this._heap.length &&
      (child1Priority < currPriority || child2Priority < currPriority)) {
      this._shiftDown(currPos)
    }
  }

  _shiftUp (position) {
    // Helper function to shift up a node to proper position (equivalent to bubbleUp)
    let currPos = position
    let parentPos = getParentPosition(currPos)
    let currPriority = this._heap[currPos][1]
    let parentPriority = Infinity
    if (parentPos >= 0) {
      parentPriority = this._heap[parentPos][1]
    }

    while (parentPos >= 0 && parentPriority > currPriority) {
      this._swap(currPos, parentPos)
      currPos = parentPos
      parentPos = getParentPosition(currPos)
      currPriority = this._heap[currPos][1]
      try {
        parentPriority = this._heap[parentPos][1]
      } catch (error) {
        parentPriority = Infinity
      }
    }
    this.keys[this._heap[currPos][0]] = currPos
  }

  _shiftDown (position) {
    // Helper function to shift down a node to proper position (equivalent to bubbleDown)
    let currPos = position
    let [child1Pos, child2Pos] = getChildrenPosition(currPos)
    let [child1Priority, child2Priority] = [Infinity, Infinity]
    if (child1Pos < this._heap.length) {
      child1Priority = this._heap[child1Pos][1]
    }
    if (child2Pos < this._heap.length) {
      child2Priority = this._heap[child2Pos][1]
    }
    let currPriority
    try {
      currPriority = this._heap[currPos][1]
    } catch {
      return
    }

    while (child2Pos < this._heap.length &&
      (child1Priority < currPriority || child2Priority < currPriority)) {
      if (child1Priority < currPriority && child1Priority < child2Priority) {
        this._swap(child1Pos, currPos)
        currPos = child1Pos
      } else {
        this._swap(child2Pos, currPos)
        currPos = child2Pos
      }
      [child1Pos, child2Pos] = getChildrenPosition(currPos)
      try {
        [child1Priority, child2Priority] = [this._heap[child1Pos][1], this._heap[child2Pos][1]]
      } catch (error) {
        [child1Priority, child2Priority] = [Infinity, Infinity]
      }

      currPriority = this._heap[currPos][1]
    }
    this.keys[this._heap[currPos][0]] = currPos
    if (child1Pos < this._heap.length && child1Priority < currPriority) {
      this._swap(child1Pos, currPos)
      this.keys[this._heap[child1Pos][0]] = child1Pos
    }
  }

  _swap (position1, position2) {
    // Helper function to swap 2 nodes
    [this._heap[position1], this._heap[position2]] = [this._heap[position2], this._heap[position1]]
    this.keys[this._heap[position1][0]] = position1
    this.keys[this._heap[position2][0]] = position2
  }
}

class GraphWeightedUndirectedAdjacencyList {
  // Weighted Undirected Graph class
  constructor () {
    this.connections = {}
  }

  addNode (node) {
    // Function to add a node to the graph (connection represented by set)
    this.connections[node] = {}
  }

  addEdge (node1, node2, weight) {
    // Function to add an edge (adds the node too if they are not present in the graph)
    if (!(node1 in this.connections)) { this.addNode(node1) }
    if (!(node2 in this.connections)) { this.addNode(node2) }
    this.connections[node1][node2] = weight
    this.connections[node2][node1] = weight
  }

  PrimMST (start) {
    // Kruskal's Algorithm to generate a Minimum Spanning Tree (MST) of a graph
    // Details: https://en.wikipedia.org/wiki/Prim%27s_algorithm
    const distance = {}
    const parent = {}
    const priorityQueue = new PriorityQueue()
    // Initialization
    for (const node in this.connections) {
      distance[node] = (node === start.toString() ? 0 : Infinity)
      parent[node] = null
      priorityQueue.push(node, distance[node])
    }
    // Updating 'distance' object
    while (!priorityQueue.isEmpty()) {
      const node = priorityQueue.pop()
      Object.keys(this.connections[node]).forEach(neighbour => {
        if (priorityQueue.contains(neighbour) && distance[node] + this.connections[node][neighbour] < distance[neighbour]) {
          distance[neighbour] = distance[node] + this.connections[node][neighbour]
          parent[neighbour] = node
          priorityQueue.update(neighbour, distance[neighbour])
        }
      })
    }

    // MST Generation from the 'parent' object
    const graph = new GraphWeightedUndirectedAdjacencyList()
    Object.keys(parent).forEach(node => {
      if (node && parent[node]) {
        graph.addEdge(node, parent[node], this.connections[node][parent[node]])
      }
    })
    return graph
  }
}

function main () {
  const graph = new GraphWeightedUndirectedAdjacencyList()
  graph.addEdge(1, 2, 1)
  graph.addEdge(2, 3, 2)
  graph.addEdge(3, 4, 1)
  graph.addEdge(3, 5, 100) // Removed in MST
  graph.addEdge(4, 5, 5)
  console.log(graph.PrimMST(1))
}

main()
