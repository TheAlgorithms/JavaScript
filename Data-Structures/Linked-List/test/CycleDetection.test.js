import { detectCycle } from '../CycleDetection'
import { Node } from '../SinglyLinkedList'

describe('Detect Cycle', () => {
  it('should detect loop and return true', () => {
    // Creating list and making a loop
    const headNode = new Node(10)
    headNode.next = new Node(20)
    headNode.next.next = new Node(30)
    headNode.next.next.next = new Node(40)
    headNode.next.next.next.next = headNode
    expect(detectCycle(headNode)).toEqual(true)
  })

  it('should not detect a loop and return false', () => {
    // Case 0: When head is null, there is no loop.
    expect(detectCycle(null)).toEqual(false)
    const headNode = new Node(10)

    // Case 1: List with single node doesn't have any loop
    expect(detectCycle(headNode)).toEqual(false)

    headNode.next = new Node(20)
    headNode.next.next = new Node(30)
    headNode.next.next.next = new Node(40)
    headNode.next.next.next.next = new Node(50)

    // Case 2: List not having any loops
    expect(detectCycle(headNode)).toEqual(false)
  })
})
