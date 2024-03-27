/**
 * Represents a node in a binary tree.
 */
class Node {
  /**
   * Creates a new node with the specified data.
   * @param {*} data The data to be stored in the node.
   */
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

/**
 * Represents a binary tree data structure.
 */
class BinaryTree {
  /**
   * Creates a new binary tree with an empty root.
   */
  constructor() {
    this.root = null
  }

  /**
   * Performs breadth-first traversal of the binary tree iteratively.
   * @returns {Array} An array containing the data of nodes visited in breadth-first order.
   */
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

  /**
   * Performs breadth-first traversal of the binary tree recursively.
   * @returns {Array} An array containing the data of nodes visited in breadth-first order.
   */
  breadthFirstRecursive() {
    const traversal = []
    const h = this.getHeight(this.root)
    for (let i = 0; i !== h; i++) {
      this.traverseLevel(this.root, i, traversal)
    }
    return traversal
  }

  /**
   * Computes the height of the tree starting from the specified node.
   * @param {Node} node The node from which to compute the height.
   * @returns {number} The height of the tree.
   */
  getHeight(node) {
    if (node === null) {
      return 0
    }
    const lheight = this.getHeight(node.left)
    const rheight = this.getHeight(node.right)
    return lheight > rheight ? lheight + 1 : rheight + 1
  }

  /**
   * Traverses the specified level of the tree and adds nodes' data to the traversal array.
   * @param {Node} node The current node being traversed.
   * @param {number} levelRemaining The remaining level to traverse.
   * @param {Array} traversal The array to store the traversal result.
   */
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
