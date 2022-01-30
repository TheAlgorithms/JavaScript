class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
 
class SplayTree {
    constructor() {
        this.root = null;
    }

    // Searches for a node in the tree and returns the root
    search(data) {
        if (this.root === null)
            return null;
        // If the root is not null, splay the tree and the data will
        // become the new root (if present)
        this.splay(data);
        return this.root;
    }

    // Inserts a node into the tree and reassigns the root
    insert(data) {
        let node = this.root;
        if (node === null) {
          this.root = new Node(data);
          return;
        } 
        else {
            while(true){
                if(data === node.data){
                    return;
                }
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        this.splay(data);
                        return;
                    }
                    node = node.left;
                    continue;
                }
                if(data > node.data){
                    if (node.right === null){
                        node.right = new Node(data);
                        this.splay(data);
                        return;
                    }
                    node = node.right;
                    continue;
                }
            }
        }
    }

    // Deletes the node with specified value (if it exists) and reassigns root of the tree 
    delete(data) {
        let temp;
        if (this.root === null)
            return;

        // Splay the tree so the node with the specified value becomes the new root
        this.splay(data);

        if (data != this.root.data) {
            // The value is not in the tree
            return;
        }

        if (this.root.left === null) {
            // If there is no L subtree, the local root of R subtree becomes new root.
            this.root = this.root.right;
        }
        else {
            // local root of L subtree becomes new root
            temp = this.root.right;
            this.root = this.root.left;
            this.splay(data);
            this.root.right = temp;
        }
    }

    rightRotate(oldRoot) {
        let newRoot = oldRoot.left;
        let newLeft = newRoot.right;
    
        // Perform rotation
        newRoot.right = oldRoot;
        oldRoot.left = newLeft;
        return newRoot;
    }
    
    leftRotate(oldRoot) {
        let newRoot = oldRoot.right;
        let newRight = newRoot.left;
    
        // Perform rotation
        newRoot.left = oldRoot;
        oldRoot.right = newRight;
        return newRoot;
    }

    // Rotates the tree to bring the node with specified value to the top and reassigns the root
    splay(data) {
        const helper = function (data, root) {
            // If there is no root, there is nothing to splay
            if (root === null){
                return null;
            }
            // If the value of data falls in L subtree
            if (data < root.data) {
                if (root.left === null){
                    // The value is not in the tree
                    return root;
                }
                // If LL imbalance, use Zig-Zig
                if (data < root.left.data) {
                    root.left.left = helper(data, root.left.left);
                    root = this.rightRotate(root);
                }
                // If LR imbalance, use Zig-Zag
                else if (data > root.left.data) {
                    root.left.right = helper(data, root.left.right);
                    if (root.left.right !== null)
                        root.left = this.leftRotate(root.left);
                }
                if (root.left === null)
                    return root;
                else
                    return this.rightRotate(root);
            }
            // Otherwise, if value of data falls in R subtree
            else if (data > root.data) {
                if (root.right === null){
                    // the value is not in the tree
                    return root;
                }
                // If RR imbalance, use Zig-Zig   
                if (data > root.right.data) {
                    root.right.right = helper(data, root.right.right);
                    root = this.leftRotate(root);
                }
                // If RL imbalance, use Zig-Zag (i.e. right left)
                else if (data < root.right.data) {
                    root.right.left = helper(data, root.right.left);
                    if (root.right.left !== null)
                        root.right = this.rightRotate(root.right);
                }
                if (root.right === null)
                    return root;
                else
                    return this.leftRotate(root);

            } 
            // Otherwise, the value of the data is equal to the value of the root node. 
            // Since the value is already at the root, there is nothing to splay.
            else {
                return root;
            }
        }.bind(this);


        // Call the helper function
        this.root = helper(data, this.root);
        return;
    }

    levelOrder() {
        let result = [];
        let Q = []; 
        if (this.root != null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                };
                if (node.right != null) {
                    Q.push(node.right);
                };
            };
            return result;
        } else {
            return null;
        };
    }  

    /*
    Next three functions print directly to console
    
    traversePreOrder() {
            if (this.root === null) {
                return;
            }
            else {
                function traversePreOrder(node){
                    console.log(node.data);
                    node.left && traversePreOrder(node.left);        
                    node.right && traversePreOrder(node.right);
                }
                traversePreOrder(this.root);
            };        
    }
    traverseInOrder() {
            if (this.root == null) {
              return;
            }
            else {
              function traverseInOrder(node) {       
                node.left && traverseInOrder(node.left);
                console.log(node.data);
                node.right && traverseInOrder(node.right);
              }
              traverseInOrder(this.root);
            };
    }
    traversePostOrder() {
            if (this.root == null) {
                return;
            }
            else {
                function traversePostOrder(node){
                    node.left && traversePostOrder(node.left);
                    node.right && traversePostOrder(node.right);
                    console.log(node.data);
                }
                traversePostOrder(this.root);
            };               
    }  
    */
}
  
/*
// Example

const st = new SplayTree();

st.insert(4);
st.insert(17);
st.insert(1);  
st.insert (5);
st.insert (3);
st.insert (11);
st.insert (9);
st.insert (23);
st.insert (2);
console.log(" first traversal  = " + st.levelOrder());

st.delete(5);
console.log('second traversal ' + st.levelOrder());

//       */
