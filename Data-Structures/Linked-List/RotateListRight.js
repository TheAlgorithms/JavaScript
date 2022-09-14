/**
 * A LinkedList based solution for Rotating a List to the right by k places
 */

function rotateListRight (head, k) {
  /*
  Problem Statement:
  Given a linked list, rotate the list to the right by k places, where k is non-negative.

  Link for the Problem: https://leetcode.com/problems/rotate-list/
  */
  let i = 0
  let current = head
  while (current) {
    i++
    current = current.next
  }
  k %= i
  current = head
  let prev = null
  while (k--) {
    if (!current || !current.next) {
      return current
    } else {
      while (current.next) {
        prev = current
        current = current.next
      }
      prev.next = current.next
      current.next = head
      head = current
    }
  }
  return head
}

export { rotateListRight }
