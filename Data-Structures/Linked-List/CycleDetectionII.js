/**
 * A LinkedList based solution for Detecting a start node of the Cycle in a list.
 * https://en.wikipedia.org/wiki/Cycle_detection
 */

function detectCycleNode(head) {
  /*
    Problem Statement:
    Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
    Link for the Problem: https://leetcode.com/problems/linked-list-cycle-ii/
  */

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
    // If length = 0, return null
    return null
  }

  //Point the nodes at head 
  fast = head
  slow = head
  // Move slow pointer ahead by 'length' of cycle times
  while (length > 0) {
    slow = slow.next
    length--
  }

  // Now move both pointers until they meet - this will be the start of cycle
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }

  // return the meeting node
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
