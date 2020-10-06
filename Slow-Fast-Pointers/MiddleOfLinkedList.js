// https://en.wikipedia.org/wiki/Cycle_detection

/**
 * Finds the middle of a LinkedList
 * @param {LinkedList} head
 * @returns {LinkedList}
 */
function middleOfLinkedList (head) {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

const LinkedList = require('../Data-Structures/Linked-List/SinglyLinkList')
const linkedList = new LinkedList()
  .add(1)
  .add(2)
  .add(3)
  .add(4)
  .add(5)
const { head } = linkedList

console.log('Middle', middleOfLinkedList(head).element) // 3
