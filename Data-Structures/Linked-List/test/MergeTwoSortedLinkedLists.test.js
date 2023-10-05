import { MergeTwoSortedLinkedLists } from '../MergeTwoSortedLinkedLists.js'
import { Node } from '../SinglyLinkedList.js'

describe('MergeTwoSortedLinkedLists', () => {
  it('Merges two sorted linked lists', () => {
    const list1 = new Node(1)
    list1.next = new Node(2)
    list1.next.next = new Node(4)

    const list2 = new Node(1)
    list2.next = new Node(3)
    list2.next.next = new Node(4)

    const expectedResult = new Node(1)
    expectedResult.next = new Node(1)
    expectedResult.next.next = new Node(2)
    expectedResult.next.next.next = new Node(3)
    expectedResult.next.next.next.next = new Node(4)
    expectedResult.next.next.next.next.next = new Node(4)

    const merger = new MergeTwoSortedLinkedLists()
    const result = merger.mergeLists(list1, list2)

    expect(merger.linkedListToArray(result)).toEqual(
      merger.linkedListToArray(expectedResult)
    )
  })

  it('Merges two empty linked lists', () => {
    const list1 = null
    const list2 = null

    const expectedResult = null

    const merger = new MergeTwoSortedLinkedLists()
    const result = merger.mergeLists(list1, list2)

    expect(result).toEqual(expectedResult)
  })

  it('Merges one empty linked list with a non-empty one', () => {
    const list1 = null
    const list2 = new Node(0)

    const expectedResult = new Node(0)

    const merger = new MergeTwoSortedLinkedLists()
    const result = merger.mergeLists(list1, list2)

    expect(merger.linkedListToArray(result)).toEqual(
      merger.linkedListToArray(expectedResult)
    )
  })
})
