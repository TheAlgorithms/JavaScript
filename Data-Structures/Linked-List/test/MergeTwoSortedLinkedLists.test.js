import { expect } from 'vitest'
import { mergeLinkedLists } from '../MergeTwoSortedLinkedLists.js'
import { LinkedList } from '../SinglyLinkedList.js'

describe('MergeTwoSortedLinkedLists', () => {
  it('Merges two sorted linked lists', () => {
    const list1 = new LinkedList([1, 2, 4])

    const list2 = new LinkedList([1, 3, 4])

    const expectedResult = new LinkedList([1, 1, 2, 3, 4, 4])

    const result = mergeLinkedLists(list1, list2)

    expect(result).toEqual(expectedResult)
  })

  it('Merges two empty linked lists', () => {
    const list1 = new LinkedList()
    const list2 = new LinkedList()

    const expectedResult = new LinkedList()

    const result = mergeLinkedLists(list1, list2)

    expect(result).toEqual(expectedResult)
  })

  it('Merges one empty linked list with a non-empty one', () => {
    const list1 = new LinkedList()
    const list2 = new LinkedList([1])

    const expectedResult = new LinkedList([1])

    const result = mergeLinkedLists(list1, list2)

    expect(result).toEqual(expectedResult)
  })
})
