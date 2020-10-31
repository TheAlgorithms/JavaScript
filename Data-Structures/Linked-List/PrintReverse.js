/**
 * A LinkedList based solution for Printing a List in reverse
 *
 * Problem Statement:
 *        Given a linked list, print the nodes in reverse order
 *        Link for the Problem: https://leetcode.com/problems/reverse-linked-list/
 */

const reverseList = (headNode) => {
  const currentNode = headNode
  if (currentNode != null) {
    reverseList(currentNode.next)
    console.log(currentNode)
  }
}

export { reverseList }
