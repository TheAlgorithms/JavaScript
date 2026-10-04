import { KeyPriorityQueue } from '../KeyPriorityQueue.js'

describe('KeyPriorityQueue with infinite priorities', () => {
  const assertHeap = (queue, priorities) => {
    expect(queue._heap.length).toBe(priorities.size)
    expect(queue.priorities).toEqual(priorities)
    expect(new Set(queue._heap)).toEqual(new Set(priorities.keys()))
    expect(queue.isEmpty()).toBe(priorities.size === 0)
    for (const key of priorities.keys()) {
      expect(queue.contains(key)).toBe(true)
    }
    for (let child = 1; child < queue._heap.length; child++) {
      const parent = Math.floor((child - 1) / 2)
      const parentPriority = priorities.get(queue._heap[parent])
      const childPriority = priorities.get(queue._heap[child])
      expect(parentPriority).toBeLessThanOrEqual(childPriority)
    }
    if (priorities.size > 0) {
      const minimum = Math.min(...priorities.values())
      expect(priorities.get(queue._heap[0])).toBe(minimum)
    }
  }

  const popMinimum = (queue, priorities) => {
    const minimum = Math.min(...priorities.values())
    const key = queue.pop()
    expect(priorities.has(key)).toBe(true)
    expect(priorities.get(key)).toBe(minimum)
    priorities.delete(key)
    expect(queue.contains(key)).toBe(false)
    assertHeap(queue, priorities)
    return key
  }

  it.each([
    [0, 1, Infinity],
    [0, 2, 1, Infinity],
    [0, 1, 2, 3, 4, 5, Infinity]
  ])('sinks an infinite replacement after popping %j', (...values) => {
    const queue = new KeyPriorityQueue()
    const priorities = new Map()
    values.forEach((priority, key) => {
      queue.push(key, priority)
      priorities.set(key, priority)
    })
    expect(popMinimum(queue, priorities)).toBe(0)
    while (priorities.size > 0) {
      popMinimum(queue, priorities)
    }
  })

  it('sinks the root when its priority increases to Infinity', () => {
    const queue = new KeyPriorityQueue()
    queue.push('root', 0)
    queue.push('left', 1)
    queue.push('right', 2)
    queue.update('root', Infinity)
    const priorities = new Map([
      ['root', Infinity],
      ['left', 1],
      ['right', 2]
    ])
    assertHeap(queue, priorities)
    expect(popMinimum(queue, priorities)).toBe('left')
    expect(popMinimum(queue, priorities)).toBe('right')
    expect(popMinimum(queue, priorities)).toBe('root')
  })

  it('sinks an internal node past finite descendants', () => {
    const queue = new KeyPriorityQueue()
    const priorities = new Map()
    for (let key = 0; key < 7; key++) {
      queue.push(key, key)
      priorities.set(key, key)
    }
    queue.update(1, Infinity)
    priorities.set(1, Infinity)
    assertHeap(queue, priorities)
    queue.update(1, -1)
    priorities.set(1, -1)
    assertHeap(queue, priorities)
    expect(popMinimum(queue, priorities)).toBe(1)
    while (priorities.size > 0) {
      popMinimum(queue, priorities)
    }
  })

  it('drains equal infinite priorities and can be reused', () => {
    const queue = new KeyPriorityQueue()
    const priorities = new Map()
    for (const key of ['a', 'b', 'c', 'd']) {
      queue.push(key, Infinity)
      priorities.set(key, Infinity)
    }
    assertHeap(queue, priorities)
    while (priorities.size > 0) {
      popMinimum(queue, priorities)
    }
    queue.update('new', Infinity)
    priorities.set('new', Infinity)
    queue.push('finite', -3)
    priorities.set('finite', -3)
    assertHeap(queue, priorities)
    expect(popMinimum(queue, priorities)).toBe('finite')
    expect(popMinimum(queue, priorities)).toBe('new')
  })

  it('matches a reference map through mixed updates and extractions', () => {
    const queue = new KeyPriorityQueue()
    const priorities = new Map()
    for (let key = 0; key < 24; key++) {
      const priority = key % 3 === 0 ? Infinity : key - 12
      queue.push(key, priority)
      priorities.set(key, priority)
    }
    assertHeap(queue, priorities)
    for (let step = 0; step < 12; step++) {
      const key = queue._heap[0]
      queue.update(key, Infinity)
      priorities.set(key, Infinity)
      assertHeap(queue, priorities)
      const leaf = queue._heap[queue._heap.length - 1]
      const priority = step % 2 === 0 ? -Infinity : -step
      queue.update(leaf, priority)
      priorities.set(leaf, priority)
      assertHeap(queue, priorities)
      popMinimum(queue, priorities)
    }
    while (priorities.size > 0) {
      popMinimum(queue, priorities)
    }
    expect(queue.priorities.size).toBe(0)
  })
})
