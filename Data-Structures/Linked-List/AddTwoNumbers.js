/**
 * A LinkedList based solution for Add Two Numbers
 *
 */

class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class AddTwoNumbers {
  /*
  Problem Statement:
  Given two non-empty linked lists representing two non-negative integers. 
  The digits are stored in reverse order and each of their nodes contain a single digit. 
  Add the two numbers and return it as a linked list.

  Link for the Problem: https://leetcode.com/problems/add-two-numbers/
  */
  solution(firstList, secondList) {
    let dummyNode = new ListNode(0)
    let firstRunner = firstList
    let secondRunner = secondList
    let tail = dummyNode
    let carry = 0
    while (firstRunner != null || secondRunner != null) {
      let firstNumber = firstRunner ? firstRunner.data : 0
      let secondNumber = secondRunner ? secondRunner.data : 0
      let sum = carry + firstNumber + secondNumber
      carry = parseInt(sum / 10)
      tail.next = new ListNode(sum % 10)
      tail = tail.next
      if (firstRunner) {
        firstRunner = firstRunner.next
      }
      if (secondNumber) {
        secondNumber = secondNumber.next
      }
    }
    if (carry > 0) {
      tail.next = new ListNode(carry)
    }

    return dummyNode.next
  }
}

export { AddTwoNumbers }
