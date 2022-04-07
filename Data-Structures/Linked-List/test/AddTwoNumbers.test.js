import { AddTwoNumbers } from '../AddTwoNumbers.js'
import { LinkedList } from '../SinglyLinkedList'

describe('AddTwoNumbers', () => {
  it('Check Sum Of Two Linked List', () => {
    const list1 = new LinkedList()
    list1.addFirst(2)
    list1.addLast(4)
    list1.addLast(3)

    const list2 = new LinkedList()
    list2.addFirst(5)
    list2.addLast(6)
    list2.addLast(4)

    const expected = new LinkedList()
    expected.addFirst(7)
    expected.addLast(0)
    expected.addLast(8)

    const addTwoLinkedList = new AddTwoNumbers()
    addTwoLinkedList.solution(list1.headNode, list2.headNode)

    expect(addTwoLinkedList.solutionToArray()).toEqual(expected.get())
  })
})
