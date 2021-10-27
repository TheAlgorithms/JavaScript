class MinHeap {
    constructor(array) {
        this.heap = this.initializeHeap(array);
    }

    /**
     *   a parent index relative to its two children are: (parentIdx * 2) and (parent * 2 + 1)
     *   therefore (either) child's position relative to its parent is: Math.floor((childIdx-1)/2)
     *   
     *   startingParent represents the parent of the last index (=== array.length-1)
     *   and iterates towards 0 with all index values below sorted to meet heap conditions
     */
    initializeHeap(array) {
        let startingParent = Math.floor((array.length-2)/2)
        
        for (let currIdx = startingParent; currIdx >= 0; currIdx--) {
            this.sinkDown(currIdx, array.length-1, array)
        }
        return array
    }

    /**
     *   overall functionality: heap-sort value at a starting index (currIdx) towards end of heap
     * 
     *   currIdx is considered to be a starting 'parent' index of two children indices (childOneIdx, childTwoIdx).
     *   endIdx represents the last valid index in the heap.
     * 
     *   first check that childOneIdx and childTwoIdx are both smaller than endIdx 
     *   and check for the smaller heap value between them.
     *   
     *   the child index with the smaller heap value is set to a variable called swapIdx.
     * 
     *   swapIdx's value will be compared to currIdx (the 'parent' index) 
     *   and if swapIdx's value is smaller than currIdx's value, swap the values in the heap,
     *   update currIdx and recalculate the new childOneIdx to check heap conditions again. 
     * 
     *   if there is no swap, it means the children indices and the parent index satisfy heap conditions and can exit the function.
     */
    sinkDown(currIdx, endIdx, heap) {
        let childOneIdx = currIdx * 2 + 1
        
        while (childOneIdx <= endIdx) {
            let childTwoIdx = childOneIdx + 1 <= endIdx ? childOneIdx + 1 : -1
            let swapIdx = childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]
                ? childTwoIdx 
                : childOneIdx
            
            if (heap[swapIdx] < heap[currIdx]) {
                this.swap(currIdx, swapIdx, heap)
                currIdx = swapIdx
                childOneIdx = currIdx * 2 + 1
            } else {
                return;
            }
        }  
    }

    /**
     *   overall functionality: heap-sort value at a starting index (currIdx) towards front of heap.
     * 
     *   while the currIdx's value is smaller than its parent's (parentIdx) value, swap the values in the heap
     *   update currIdx and recalculate the new parentIdx to check heap condition again. 
     * 
     *   iteration does not end while a valid currIdx has a value smaller than its parentIdx's value
     */
    bubbleUp(currIdx) {
        let parentIdx = Math.floor((currIdx - 1)/2)
        
        while (currIdx > 0 && this.heap[currIdx] < this.heap[parentIdx]) {        
            this.swap(currIdx, parentIdx, this.heap)
            currIdx = parentIdx
            parentIdx = Math.floor((currIdx-1)/2)
        }
    }

    peek() {
        return this.heap[0]
    }

    /**
     *   the min heap value should be the first value in the heap (=== this.heap[0])
     * 
     *   firstIdx value and lastIdx value are swapped
     *   the resulting min heap value now resides at heap[heap.length-1] which is popped and later returned.
     *  
     *   the remaining values in the heap are re-sorted
     */
    extractMin() {
        this.swap(0, this.heap.length-1, this.heap)
        let min = this.heap.pop()
        this.sinkDown(0, this.heap.length-1, this.heap)
        return min
    }

    // a new value is pushed to the end of the heap and sorted up
    insert(value) {
        this.heap.push(value)
        this.bubbleUp(this.heap.length-1)
    }
 
    // index-swapping helper method
    swap(idx1, idx2, heap) {
        let temp = heap[idx1]
        heap[idx1] = heap[idx2]
        heap[idx2] = temp
    }
}

export { MinHeap }