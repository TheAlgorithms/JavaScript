
/* Minimum Priority Queue
* It is a part of heap data structure
* A heap is a specific tree based data structure
* in which all the nodes of tree are in a specific order.
* that is the children are arranged in some
* respect of their parents, can either be greater
* or less than the parent. This makes it a min priority queue
* or max priority queue.
*/

// Functions: insert, delete, peek, isEmpty, print, heapSort, sink

class MinPriorityQueue {
  // calls the constructor and initializes the capacity
  constructor (c) {
    this.heap = []
    this.capacity = c
    this.size = 0
  }

  // inserts the key at the end and rearranges it
  // so that the binary heap is in appropriate order
  insert (key) {
    if (this.isFull()) return
    this.heap[this.size + 1] = key
    let k = this.size + 1
    while (k > 1) {
      if (this.heap[k] < this.heap[Math.floor(k / 2)]) {
        const temp = this.heap[k]
        this.heap[k] = this.heap[Math.floor(k / 2)]
        this.heap[Math.floor(k / 2)] = temp
      }
      k = Math.floor(k / 2)
    }
    this.size++
  }

  // returns the highest priority value
  peek () {
    return this.heap[1]
  }

  // returns boolean value whether the heap is empty or not
  isEmpty () {
    return this.size === 0
  }

  // returns boolean value whether the heap is full or not
  isFull () {
    if (this.size === this.capacity) return true
    return false
  }

  // prints the heap
  print (output = value => console.log(value)) {
    output(this.heap.slice(1))
  }

  // heap reverse can be done by performing swapping the first
  // element with the last, removing the last element to
  // new array and calling sink function.
  heapReverse () {
    const heapSort = []
    while (this.size > 0) {
      // swap first element with last element
      [this.heap[1], this.heap[this.size]] = [this.heap[this.size], this.heap[1]]
      heapSort.push(this.heap.pop())
      this.size--
      this.sink()
    }
    // first value from heap it's empty to respect
    // structure with 1 as index of the first element
    this.heap = [undefined, ...heapSort.reverse()]
    this.size = heapSort.length
  }

  // this function reorders the heap after every delete function
  sink () {
    let k = 1
    while (2 * k <= this.size || 2 * k + 1 <= this.size) {
      let minIndex
      if (this.heap[2 * k] >= this.heap[k]) {
        if (2 * k + 1 <= this.size && this.heap[2 * k + 1] >= this.heap[k]) {
          break
        } else if (2 * k + 1 > this.size) {
          break
        }
      }
      if (2 * k + 1 > this.size) {
        minIndex = this.heap[2 * k] < this.heap[k] ? 2 * k : k
      } else {
        if (
          this.heap[k] > this.heap[2 * k] ||
          this.heap[k] > this.heap[2 * k + 1]
        ) {
          minIndex =
            this.heap[2 * k] < this.heap[2 * k + 1] ? 2 * k : 2 * k + 1
        } else {
          minIndex = k
        }
      }
      const temp = this.heap[k]
      this.heap[k] = this.heap[minIndex]
      this.heap[minIndex] = temp
      k = minIndex
    }
  }

  // deletes the highest priority value from the heap. The last
  // element goes to ahead to first position and reorder heap
  delete () {
    // checks empty and one element array conditions
    if (this.isEmpty()) return
    if (this.size === 1) {
      this.size--
      return this.heap.pop()
    }
    const min = this.heap[1]
    this.heap[1] = this.heap.pop()
    this.size--
    this.sink()
    return min
  }
}

export { MinPriorityQueue }
