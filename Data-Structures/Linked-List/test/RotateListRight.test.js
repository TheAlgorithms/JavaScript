import { rotateListRight } from '../RotateListRight'
import { Node } from '../SinglyLinkedList'

describe('Rotate list by k steps', () => {
  it('should shift every node by k steps towards right, shifts few tail nodes towards the start and change head of the list', () => {
    // Case 0: when head is null
    let headNode = rotateListRight(null, 0)
    expect(headNode).toEqual(null)

    // Creating list
    headNode = new Node(10)
    headNode.next = new Node(20)
    headNode.next.next = new Node(30)
    headNode.next.next.next = new Node(40)
    headNode.next.next.next.next = new Node(50)

    // Case 1: when k = 0 => List should be unaffected
    headNode = rotateListRight(headNode, 0)
    expect([headNode.data, headNode.next.data, headNode.next.next.data, headNode.next.next.next.data, headNode.next.next.next.next.data]).toEqual([10, 20, 30, 40, 50])

    // Case 2: Rotate right by 2 steps
    headNode = rotateListRight(headNode, 2)
    expect([headNode.data, headNode.next.data, headNode.next.next.data, headNode.next.next.next.data, headNode.next.next.next.next.data]).toEqual([40, 50, 10, 20, 30])

    // Case 3: Rotate right by 12 steps
    headNode = rotateListRight(headNode, 12)
    expect([headNode.data, headNode.next.data, headNode.next.next.data, headNode.next.next.next.data, headNode.next.next.next.next.data]).toEqual([20, 30, 40, 50, 10])

    // Case 4: when k = length of the list = 5 => List should be unaffected
    headNode = rotateListRight(headNode, 5)
    expect([headNode.data, headNode.next.data, headNode.next.next.data, headNode.next.next.next.data, headNode.next.next.next.next.data]).toEqual([20, 30, 40, 50, 10])
  })
})
