class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    getHeight(node) {
        return node ? node.height : 0;
    }

    getBalance(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    rightRotate(y) {
        let x = y.left;
        let T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        return x;
    }

    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        return y;
    }

    insert(node, data) {
        if (!node) return new Node(data);
        if (data < node.data) node.left = this.insert(node.left, data);
        else if (data > node.data) node.right = this.insert(node.right, data);
        else return node;

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        let balance = this.getBalance(node);

        if (balance > 1 && data < node.left.data) return this.rightRotate(node);
        if (balance < -1 && data > node.right.data) return this.leftRotate(node);
        if (balance > 1 && data > node.left.data) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }
        if (balance < -1 && data < node.right.data) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }
        return node;
    }

    preOrder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
}

// Example usage
let tree = new AVLTree();
let root = null;
root = tree.insert(root, 10);
root = tree.insert(root, 20);
root = tree.insert(root, 30);
root = tree.insert(root, 40);
root = tree.insert(root, 50);
root = tree.insert(root, 25);
console.log("Preorder traversal of the constructed AVL tree is:");
tree.preOrder(root);
