import { KeyPriorityQueue } from '../KeyPriorityQueue.js'

describe('Key Priority Queue', () => {
  describe('Method isEmpty', () => {
    test('Check heap is empty', () => {
      const queue = new KeyPriorityQueue()
      const res = queue.isEmpty()
      expect(res).toEqual(true)
    })

    test('Check heap is not empty', () => {
      const queue = new KeyPriorityQueue()
      queue.push(0, 2)
      const res = queue.isEmpty()
      expect(res).toEqual(false)
    })
  })

  describe('Methods push and pop', () => {
    test('Test Case 1', () => {
      // create queue
      const queue = new KeyPriorityQueue()
      queue.push(0, 3)
      queue.push(1, 7)
      queue.push(2, 9)
      queue.push(3, 13)
      // create expected queue
      const expectedQueue = new KeyPriorityQueue()
      expectedQueue.push(1, 7)
      expectedQueue.push(3, 13)
      expectedQueue.push(2, 9)
      // result from popping element from the queue
      queue.pop()
      expect(queue).toEqual(expectedQueue)
    })

    test('Test Case 2', () => {
      // create queue
      const queue = new KeyPriorityQueue()
      queue.push(0, 3)
      queue.push(1, 9)
      queue.push(2, 7)
      queue.push(3, 13)
      // create expected queue
      const expectedQueue = new KeyPriorityQueue()
      expectedQueue.push(2, 7)
      expectedQueue.push(1, 9)
      expectedQueue.push(3, 13)
      // result from popping element from the queue
      queue.pop()
      expect(queue).toEqual(expectedQueue)
    })

    test('Test Case 3', () => {
      // create queue
      const queue = new KeyPriorityQueue()
      queue.push(0, 3)
      queue.push(1, 7)
      queue.push(2, 9)
      queue.push(3, 12)
      queue.push(4, 13)
      // create expected queue
      const expectedQueue = new KeyPriorityQueue()
      expectedQueue.push(1, 7)
      expectedQueue.push(3, 12)
      expectedQueue.push(2, 9)
      expectedQueue.push(4, 13)
      // result from popping element from the queue
      queue.pop()
      expect(queue).toEqual(expectedQueue)
    })
  })

  describe('Method contains', () => {
    test('Check heap does not contain element', () => {
      const queue = new KeyPriorityQueue()
      const res = queue.contains(0)
      expect(res).toEqual(false)
    })

    test('Check heap contains element', () => {
      const queue = new KeyPriorityQueue()
      queue.push(0, 2)
      const res = queue.contains(0)
      expect(res).toEqual(true)
    })
  })

  describe('Method update', () => {
    test('Update without change in position', () => {
      // create queue
      const queue = new KeyPriorityQueue()
      queue.push(0, 3)
      queue.push(1, 5)
      queue.push(2, 7)
      queue.push(3, 11)
      // create expected queue
      const expectedQueue = new KeyPriorityQueue()
      expectedQueue.push(0, 2)
      expectedQueue.push(1, 5)
      expectedQueue.push(2, 7)
      expectedQueue.push(3, 11)
      // result from updating to similar priority
      queue.update(0, 2)
      expect(queue).toEqual(expectedQueue)
    })

    test('Update with change in position', () => {
      // create queue
      const queue = new KeyPriorityQueue()
      queue.push(0, 3)
      queue.push(1, 5)
      queue.push(2, 7)
      queue.push(3, 11)
      // create expected queue
      const expectedQueue = new KeyPriorityQueue()
      expectedQueue.push(1, 5)
      expectedQueue.push(3, 11)
      expectedQueue.push(2, 7)
      expectedQueue.push(0, 9)
      // result from updating to similar priority
      queue.update(0, 9)
      expect(queue).toEqual(expectedQueue)
    })
  })
})
