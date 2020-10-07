/*
  Breadth First Tree Traversal or level order traversal implementation in javascript
  Author: @GerardUbuntu
*/

class Node {
    constructor(data) {
        this.data =data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.traversal = [];
    }

    breadthFirst() {
        let h = this.getHeight(this.root);
        for (let i = 1; i <= h; i++) {
            this.traverseLevel(this.root,i);
        }
        return this.traversal.toLocaleString();
    }
    // Compputing the height of the tree
    getHeight(root) {
        if (root == null) {
            return 0;
        } else {
            let lheight = this.getHeight(root.left);
            let rheight = this.getHeight(root.right);
            return lheight > rheight ? lheight + 1 : rheight + 1;
        }
    }

    traverseLevel(node, level){
        if(node == null){
            return;
        }else if(level == 1){
            this.traversal.push(node.data);
        }else {
            this.traverseLevel(node.left, level-1);
            this.traverseLevel(node.right, level-1)
        }
    }
}

let binaryTree = new BinaryTree();
let root = new Node(7);
root.left = new Node(5);
root.right = new Node(8);
root.left.left = new Node(3);
root.left.right = new Node(6);
root.right.right = new Node(9);
binaryTree.root = root;

console.log(binaryTree.breadthFirst());

//            7
//           / \
//          5   8
//         / \   \
//        3   6   9
