import { Queue } from '../QueueUsing2Stacks'

describe('QueueUsing2Stacks', () => {
  const queue = new Queue()

  it('Check enqueue/dequeue', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(8)
    queue.enqueue(9)

    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
  })
})
