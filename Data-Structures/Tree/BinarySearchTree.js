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
const Node = (function Node () {
  // Node in the tree
  function Node (val) {
    this.value = val
    this.left = null
    this.right = null
  }

  // Search the tree for a value
  Node.prototype.search = function (val) {
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
  Node.prototype.visit = function (output = value => console.log(value)) {
    // Recursively go left
    if (this.left !== null) {
      this.left.visit()
    }
    // Print out value
    output(this.value)
    // Recursively go right
    if (this.right !== null) {
      this.right.visit()
    }
  }

  // Add a node
  Node.prototype.addNode = function (n) {
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
  Node.prototype.removeNode = function (val) {
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
}())

// class Tree
const Tree = (function () {
  function Tree () {
    // Just store the root
    this.root = null
  };

  // Inorder traversal
  Tree.prototype.traverse = function () {
    if (!this.root) {
      // No nodes are there in the tree till now
      return
    }
    this.root.visit()
  }

  // Start by searching the root
  Tree.prototype.search = function (val) {
    const found = this.root.search(val)
    if (found !== null) {
      return found.value
    }
    // not found
    return null
  }

  // Add a new value to the tree
  Tree.prototype.addValue = function (val) {
    const n = new Node(val)
    if (this.root === null) {
      this.root = n
    } else {
      this.root.addNode(n)
    }
  }

  // remove a value from the tree
  Tree.prototype.removeValue = function (val) {
    // remove something if root exists
    this.root = this.root && this.root.removeNode(val)
  }

  // returns the constructor
  return Tree
}())

export { Tree }
