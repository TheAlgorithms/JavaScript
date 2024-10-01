import { FindMiddleNode } from '../FindMiddleNode.js'
import { LinkedList } from '../SinglyLinkedList.js'

describe('FindMiddleNode', () => {
  it('Check Middle Node of Linked List', () => {
    const list = new LinkedList()
    list.addFirst(1)
    list.addLast(2)
    list.addLast(3)
    list.addLast(4)
    list.addLast(5)

    const findMiddleNode = new FindMiddleNode()
    const middleNode = findMiddleNode.findMiddle(list.headNode)

    // Convert the node and its following nodes to an array for verification
    expect(findMiddleNode.solutionToArray(middleNode)).toEqual([3, 4, 5])
  })

  it('Check Middle Node for Even Number of Elements', () => {
    const list = new LinkedList()
    list.addFirst(1)
    list.addLast(2)
    list.addLast(3)
    list.addLast(4)
    list.addLast(5)
    list.addLast(6)

    const findMiddleNode = new FindMiddleNode()
    const middleNode = findMiddleNode.findMiddle(list.headNode)

    // For even-length lists, the second middle node is returned
    expect(findMiddleNode.solutionToArray(middleNode)).toEqual([4, 5, 6])
  })
})
