import { findCycleStart } from '../CycleDetectionII'
import { Node } from '../SinglyLinkedList'

describe('Detect Cycle', () => {
  it('no cycle', () => {
    const head = new Node(1)
    head.next = new Node(2)

    expect(findCycleStart(head)).toBeNull()
  })

  it('simple cycle', () => {
    const head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)
    head.next.next.next = head.next // Creates a cycle

    expect(findCycleStart(head)).toBe(head.next)
  })

  it('long list with cycle', () => {
    const head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(5)
    head.next.next.next.next.next = head.next.next // Cycle

    expect(findCycleStart(head)).toBe(head.next.next)
  })

  it('cycle on last node', () => {
    const head = new Node(1)
    head.next = new Node(2)
    head.next.next = head

    expect(findCycleStart(head)).toBe(head)
  })
})
