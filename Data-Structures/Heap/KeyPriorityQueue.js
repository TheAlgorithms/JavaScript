/**
 * KeyPriorityQueue is a priority queue based on a Minimum Binary Heap.
 *
 * Minimum Binary Heaps are binary trees which are filled level by level
 * and then from left to right inside a depth level.
 * Their main property is that any parent node has a smaller or equal priority to all of its children,
 * hence the root of the tree always has the smallest priority of all nodes.
 *
 * This implementation of the Minimum Binary Heap allows for nodes to contain both a key and a priority.
 * WARNING: keys must be Integers as they are used as array indices.
 *
 * In this implementation, the heap is represented by an array with nodes ordered
 * from root-to-leaf, left-to-right.
 * Therefore, the parent-child node relationship is such that
 *      * the children nodes positions relative to their parent are: (parentPos * 2 + 1) and (parentPos * 2 + 2)
 *      * the parent node position relative to either of its children is: Math.floor((childPos - 1) / 2)
 *
 * More information and visuals on Binary Heaps can be found here: https://www.geeksforgeeks.org/binary-heap/
 */

// Priority Queue Helper functions
function getParentPosition (position) {
  // Get the parent node of the current node
  return Math.floor((position - 1) / 2)
}
function getChildrenPosition (position) {
  // Get the children nodes of the current node
  return [2 * position + 1, 2 * position + 2]
}

class KeyPriorityQueue {
  // Priority Queue class using Minimum Binary Heap
  constructor () {
    this._heap = []
    this.keys = {}
  }

  /**
   * Checks if the heap is empty
   * @returns boolean
   */
  isEmpty () {
    return this._heap.length === 0
  }

  /**
   * Adds an element to the queue
   * @param {number} key
   * @param {number} priority
   */
  push (key, priority) {
    this._heap.push([key, priority])
    this.keys[key] = this._heap.length - 1
    this._shiftUp(this.keys[key])
  }

  /**
   * Removes the element with least priority
   * @returns the key of the element with least priority
   */
  pop () {
    this._swap(0, this._heap.length - 1)
    const [key] = this._heap.pop()
    delete this.keys[key]
    this._shiftDown(0)
    return key
  }

  /**
   * Checks whether a given key is present in the queue
   * @param {number} key
   * @returns boolean
   */
  contains (key) {
    return (key in this.keys)
  }

  /**
   * Updates the priority of the given element
   * @param {number} key the element to change
   * @param {number} priority new priority of the element
   */
  update (key, priority) {
    const currPos = this.keys[key]
    this._heap[currPos][1] = priority
    const parentPos = getParentPosition(currPos)
    const currPriority = this._getPriorityOrInfinite(currPos)
    const parentPriority = this._getPriorityOrInfinite(parentPos)
    const [child1Pos, child2Pos] = getChildrenPosition(currPos)
    const child1Priority = this._getPriorityOrInfinite(child1Pos)
    const child2Priority = this._getPriorityOrInfinite(child2Pos)

    if (parentPos >= 0 && parentPriority > currPriority) {
      this._shiftUp(currPos)
    } else if (child1Priority < currPriority || child2Priority < currPriority) {
      this._shiftDown(currPos)
    }
  }

  _getPriorityOrInfinite (position) {
    // Helper function, returns priority of the node, or Infinite if no node corresponds to this position
    if (position >= 0 && position < this._heap.length) return this._heap[position][1]
    else return Infinity
  }

  _shiftUp (position) {
    // Helper function to shift up a node to proper position (equivalent to bubbleUp)
    let currPos = position
    let parentPos = getParentPosition(currPos)
    let currPriority = this._getPriorityOrInfinite(currPos)
    let parentPriority = this._getPriorityOrInfinite(parentPos)

    while (parentPos >= 0 && parentPriority > currPriority) {
      this._swap(currPos, parentPos)
      currPos = parentPos
      parentPos = getParentPosition(currPos)
      currPriority = this._getPriorityOrInfinite(currPos)
      parentPriority = this._getPriorityOrInfinite(parentPos)
    }
    this.keys[this._heap[currPos][0]] = currPos
  }

  _shiftDown (position) {
    // Helper function to shift down a node to proper position (equivalent to bubbleDown)
    let currPos = position
    let [child1Pos, child2Pos] = getChildrenPosition(currPos)
    let child1Priority = this._getPriorityOrInfinite(child1Pos)
    let child2Priority = this._getPriorityOrInfinite(child2Pos)
    let currPriority = this._getPriorityOrInfinite(currPos)

    if (currPriority === Infinity) {
      return
    }

    while (child1Priority < currPriority || child2Priority < currPriority) {
      if (child1Priority < currPriority && child1Priority < child2Priority) {
        this._swap(child1Pos, currPos)
        currPos = child1Pos
      } else {
        this._swap(child2Pos, currPos)
        currPos = child2Pos
      }
      [child1Pos, child2Pos] = getChildrenPosition(currPos)
      child1Priority = this._getPriorityOrInfinite(child1Pos)
      child2Priority = this._getPriorityOrInfinite(child2Pos)
      currPriority = this._getPriorityOrInfinite(currPos)
    }
  }

  _swap (position1, position2) {
    // Helper function to swap 2 nodes
    [this._heap[position1], this._heap[position2]] = [this._heap[position2], this._heap[position1]]
    this.keys[this._heap[position1][0]] = position1
    this.keys[this._heap[position2][0]] = position2
  }
}

export { KeyPriorityQueue }
