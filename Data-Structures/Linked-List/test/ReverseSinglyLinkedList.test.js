import { ReverseSinglyLinkedList } from '../ReverseSinglyLinkedList'
import { Node } from '../SinglyLinkedList'
describe('ReverseSinglyLinkedList', () => {
  it('Reverse a Number Represented as Linked List', () => {
    const headNode = new Node(3)
    headNode.next = new Node(4)
    headNode.next.next = new Node(1)
    const expected = new Node(1)
    expected.next = new Node(4)
    expected.next.next = new Node(3)
    const reverseSinglyLinkedList = new ReverseSinglyLinkedList()
    expect(reverseSinglyLinkedList.solution(headNode)).toEqual(expected)
  })
})
