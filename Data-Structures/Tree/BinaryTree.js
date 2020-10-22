/**  Binary Tree!!
 *
 * A binary tree is a data structure in which an element
 * has two successors(children). It is a non-linear data
 * structure which is used to store heirarchical information.
 * bigger.
 */

/**  Class Node
 * Class that will contain data values of any node.
 * this.data = The data value
 * this.left = Node children to left side.
 * this.right = Node children to right side.
 */
class Node { 
    constructor(data) { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 

/**
 * 2 Global Variables.
 * Will be used in building the binary tree.
 * 
 * arr: an array containing the preorder traversal of tree to be build. 
 * -1 will represent null.
 * 
 * i: to iterate over elements of array.
 * 
 */
i = 0 ;
let arr ;

/**
 * Utility function buildTree() to build the binary tree.
 * It will iterate over the array through RECURSION and assign values 
 * to nodes recurively. If at any point arr[i] is -1 then that node 
 * will be marked as null.
 * Function will return a node, the root node of tree it builded.
 */
function buildTree() {
    /**  Base Case
     * If i exceeds the length of continer then every requested node will be null. 
    */
    if (i>=arr.length) {
        return null;
    }
    /** 
     * If arr[i] is -1. It means a null is supposed reside there in the tree.
    */
    if (arr[i]==-1) {
        ++i ;
        return null;
    }
    
    const root = new Node(arr[i]); // Create a new node with current arr[i].
    ++i; // Increment i indicating one value from arrray has been used.
    root.left = buildTree() ; // Recursively build left tree. 
    root.right = buildTree() ; // Recursively build right tree.
    
    // Left is builded first because preorder traversal is provided in array.
    
    return root ; // Return the root node of the tree which is just built.

}

/** function preorder
 * Recursive function to print the preorder traversal of given binary 
 * tree. root is the root node of binary tree provided.
 * */ 
function preOrder( root ) {
  
    // Preorder - SLR Order - Self->Left->Right

    console.log(root.data) ; // Self
    if ( root.left !== null )
        preOrder(root.left); // Left
    if ( root.right !== null )
        preOrder(root.right); // Right
  
}
function postOrder( root ) {
  
    // Postorder - LRS Order - Left->Right->Self

    if ( root.left !== null )
        postOrder(root.left); // Left
    if ( root.right !== null )
        postOrder(root.right); // Right
    console.log(root.data) ; // Self
  
}
function inOrder( root ) {
  
    // Inorder - LSR Order - Left->Self->Right

    if ( root.left !== null )
        preOrder(root.left); // Left
    console.log(root.data) ;  // Self
    if ( root.right !== null )
        preOrder(root.right); // Right
  
}

// Driver Program

i = 0; // Global variable i(helper for buildtree) set to 0.
arr = [1,2,-1,-1,3,-1,4,-1,-1]; // Sample preorder traversal of a binary tree.
let root = buildTree() ;

console.log('Preorder traversal of given binary tree:');
preOrder(root);
console.log('Postorder traversal of given binary tree:');
postOrder(root);
console.log('Inorder traversal of given binary tree:');
inOrder(root);
