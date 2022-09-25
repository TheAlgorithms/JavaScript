import { BinaryTree, Node } from '../BreadthFirstTreeTraversal'

describe('Breadth First Tree Traversal', () => {
  const binaryTree = new BinaryTree()

  const root = new Node(7)
  root.left = new Node(5)
  root.right = new Node(8)
  root.left.left = new Node(3)
  root.left.right = new Node(6)
  root.left.right.right = new Node(9)
  binaryTree.root = root

  // Visualization :
  //
  //            7
  //           / \
  //          5   8
  //         / \
  //        3   6
  //             \
  //              9

  it('Binary tree - Empty case', () => {
    const emptyTree = new BinaryTree()
    expect(emptyTree.breadthFirstIterative()).toStrictEqual([])
  })

  it('Binary tree - Level order recursive traversal', () => {
    const traversal = binaryTree.breadthFirstRecursive()
    expect(traversal).toStrictEqual([7, 5, 8, 3, 6, 9])
  })

  it('Binary tree - Level order iterative traversal', () => {
    const traversal = binaryTree.breadthFirstIterative()
    expect(traversal).toStrictEqual([7, 5, 8, 3, 6, 9])
  })
})
