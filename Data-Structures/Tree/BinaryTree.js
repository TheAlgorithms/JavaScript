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
var Node = (function () {
  // Node in the tree
  function Node (val) {
    this.value = val
    this.left = null
    this.right = null
  }

  // Search the tree for a value
  Node.prototype.search = function (val) {
    if (this == null ) {
      return null ;
    }
    if (this.value === val) {
      return this
    }
    // Search in left tree recursively
    var left = this.left.search(val);
    
    // If found in left return result of left
    if ( left!==null )
      return left;
    
    // Else return whatever the result is of search on right subtree.
    return this.right.search(val);
  }

  // Pre Order Traversal
  Node.prototype.preOrder = function () {

    // Print out value
    console.log(this.value);
    
    // Recursively go to left  
    this.left.preOrder();
    
    // Recursively go to right  
    this.right.preOrder();
  }

  // Post Order Traversal
  Node.prototype.postOrder = function () {
    
    // Recursively go to left  
    this.left.postOrder();
    
    // Recursively go to right  
    this.right.postOrder();
    
    // Print out value
    console.log(this.value);
  }

  // In Order Traversal
  Node.prototype.inOrder = function () {

    // Recursively go to left  
    this.left.inOrder();

    // Print out value
    console.log(this.value);
    
    // Recursively go to right  
    this.right.inOrder();
  }

  // returns the constructor
  return Node
}())

// class Tree
var Tree = (function () {
  function Tree ( input ) {
    // Just store the root
    this.root = null
    
  };

  // Preorder traversal
  Tree.prototype.preOrder = function () {
    this.root.preOrder();
  }
  // Postorder traversal
  Tree.prototype.postOrder = function () {
    this.root.postOrder();
  }
  // Inorder traversal
  Tree.prototype.inOrder = function () {
    this.root.inOrder();
  }

  // Searching for existence of a value.
  Tree.prototype.search = function (val) {
    const found = this.root.search(val)
    if (found === null) {
      console.log(val + ' not found')
    } else {
      console.log('Found:' + found.value)
    }
  }

  // returns the constructor
  return Tree
}())

// Implementation of BST
var bst = new Tree()
bst.addValue(6)
bst.addValue(3)
bst.addValue(9)
bst.addValue(2)
bst.addValue(8)
bst.addValue(4)
bst.traverse()
bst.search(8)
