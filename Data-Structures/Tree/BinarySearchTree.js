/* Binary Search Tree!!
 *
 * Nodes that will go on the Binary Tree.
 * They consist of the data in them, the node to the left, the node
 * to the right, and the parent from which they came from.
 *
 * A binary tree is a data structure in which an element
 * has two successors(children). The left child is usually
 * smaller than the parent, and the right child is usually
 * bigger.
 */

// class Node
const Node = (function Node() {
  // Node in the tree
  class Node {
    constructor(val) {
      this.value = val
      this.left = null
      this.right = null
    }

    // Search the tree for a value
    search(val) {
      if (this.value === val) {
        return this
      } else if (val < this.value && this.left !== null) {
        return this.left.search(val)
      } else if (val > this.value && this.right !== null) {
        return this.right.search(val)
      }
      return null
    }

    // Visit a node
    visit(output = (value) => console.log(value)) {
      // Recursively go left
      if (this.left !== null) {
        this.left.visit(output)
      }
      // Print out value
      output(this.value)
      // Recursively go right
      if (this.right !== null) {
        this.right.visit(output)
      }
    }

    // Add a node
    addNode(n) {
      if (n.value < this.value) {
        if (this.left === null) {
          this.left = n
        } else {
          this.left.addNode(n)
        }
      } else if (n.value > this.value) {
        if (this.right === null) {
          this.right = n
        } else {
          this.right.addNode(n)
        }
      }
    }

    // remove a node
    removeNode(val) {
      if (val === this.value) {
        if (!this.left && !this.right) {
          return null
        } else {
          if (this.left) {
            const leftMax = maxVal(this.left)
            this.value = leftMax
            this.left = this.left.removeNode(leftMax)
          } else {
            const rightMin = minVal(this.right)
            this.value = rightMin
            this.right = this.right.removeNode(rightMin)
          }
        }
      } else if (val < this.value) {
        this.left = this.left && this.left.removeNode(val)
      } else if (val > this.value) {
        this.right = this.right && this.right.removeNode(val)
      }
      return this
    }
  }

  // find maximum value in the tree
  const maxVal = function (node) {
    if (!node.right) {
      return node.value
    }
    return maxVal(node.right)
  }

  // find minimum value in the tree
  const minVal = function (node) {
    if (!node.left) {
      return node.value
    }
    return minVal(node.left)
  }
  // returns the constructor
  return Node
})()

// class Tree
const Tree = (function () {
  class Tree {
    constructor() {
      // Just store the root
      this.root = null
    }

    // Inorder traversal
    traverse(output = (value) => console.log(value)) {
      if (!this.root) {
        // No nodes are there in the tree till now
        return
      }
      this.root.visit(output)
    }

    // Start by searching the root
    search(val) {
      if (this.root) {
        const found = this.root.search(val)
        if (found !== null) {
          return found.value
        }
      }

      // not found
      return null
    }

    // Add a new value to the tree
    addValue(val) {
      const n = new Node(val)
      if (this.root === null) {
        this.root = n
      } else {
        this.root.addNode(n)
      }
    }

    // remove a value from the tree
    removeValue(val) {
      // remove something if root exists
      this.root = this.root && this.root.removeNode(val)
    }
  }

  // returns the constructor
  return Tree
})()

export { Tree }
