import { BinaryHeap, minHeapComparator, maxHeapComparator } from '../BinaryHeap';
describe('BinaryHeap', () => {
    describe('MinHeap', () => {
      let minHeap;
  
      beforeEach(() => {
        minHeap = new BinaryHeap(minHeapComparator);
        minHeap.insert(4);
        minHeap.insert(3);
        minHeap.insert(6);
        minHeap.insert(1);
        minHeap.insert(8);
        minHeap.insert(2);
      });
  
      it('should initialize a heap from an input array', () => {
        expect(minHeap.heap).toEqual([1, 3, 2, 4, 8, 6]);
      });
  
      it('should show the top value in the heap', () => {
        const minValue = minHeap.peek();
        expect(minValue).toEqual(1);
      });
  
      it('should remove and return the top value in the heap', () => {
        const minValue = minHeap.extractTop();
        expect(minValue).toEqual(1);
        expect(minHeap.heap).toEqual([2, 3, 6, 4, 8]);
      });
  
      it('should handle insertion of duplicate values', () => {
        minHeap.insert(2);
        expect(minHeap.heap).toEqual([ 1, 3, 2, 4,8, 6, 2]);
      });
      
  
      it('should handle an empty heap', () => {
        const emptyHeap = new BinaryHeap(minHeapComparator);
        expect(emptyHeap.peek()).toBeUndefined();
        expect(emptyHeap.extractTop()).toBeUndefined();
      });
  
      it('should handle extracting all elements from the heap', () => {
        const extractedValues = [];
        while (!minHeap.empty()) {
          extractedValues.push(minHeap.extractTop());
        }
        expect(extractedValues).toEqual([1, 2, 3, 4, 6, 8]);
      });
    });
  
    describe('MaxHeap', () => {
      let maxHeap;
  
      beforeEach(() => {
        maxHeap = new BinaryHeap(maxHeapComparator);
        maxHeap.insert(4);
        maxHeap.insert(3);
        maxHeap.insert(6);
        maxHeap.insert(1);
        maxHeap.insert(8);
        maxHeap.insert(2);
      });
  
      it('should initialize a heap from an input array', () => {
        expect(maxHeap.heap).toEqual([8, 6, 4, 1, 3, 2]);
      });
  
      it('should show the top value in the heap', () => {
        const maxValue = maxHeap.peek();
        expect(maxValue).toEqual(8);
      });
  
      it('should remove and return the top value in the heap', () => {
        const maxValue = maxHeap.extractTop();
        expect(maxValue).toEqual(8);
        expect(maxHeap.heap).toEqual([6, 3, 4, 1, 2]);
      });
  
      it('should handle insertion of duplicate values', () => {
        maxHeap.insert(6);
        expect(maxHeap.heap).toEqual([8, 6, 6, 1, 3, 2, 4]);
      });
  
      it('should handle an empty heap', () => {
        const emptyHeap = new BinaryHeap(maxHeapComparator);
        expect(emptyHeap.peek()).toBeUndefined();
        expect(emptyHeap.extractTop()).toBeUndefined();
      });
  
      it('should handle extracting all elements from the heap', () => {
        const extractedValues = [];
        while (!maxHeap.empty()) {
          extractedValues.push(maxHeap.extractTop());
        }
        expect(extractedValues).toEqual([8, 6, 4, 3, 2, 1]);
      });
    });
  });