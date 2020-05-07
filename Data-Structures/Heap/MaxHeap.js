/**
 * Author: Samarth Jain
 * Max Heap implementation in Javascript
 */

class BinaryHeap {
  constructor () {
    this.heap = []
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

      if (parent[0] >= element[0]) break
      this.heap[index] = parent
      this.heap[parentIndex] = element
      index = parentIndex
    }
  }

  // Extracting the maximum element from the Heap
  extractMax () {
    const max = this.heap[0]
    const tmp = this.heap.pop()
    if (!this.empty()) {
      this.heap[0] = tmp
      this.sinkDown(0)
    }
    return max
  }

  // To restore the balance of the heap after extraction.
  sinkDown (index) {
    const left = 2 * index + 1
    const right = 2 * index + 2
    let largest = index
    const length = this.size()

    if (left < length && this.heap[left][0] > this.heap[largest][0]) {
      largest = left
    }
    if (right < length && this.heap[right][0] > this.heap[largest][0]) {
      largest = right
    }
    // swap
    if (largest !== index) {
      const tmp = this.heap[largest]
      this.heap[largest] = this.heap[index]
      this.heap[index] = tmp
      this.sinkDown(largest)
    }
  }
}

const maxHeap = new BinaryHeap()
maxHeap.insert([4])
maxHeap.insert([3])
maxHeap.insert([6])
maxHeap.insert([1])
maxHeap.insert([8])
maxHeap.insert([2])

while (!maxHeap.empty()) {
  const mx = maxHeap.extractMax()
  console.log(mx)
}
