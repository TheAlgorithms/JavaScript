import { BinaryTree, Node } from '../BreadthFirstTreeTraversal'

describe('Breadth First Tree Traversal', () => {
  const binaryTree = new BinaryTree()

  const root = new Node(7)
  root.left = new Node(5)
  root.right = new Node(8)
  root.left.left = new Node(3)
  root.left.right = new Node(6)
  root.right.right = new Node(9)
  binaryTree.root = root

  // Visualization :
  //
  //            7
  //           / \
  //          5   8
  //         / \   \
  //        3   6   9

  it('Binary tree - Level order traversal', () => {
    expect(binaryTree.traversal).toStrictEqual([])
    const traversal = binaryTree.breadthFirst()
    expect(traversal).toStrictEqual([7, 5, 8, 3, 6, 9])
  })
})
