/**
 * A LinkedList based solution for Detect a Cycle in a list
 * https://en.wikipedia.org/wiki/Cycle_detection
 */

function main () {
  /*
  Problem Statement:
  Given head, the head of a linked list, determine if the linked list has a cycle in it.

  Note:
  * While Solving the problem in given link below, don't use main() function.
  * Just use only the code inside main() function.
  * The purpose of using main() function here is to aviod global variables.

  Link for the Problem: https://leetcode.com/problems/linked-list-cycle/
  */
  const head = '' // Reference to head is given in the problem. So please ignore this line
  let fast = head
  let slow = head

  while (fast != null && fast.next != null && slow != null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
}

main()
