// https://en.wikipedia.org/wiki/Cycle_detection

/**
 * Checks if there is a cycle in a LinkedList
 * @param {LinkedList} head
 * @returns {Boolean}
 */
function hasCycle (head) {
  let slow = head
  let fast = head
  let isCircular = false

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      isCircular = true
      break
    }
  }

  return isCircular
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

console.log('Has Cycle', hasCycle(head)) // false

linkedList.addNodeToTail(head)
console.log('Has Cycle', hasCycle(head)) // true
