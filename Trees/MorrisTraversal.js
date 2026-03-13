// Morris Inorder Traversal
// Reference: https://www.geeksforgeeks.org/dsa/inorder-tree-traversal-without-recursion-and-without-stack/

/*
 * Author: Saad Arqam
 * Morris Inorder Traversal Algorithm implementation in JavaScript
 *
 * Morris Traversal is a tree traversal algorithm that allows
 * inorder traversal without using recursion or a stack.
 * It achieves O(1) extra space by temporarily modifying
 * the tree structure (creating and removing "threads").
 *
 * Reference:
 * https://en.wikipedia.org/wiki/Threaded_binary_tree#Morris_traversal
 */

// Node class
export class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// Morris Inorder Traversal function
export function morrisTraversal(node) {
  const result = []
  let curr = node

  while (curr !== null) {
    if (curr.left === null) {
      result.push(curr.val)
      curr = curr.right
    } else {
      let predecessor = curr.left
      while (predecessor.right !== null && predecessor.right !== curr) {
        predecessor = predecessor.right
      }
      if (predecessor.right === null) {
        predecessor.right = curr
        curr = curr.left
      } else {
        predecessor.right = null
        result.push(curr.val)
        curr = curr.right
      }
    }
  }

  return result
}

// Example Tree:
//     7
//    / \
//   5   8
//  / \
// 3   6
//      \
//       9
//
// Morris inorder traversal: [3, 5, 6, 9, 7, 8]
