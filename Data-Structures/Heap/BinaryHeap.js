/**
 * BinaryHeap class represents a binary heap data structure that can be configured as a Min Heap or Max Heap.
 *
 * Binary heaps are binary trees that are filled level by level and from left to right inside each level.
 * They have the property that any parent node has a smaller (for Min Heap) or greater (for Max Heap) priority
 * than its children, ensuring that the root of the tree always holds the extremal value.
 *
 * This implementation of the Binary Heap allows nodes to be associated with values of any data type and priorities.
 * The heap is represented as an array with nodes ordered from root to leaf, left to right.
 * Therefore, the parent-child relationships are as follows:
 *   - The positions of the children nodes relative to their parent are: (parentPos * 2 + 1) and (parentPos * 2 + 2).
 *   - The position of the parent node relative to either of its children is: Math.floor((childPos - 1) / 2).
 */
class BinaryHeap {
  /**
   * Creates a new BinaryHeap instance.
   * @param {Function} comparatorFunction - The comparator function used to determine the order of elements (e.g., minHeapComparator or maxHeapComparator).
   */
  constructor(comparatorFunction) {
    this.heap = [];
    this.comparator = comparatorFunction;
  }

  /**
   * Inserts a new value into the heap.
   * @param {*} value - The value to be inserted into the heap.
   */
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  /**
   * Returns the number of elements in the heap.
   * @returns {number} - The number of elements in the heap.
   */
  size() {
    return this.heap.length;
  }

  /**
   * Checks if the heap is empty.
   * @returns {boolean} - True if the heap is empty, false otherwise.
   */
  empty() {
    return this.size() === 0;
  }

  /**
   * Bubbles up a value from the specified index to maintain the heap property.
   * @param {number} currIdx - The index of the value to be bubbled up.
   * @private
   */
  bubbleUp(currIdx) {
    let parentIdx = Math.floor((currIdx - 1) / 2);

    while (
      currIdx > 0 &&
      this.comparator(this.heap[currIdx], this.heap[parentIdx])
    ) {
      this.swap(currIdx, parentIdx);
      currIdx = parentIdx;
      parentIdx = Math.floor((currIdx - 1) / 2);
    }
  }

  /**
   * Sinks down a value from the specified index to maintain the heap property.
   * @param {number} currIdx - The index of the value to be sunk down.
   * @private
   */
  sinkDown(currIdx) {
    let childOneIdx = currIdx * 2 + 1;

    while (childOneIdx < this.size()) {
      const childTwoIdx =
        childOneIdx + 1 < this.size() ? childOneIdx + 1 : -1;
      const swapIdx =
        childTwoIdx !== -1 &&
        this.comparator(this.heap[childTwoIdx], this.heap[childOneIdx])
          ? childTwoIdx
          : childOneIdx;

      if (this.comparator(this.heap[swapIdx], this.heap[currIdx])) {
        this.swap(currIdx, swapIdx);
        currIdx = swapIdx;
        childOneIdx = currIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  /**
   * Retrieves the top element of the heap without removing it.
   * @returns {*} - The top element of the heap.
   */
  peek() {
    return this.heap[0];
  }

  /**
   * Removes and returns the top element of the heap.
   * @returns {*} - The top element of the heap.
   */
  extractTop() {
    const top = this.peek();
    const last = this.heap.pop();

    if (!this.empty()) {
      this.heap[0] = last;
      this.sinkDown(0);
    }

    return top;
  }

  /**
   * Swaps elements at two specified indices in the heap.
   * @param {number} index1 - The index of the first element to be swapped.
   * @param {number} index2 - The index of the second element to be swapped.
   * @private
   */
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
}

// Min Heap comparator function
const minHeapComparator = (a, b) => a < b;

// Max Heap comparator function
const maxHeapComparator = (a, b) => a > b;

export { BinaryHeap, minHeapComparator}
