/**
 * A LinkedList based solution for finding the starting node of the cycle in a list.
 * @returns the node where cycle begins in the linked list. If there is no cycle present, returns null.
 * @see https://en.wikipedia.org/wiki/Cycle_detection
 * @see https://leetcode.com/problems/linked-list-cycle-ii/
 */

function detectCycleNode(head) {
  
  let length = 0
  let fast = head
  let slow = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      // Calculate length of the cycle
      length = lengthCycle(slow)
      break
    }
  }

  if (length === 0) {
    // If there is no cycle, return null.
    return null
  }

  fast = slow = head
  // Move slow pointer ahead by 'length' (integer) of cycle times
  while (length > 0) {
    slow = slow.next
    length--
  }

  // Now move both pointers until they meet - this will be the start of cycle
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }

  // return the meeting node (fast/slow)
  return slow
}

function lengthCycle(head) {
  let fast = head
  let slow = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next

    // if found a cycle, calculate the length
    if (fast === slow) {
      let temp = slow
      let length = 0

      // Traverse until we reach initial cycle pointer again
      do {
        temp = temp.next
        length++
      } while (temp !== slow)

      return length
    }
  }

  return 0
}

export { detectCycleNode }