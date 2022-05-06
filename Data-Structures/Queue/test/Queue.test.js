import Queue from '../Queue'

describe('Testing the Queue DS', () => {
  it('Check Capacity', () => {
    const queue = new Queue(3)
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(8)

    expect(() => queue.enqueue(9)).toThrow()
  })

  it('Check enqueue/dequeue', () => {
    const queue = new Queue(10)
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(8)
    queue.enqueue(9)

    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
  })

  it('Check length', () => {
    const queue = new Queue(5)

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(8)
    queue.enqueue(9)

    expect(queue.toArray()).toEqual([1, 2, 8, 9])
  })

  it('Check peekFirst & peekLast', () => {
    const queue = new Queue(4)

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(8)
    queue.enqueue(9)

    expect(queue.peekFirst()).toBe(1)
    expect(queue.peekLast()).toBe(9)
  })

  it('Check toArray', () => {
    const queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(8)
    queue.enqueue(9)
  })

  it('Check empty', () => {
    const queue = new Queue(5)
    expect(queue.isEmpty()).toBeTruthy()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(8)
    queue.enqueue(9)

    expect(queue.isEmpty()).toBeFalsy()
  })
})
