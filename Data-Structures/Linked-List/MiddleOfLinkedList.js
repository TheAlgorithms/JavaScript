/**
 * A LinkedList based solution for Detect a Cycle in a list
 * https://afteracademy.com/blog/middle-of-the-linked-list
 */

function main () {
  /*
    Problem Statement:
    Given the head of a singly linked list, return the middle node of the linked list.
    If there are two middle nodes, return the second middle node.

    Note:
    * While Solving the problem in given link below, don't use main() function.
    * Just use only the code inside main() function.
    * The purpose of using main() function here is to avoid global variables.

    Link for the Problem: https://leetcode.com/problems/middle-of-the-linked-list/
    */
  const head = '' // Reference to head is given in the problem. So please ignore this line
  let fast = head
  let slow = head

  if (head.next == null) { return head }

  while (fast != null && fast.next != null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

main()
