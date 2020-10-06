// https://en.wikipedia.org/wiki/Cycle_detection

/**
 * Finds the middle of a LinkedList
 * @param {LinkedList} head
 * @returns {LinkedList}
 */
function middleOfLinkedList (head) {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

/**
 * Reverse the Linked list in place
 * @param {LinkedList} current
 * @returns {LinkedList}
 */
const reverseLinkedList = (current) => {
  let prev = null
  let next = null

  while (current !== null) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}

/**
 * Does a palindrome check between two nodes in a linkedList
 * @param {LinkedList} first
 * @param {LinkedList} second
 * @returns {LinkedList}
 */
const compare = (first, second) => {
  // Keep copy to reverse in place at the end
  const copySecond = second

  // Compare the palindrome
  while (first !== null && second !== null && first.element === second.element) {
    first = first.next
    second = second.next
  }

  // Revert the reverse in place of the second half
  reverseLinkedList(copySecond)

  return second
}

/**
 * Determines if a LinkedList is a palindrome
 * @param {LinkedList} head
 * @returns {Boolean}
 */
function isLinkedListPalindrome (head) {
  if (head === null || head.next === null) return true

  const middle = middleOfLinkedList(head)
  const secondHalfReversed = reverseLinkedList(middle)
  const secondHalf = compare(head, secondHalfReversed)

  return (head === null || secondHalf === null)
}

const LinkedList = require('../Data-Structures/Linked-List/SinglyLinkList')
const linkedList = new LinkedList()
  .add(1)
  .add(2)
  .add(3)
  .add(2)
  .add(1)
const { head } = linkedList

console.log('Is palindrome', isLinkedListPalindrome(head)) // true

linkedList.add(1)
console.log('Is palindrome', isLinkedListPalindrome(head)) // false
