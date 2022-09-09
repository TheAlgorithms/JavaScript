/**
 * A LinkedList based solution for finding middle node of linked list.
 * https://afteracademy.com/blog/middle-of-the-linked-list
 */
class MiddleOfLL {
  solution (head) {
  /*
    Problem Statement:
    Given the head of a singly linked list, return the middle node of the linked list.
    If there are two middle nodes, return the second middle node.

    Link for the Problem: https://leetcode.com/problems/middle-of-the-linked-list/
    */
    let fast = head
    let slow = head

    if (head.next == null) { return head }

    while (fast != null && fast.next != null) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  }
}

export { MiddleOfLL }
