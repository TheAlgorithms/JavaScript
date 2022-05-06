import Queue from '../Queue'

describe('Testing the Queue DS', () => {
  const queue = new Queue()

  it('Testing enqueue method', () => {
    expect(queue.enqueue(1)).toBe(1)
    expect(queue.enqueue(2)).toBe(2)
    expect(queue.enqueue(8)).toBe(3)
    expect(queue.enqueue(9)).toBe(4)
  })

  it('Testing length after enqueue', () => {
    expect(queue.length).toBe(4)
  })

  it('Testing peekFirst & peekLast methods', () => {
    expect(queue.peekFirst()).toBe(1)
    expect(queue.peekLast()).toBe(9)
  })

  it('Testing toArray method', () => {
    expect(queue.toArray()).toEqual([1, 2, 8, 9])
  })

  it('Testing dequeue method', () => {
    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
  })

  it('Testing length after dequeue', () => {
    expect(queue.length).toBe(2)
  })

  it('Testing isEmpty method', () => {
    const queue = new Queue()
    expect(queue.isEmpty()).toBeTruthy()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(8)
    queue.enqueue(9)

    expect(queue.isEmpty()).toBeFalsy()
  })
})
