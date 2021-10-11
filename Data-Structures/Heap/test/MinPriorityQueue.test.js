import { MinPriorityQueue } from '../MinPriorityQueue'

describe('MinPriorityQueue', () => {
  const values = [5, 2, 4, 1, 7, 6, 3, 8]
  const capacity = values.length

  const Queue = new MinPriorityQueue(capacity)

  values.forEach(v => Queue.insert(v))

  it('Check heap ordering', () => {
    const mockFn = jest.fn()
    Queue.print(mockFn)

    expect(mockFn.mock.calls.length).toBe(1) // Expect one call
    expect(mockFn.mock.calls[0].length).toBe(1) // Expect one argument

    const heap = mockFn.mock.calls[0][0]
    expect(heap.length).toBe(capacity)
    expect(heap).toStrictEqual([1, 2, 3, 5, 7, 6, 4, 8])
  })

  it('heapSort() expected to reverse the heap ordering', () => {
    Queue.heapSort()

    const mockFn = jest.fn()
    Queue.print(mockFn)

    expect(mockFn.mock.calls.length).toBe(1)
    expect(mockFn.mock.calls[0].length).toBe(1)

    const heap = mockFn.mock.calls[0][0]
    expect(heap.length).toBe(capacity)
    expect(heap).toStrictEqual([8, 7, 6, 5, 4, 3, 2, 1])
  })
})
