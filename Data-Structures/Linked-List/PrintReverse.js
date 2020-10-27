/**
 * A LinkedList based solution for Printing a List in reverse
 */

function main () {
  /*
  Problem Statement:
  Given a linked list, print the nodes in reverse order.

  Link for the Problem: https://leetcode.com/problems/reverse-linked-list/
  */

  let head = ''
  reverseList(head)
}

reverseList = function (headNode) {
  let currentNode = headNode
  if (currentNode != null) {
    reverseList(currentNode.next)
    console.log(currentNode)
  }
}

main()
