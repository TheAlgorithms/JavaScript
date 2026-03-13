import { describe, it, expect } from 'vitest'
import { Node, morrisTraversal } from './MorrisTraversal.js'

describe('Morris Inorder Traversal', () => {
  it('should return inorder traversal for a binary tree', () => {
    // Tree:
    //      4
    //     / \
    //    2   5
    //   / \
    //  1   3
    const root = new Node(4)
    root.left = new Node(2)
    root.right = new Node(5)
    root.left.left = new Node(1)
    root.left.right = new Node(3)

    const result = morrisTraversal(root)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should return empty array for null input', () => {
    const result = morrisTraversal(null)
    expect(result).toEqual([])
  })

  it('should handle larger tree', () => {
    // Tree:
    //      7
    //     / \
    //    5   8
    //   / \
    //  3   6
    //       \
    //        9
    const root = new Node(7)
    root.left = new Node(5)
    root.right = new Node(8)
    root.left.left = new Node(3)
    root.left.right = new Node(6)
    root.left.right.right = new Node(9)

    const result = morrisTraversal(root)
    expect(result).toEqual([3, 5, 6, 9, 7, 8])
  })
})
