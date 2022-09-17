/**
 * A LinkedList based solution for Detecting a Cycle in a list.
 * https://en.wikipedia.org/wiki/Cycle_detection
 */

function detectCycle (head) {
  /*
  Problem Statement:
  Given head, the head of a linked list, determine if the linked list has a cycle in it.
  Link for the Problem: https://leetcode.com/problems/linked-list-cycle/
  */
  if (!head) { return false }

  let slow = head
  let fast = head.next
  while (fast && fast.next) {
    if (fast === slow) { return true }
    fast = fast.next.next
    slow = slow.next
  }
  return false
}

export { detectCycle }
