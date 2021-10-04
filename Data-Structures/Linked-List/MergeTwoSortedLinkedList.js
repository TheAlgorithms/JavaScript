// Problem source & explanation: https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const mergeTwoLists = (l1, l2) => {
  let node = l1
  if (!l1) return l2
  if (!l2) return l1
  if (!l1 || !l2) return null
  while (node.next) {
    node = node.next
  }
  node.next = l2
  node = l1
  while (node) {
    let curr = node
    while (curr) {
      if (node.val > curr.val) {
        ;[curr.val, node.val] = [node.val, curr.val]
      }
      curr = curr.next
    }
    node = node.next
  }
  return l1
}

// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
// console.log(mergeTwoLists([], [0]))
// console.log(mergeTwoLists([], []))

export { mergeTwoLists }
