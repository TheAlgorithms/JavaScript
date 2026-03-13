/**
 * Morris Traversal (Inorder)
 *
 * This algorithm performs an inorder traversal of a binary tree
 * without using recursion or a stack. Instead, it creates temporary
 * "threads" in the tree to traverse nodes in O(N) time and O(1) space.
 *
 * Time Complexity: O(N) (each edge visited at most twice)
 * Space Complexity: O(1)
 *
 * @param {TreeNode} root - Root node of the binary tree
 * @returns {number[]} - The inorder traversal as an array
 */

export class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

export function morrisTraversal(root) {
  const result = []
  let current = root

  while (current !== null) {
    if (current.left === null) {
      // Case 1: No left child → visit current node
      result.push(current.val)
      current = current.right
    } else {
      // Case 2: Find inorder predecessor
      let predecessor = current.left
      while (predecessor.right !== null && predecessor.right !== current) {
        predecessor = predecessor.right
      }

      if (predecessor.right === null) {
        // Create a temporary thread from predecessor to current
        predecessor.right = current
        current = current.left
      } else {
        // Thread already exists → remove it and visit current
        predecessor.right = null
        result.push(current.val)
        current = current.right
      }
    }
  }

  return result
}
