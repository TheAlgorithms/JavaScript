class BinaryHeap {
    constructor(comparatorFunction) {
      this.heap = [];
      this.comparator = comparatorFunction;
    }
  
    insert(value) {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1);
    }
  
    size() {
      return this.heap.length;
    }
  
    empty() {
      return this.size() === 0;
    }
  
    bubbleUp(currIdx) {
      let parentIdx = Math.floor((currIdx - 1) / 2);
  
      while (currIdx > 0 && this.comparator(this.heap[currIdx], this.heap[parentIdx])) {
        this.swap(currIdx, parentIdx);
        currIdx = parentIdx;
        parentIdx = Math.floor((currIdx - 1) / 2);
      }
    }
  
    sinkDown(currIdx) {
      let childOneIdx = currIdx * 2 + 1;
  
      while (childOneIdx < this.size()) {
        const childTwoIdx = childOneIdx + 1 < this.size() ? childOneIdx + 1 : -1;
        const swapIdx =
          childTwoIdx !== -1 && this.comparator(this.heap[childTwoIdx], this.heap[childOneIdx])
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
  
    peek() {
      return this.heap[0];
    }
  
    extractTop() {
      const top = this.peek();
      const last = this.heap.pop();
  
      if (!this.empty()) {
        this.heap[0] = last;
        this.sinkDown(0);
      }
  
      return top;
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  }
  
  // Min Heap comparator function
  const minHeapComparator = (a, b) => a < b;
  
  // Max Heap comparator function
  const maxHeapComparator = (a, b) => a > b;
  
  // Example usage:
  // const minHeap = new BinaryHeap(minHeapComparator);
  // const maxHeap = new BinaryHeap(maxHeapComparator);
  export { BinaryHeap, minHeapComparator, maxHeapComparator };
  