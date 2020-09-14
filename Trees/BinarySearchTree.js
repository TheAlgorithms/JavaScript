// Binary Search Tree for numbers
// Learn More : https://www.geeksforgeeks.org/binary-search-tree-data-structure/

class BST {
   constructor() { this.root = null; }

   add(data, node = this.root) {
      if (Array.isArray(data)) data.forEach(d => this.add(d))
      else if (this.root === null) this.root = BST.node(data);
      else if (node === null) return BST.node(data);
      else if (data === node.data) return;
      else if (data < node.data) node.left = this.add(data, node.left) || node.left;
      else node.right = this.add(data, node.right) || node.right;
   }

   static node(data) {
      return { data, left: null, right: null }
   }
}

const tree = new BST();

// you can add one value at a time
tree.add(8)
tree.add(3)
tree.add(10)

// or add an array of values
tree.add([1, 6, 14, 4, 7, 13])

// show tree in console
console.log(JSON.stringify(tree, null, 2))
