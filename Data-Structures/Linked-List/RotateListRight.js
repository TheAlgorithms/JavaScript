/**
 * A LinkedList based solution for Rotating a List to the right by k places
 */

function main () {
  /*
  Problem Statement:
  Given a linked list, rotate the list to the right by k places, where k is non-negative.

  Note:
  * While Solving the problem in given link below, don't use main() function.
  * Just use only the code inside main() function.
  * The purpose of using main() function here is to aviod global variables.

  Link for the Problem: https://leetcode.com/problems/rotate-list/
  */
  // Reference to both head and k is given in the problem. So please ignore below two lines
  let head = ''
  let k = ''
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

main()
