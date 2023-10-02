/** A LinkedList based solution to reverse a number
Problem Statement: Given the root of a binary tree, invert the tree, and return its root.
link to the problem: https://leetcode.com/problems/invert-binary-tree/
**/

function invertTree (root) {
  // Base case: If the root is falsy (null or undefined), return it as is
  if (!root) {
    return root
  }
  // Swap the left and right child nodes of the current root
  const temp = root.left
  root.left = root.right
  root.right = temp
  // Recursively invert the left and right subtrees
  invertTree(root.left)
  invertTree(root.right)
  // Return the modified root
  return root
}

export { invertTree }
