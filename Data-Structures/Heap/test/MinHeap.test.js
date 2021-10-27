import { MinHeap } from '../MinHeap'

describe('MinHeap', () => {
  const array = [2, 4, 10, 23, 43, 42, 39, 7, 9, 16, 85, 1, 51]
  let heap

  beforeEach(() => {
    heap = new MinHeap(array)
  })

  it('should initialize a heap from an input array', () => {
    expect(heap).toEqual({ 'heap': [1, 4, 2, 7, 16, 10, 39, 23, 9, 43, 85, 42, 51] })   // eslint-disable-line
  })

  it('should show the top value in the heap', () => {
    const minValue = heap.peek()

    expect(minValue).toEqual(1)
  })

  it('should remove and return the top value in the heap', () => {
    const minValue = heap.extractMin()

    expect(minValue).toEqual(1)
    expect(heap).toEqual({ 'heap': [2, 4, 10, 7, 16, 42, 39, 23, 9, 43, 85, 51] })      // eslint-disable-line
  })

  it('should insert a new value and sort until it meets heap conditions', () => {
    heap.insert(15)

    expect(heap).toEqual({ 'heap': [2, 4, 10, 7, 16, 15, 39, 23, 9, 43, 85, 51, 42] })  // eslint-disable-line
  })
})
