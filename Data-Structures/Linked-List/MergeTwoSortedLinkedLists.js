import { Node } from './SinglyLinkedList.js'
/**
 * A LinkedList-based solution for merging two sorted linked lists into one sorted list.
 *
 * @param {Node} list1 - The head of the first sorted linked list.
 * @param {Node} list2 - The head of the second sorted linked list.
 * @returns {Node} - The head of the merged sorted linked list.
 *
 * @example
 * const list1 = new ListNode(1);
 * list1.next = new ListNode(2);
 * list1.next.next = new ListNode(4);
 *
 * const list2 = new ListNode(1);
 * list2.next = new ListNode(3);
 * list2.next.next = new ListNode(4);
 *
 * const result = mergeLists(list1, list2);
 * // Returns the head of a linked list representing 1 -> 1 -> 2 -> 3 -> 4 -> 4
 */

class MergeTwoSortedLinkedLists {
  mergeLists(list1, list2) {
    let dummy = new Node(-1)
    let current = dummy

    while (list1 && list2) {
      if (list1.val < list2.val) {
        current.next = list1
        list1 = list1.next
      } else {
        current.next = list2
        list2 = list2.next
      }
      current = current.next
    }

    // If one of the lists is not empty, append it to the result
    if (list1) {
      current.next = list1
    } else if (list2) {
      current.next = list2
    }

    return dummy.next
  }

  /**
   * Converts a linked list to an array.
   *
   * @param {Node} head - The head of the linked list.
   * @returns {number[]} - An array representing the linked list values.
   */
  linkedListToArray(head) {
    const resultArray = []
    while (head) {
      resultArray.push(head.val)
      head = head.next
    }
    return resultArray
  }
}

export { MergeTwoSortedLinkedLists }
