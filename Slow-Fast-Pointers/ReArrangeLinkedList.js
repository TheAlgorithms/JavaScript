// https://en.wikipedia.org/wiki/Cycle_detection

/**
 * Finds the middle of a LinkedList
 * @param {LinkedList} head
 * @returns {LinkedList}
 */
const middleOfLinkedList = (head) => {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}

/**
 * Reverse the Linked list in place
 * @param {LinkedList} current
 * @returns {LinkedList}
 */
const reverseLinkedList = (current) => {
  let prev = null
  let next = null

  while (current !== null) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}

/**
 * Merges the two LinkedList by alternating between the two
 * @param {LinkedList} first
 * @param {LinkedList} second
 * @returns {LinkedList}
 */
const merge = (first, second) => {
  while (first !== null && second !== null) {
    let next = first.next
    first.next = second
    first = next

    next = second.next
    second.next = first
    second = next
  }

  if (first !== null) first.next = null
}

/**
 * Rearranges the LinkedList in place by reversing the second half and merging the list back by alternating the values
 * @param {LinkedList} head
 */
const reArrange = function (head) {
  const middle = middleOfLinkedList(head)
  const secondHalfReversed = reverseLinkedList(middle)

  merge(head, secondHalfReversed)
}

const LinkedList = require('../Data-Structures/Linked-List/SinglyLinkList')
const linkedList = new LinkedList()
  .add(1)
  .add(2)
  .add(3)
  .add(4)
  .add(5)
  .add(6)
const { head } = linkedList

linkedList.print() // 1->2->3->4->5->6
reArrange(head)
linkedList.print() // 1->6->2->5->3->4
