import { LinkedList } from './SinglyLinkedList.js'
/**
 * A LinkedList-based solution for merging two sorted linked lists into one sorted list.
 *
 * @param {LinkedList} list1 - The the first sorted linked list.
 * @param {LinkedList} list2 - The second sorted linked list.
 * @returns {LinkedList} - The merged sorted linked list.
 *
 * @example
 * const list1 = new LinkedList([1,2,4]);
 *
 * const list2 = new LinkedList([1,3,4]);
 *
 * const result = mergeLinkedLists(list1, list2);
 * // Returns the merged linked list representing 1 -> 1 -> 2 -> 3 -> 4 -> 4
 */

function mergeLinkedLists(list1, list2) {
  const mergedList = new LinkedList()

  let current1 = list1.headNode
  let current2 = list2.headNode

  while (current1 || current2) {
    if (!current1) {
      mergedList.addLast(current2.data)
      current2 = current2.next
    } else if (!current2) {
      mergedList.addLast(current1.data)
      current1 = current1.next
    } else {
      if (current1.data < current2.data) {
        mergedList.addLast(current1.data)
        current1 = current1.next
      } else {
        mergedList.addLast(current2.data)
        current2 = current2.next
      }
    }
  }

  return mergedList
}

export { mergeLinkedLists }
