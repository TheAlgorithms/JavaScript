/*
  Problem: Given a linked list, return the node where cycle begins. If there is no cycle return null

  Approach used: Floyd Cycle Detection Algorithm

  What is Floyd Cycle Detection Algorithm?
  - Floyd Cyclce Detection algorithm uses two pointer (slow & fast), in which fast pointer move twice the speed of slow pointer.
  - It is also known as hare and tortoise algorithm as we can imagine slow pointer as tortoise that moves slow and hare as the fast one.
  - If the fast pointer reaches null, that means there was no cycle.
  - If the fast pointer and slow pointer becomes equal that means there was cycle.

  For reference: https://www.codingninjas.com/blog/2020/09/09/floyds-cycle-detection-algorithm/
*/

const detectCycleNode = (head) => {
  if (!head || !head.next) {
    return null
  }

  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) break
  }

  slow = head

  while (fast && slow !== fast) {
    slow = slow.next
    fast = fast.next
  }

  return fast
}

export { detectCycleNode }
