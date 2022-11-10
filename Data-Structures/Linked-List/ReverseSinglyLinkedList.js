/** A LinkedList based solution to reverse a number
Problem Statement: Given a number such that each of its digit is stored in a singly linked list. Reverse the linked list and return the head of the linked list Link for the Problem: https://leetcode.com/problems/reverse-linked-list/ */
class ReverseSinglyLinkedList {
  solution (head) {
    let prev = null
    let next = null
    while (head) {
      next = head.next
      head.next = prev
      prev = head
      head = next
    }
    return prev
  };
}
export { ReverseSinglyLinkedList }
