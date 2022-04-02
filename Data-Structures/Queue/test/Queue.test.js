import { Queue } from '../Queue'

describe('Queue', () => {
  it('Check enqueue/dequeue', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(8)
    queue.enqueue(9)

    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
  })

  it('Check length', () => {
    const queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(8)
    queue.enqueue(9)

    expect(queue.length()).toBe(4)
  })

  it('Check peek', () => {
    const queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(8)
    queue.enqueue(9)

    expect(queue.peek()).toBe(1)
  })

  it('Check empty', () => {
    const queue = new Queue()
    expect(queue.empty()).toBeTruthy()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(8)
    queue.enqueue(9)

    expect(queue.empty()).toBeFalsy()
  })
})
