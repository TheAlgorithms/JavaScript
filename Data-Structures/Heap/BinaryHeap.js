/**
 * A generic Binary Heap
 * @class
 */

class BinaryHeap {
  /**
   * @param {condition} heapCondition
   */
  constructor (heapCondition) {
    /**
     * Asserts a property that the heap must meet on parent and child
     * @callback condition
     * @param {*} parent Value of parent
     * @param {*} child  Value of child
     * @returns {boolean}
     */
    this.heap = []
    this.heapCondition = heapCondition
  }

  insert (value) {
    this.heap.push(value)
    this.heapify()
  }

  size () {
    return this.heap.length
  }

  empty () {
    return this.size() === 0
  }

  // using iterative approach to reorder the heap after insertion
  heapify () {
    let index = this.size() - 1

    while (index > 0) {
      const element = this.heap[index]
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.heap[parentIndex]

      if (this.heapCondition(parent, element)) break
      this.heap[index] = parent
      this.heap[parentIndex] = element
      index = parentIndex
    }
  }

  // Extracting the topmost element from the Heap
  extract () {
    const top = this.heap[0]
    const bottom = this.heap.pop()
    if (!this.empty()) {
      this.heap[0] = bottom
      this.sinkDown(0)
    }
    return top
  }

  // To restore the balance of the heap after extraction.
  sinkDown (index) {
    const left = 2 * index + 1
    const right = 2 * index + 2
    const toSwap = [index, left, right].reduce((a, b) => {
      if (b < this.size() && !this.heapCondition(this.heap[a], this.heap[b])) { return b }
      return a
    })
    // swap
    if (toSwap !== index) {
      [this.heap[toSwap], this.heap[index]] = [this.heap[index], this.heap[toSwap]]
      this.sinkDown(toSwap)
    }
  }
}

export { BinaryHeap }
