/**
 * A node for a binary tree.
 */
class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

import { diameterOfBinaryTree } from '../DiameterOfBinaryTree'

describe('Diameter of a Binary Tree', () => {
  it('should calculate the correct diameter for a standard tree', () => {
    //      1
    //     / \
    //    2   3
    //   / \
    //  4   5
    // Longest path is 4 -> 2 -> 1 -> 3 (length 3) or 5 -> 2 -> 1 -> 3 (length 3)
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)
    root.left.left = new TreeNode(4)
    root.left.right = new TreeNode(5)
    expect(diameterOfBinaryTree(root)).toBe(3)
  })

  it('should work for a skewed tree where diameter does not pass through root', () => {
    //      1
    //     /
    //    2
    //   / \
    //  3   4
    //     / \
    //    5   6
    //   /     \
    //  7       8
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.left.left = new TreeNode(3)
    root.left.right = new TreeNode(4)
    root.left.right.left = new TreeNode(5)
    root.left.right.right = new TreeNode(6)
    root.left.right.left.left = new TreeNode(7)
    root.left.right.right.right = new TreeNode(8)

    // CORRECTED: The longest path is 7 -> 5 -> 4 -> 6 -> 8, which has 4 edges.
    expect(diameterOfBinaryTree(root)).toBe(4)
  })

  it('should return 0 for a null or single-node tree', () => {
    expect(diameterOfBinaryTree(null)).toBe(0)
    const singleNode = new TreeNode(1)
    expect(diameterOfBinaryTree(singleNode)).toBe(0)
  })
})

