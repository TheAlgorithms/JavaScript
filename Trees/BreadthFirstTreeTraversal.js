/*
  Breadth First Tree Traversal or level order traversal implementation in javascript
  Author: @GerardUbuntu
*/

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  breadthFirstIterative() {
    const traversal = []
    if (this.root) {
      traversal.push(this.root)
    }
    for (let i = 0; i < traversal.length; i++) {
      const currentNode = traversal[i]
      if (currentNode.left) {
        traversal.push(currentNode.left)
      }
      if (currentNode.right) {
        traversal.push(currentNode.right)
      }
      traversal[i] = currentNode.data
    }
    return traversal
  }

  breadthFirstRecursive() {
    const traversal = []
    const h = this.getHeight(this.root)
    for (let i = 0; i !== h; i++) {
      this.traverseLevel(this.root, i, traversal)
    }
    return traversal
  }

  // Computing the height of the tree
  getHeight(node) {
    if (node === null) {
      return 0
    }
    const lheight = this.getHeight(node.left)
    const rheight = this.getHeight(node.right)
    return lheight > rheight ? lheight + 1 : rheight + 1
  }

  traverseLevel(node, levelRemaining, traversal) {
    if (node === null) {
      return
    }
    if (levelRemaining === 0) {
      traversal.push(node.data)
    } else {
      this.traverseLevel(node.left, levelRemaining - 1, traversal)
      this.traverseLevel(node.right, levelRemaining - 1, traversal)
    }
  }
}

export { BinaryTree, Node }
