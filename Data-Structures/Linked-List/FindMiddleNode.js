/*
Problem Statement:
Given a non-empty singly linked list, find the middle node.
If there are two middle nodes, return the second middle node.

Link for the Problem: https://leetcode.com/problems/middle-of-the-linked-list/
*/

class FindMiddleNode {
  constructor() {
    this.head = null
  }

  // Method to find and return the middle node of the linked list
  findMiddle(head) {
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
      slow = slow.next // Move slow by 1 step
      fast = fast.next.next // Move fast by 2 steps
    }

    return slow // Slow will be at the middle node
  }

  // Convert list to array for easy checking in test cases
  solutionToArray(node) {
    const list = []
    let currentNode = node
    while (currentNode) {
      list.push(currentNode.data)
      currentNode = currentNode.next
    }

    return list
  }
}

export { FindMiddleNode }
