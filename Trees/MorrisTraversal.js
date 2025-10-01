/**
 * Morris Traversal (Inorder Traversal without recursion or stack)
 * Wikipedia: https://en.wikipedia.org/wiki/Threaded_binary_tree#Morris_traversal
 *
 * WHAT IS MORRIS TRAVERSAL?
 * Morris Traversal is a clever technique to traverse a binary tree in inorder 
 * (Left → Root → Right) using O(1) extra space - meaning it doesn't need recursion 
 * or an explicit stack like traditional methods.
 *
 * HOW DOES IT WORK?
 * The algorithm temporarily modifies the tree by creating "threads" (temporary links)
 * that help us navigate back to parent nodes without using extra memory.
 * Think of it like leaving breadcrumbs to find your way back!
 *
 * KEY CONCEPT - INORDER PREDECESSOR:
 * For any node, its inorder predecessor is the rightmost node in its left subtree.
 * This is the node that comes just before it in inorder traversal.
 *
 * ALGORITHM STEPS:
 * 1. Start at root, move current pointer through the tree
 * 2. If current node has no left child: visit it, move right
 * 3. If current node has left child:
 *    a. Find the inorder predecessor (rightmost in left subtree)
 *    b. If predecessor's right is null: create thread, go left
 *    c. If predecessor's right points to current: remove thread, visit current, go right
 *
 * Example Tree:
 *         7
 *        / \
 *       5   8
 *      / \
 *     3   6
 *          \
 *           9
 * 
 * Traversal order: 3 → 5 → 6 → 9 → 7 → 8
 *
 * TIME COMPLEXITY: O(n) - each edge is traversed at most twice
 * SPACE COMPLEXITY: O(1) - no extra space except for result array
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function morrisTraversal(root) {
  const result = [];  // Array to store the inorder traversal result
  let curr = root;    // Current node we're processing
  
  // Continue until we've processed all nodes
  while (curr) {
    
    // CASE 1: Current node has no left child
    // This means we can safely visit this node (no left subtree to process first)
    if (!curr.left) {
      result.push(curr.val);  // Visit the current node
      curr = curr.right;      // Move to right subtree
    } 
    
    // CASE 2: Current node has a left child
    // We need to find a way to come back to this node after processing left subtree
    else {
      
      // STEP 1: Find the inorder predecessor of current node
      // (Rightmost node in the left subtree)
      let pred = curr.left;
      
      // Keep going right until we find the rightmost node
      // BUT stop if we find a node that already points back to curr (existing thread)
      while (pred.right && pred.right !== curr) {
        pred = pred.right;
      }
      
      // STEP 2a: If predecessor's right is null, we need to create a thread
      // This thread will help us return to current node later
      if (!pred.right) {
        // Create the thread: make predecessor point to current node
        pred.right = curr;
        
        // Now go left to process the left subtree first
        curr = curr.left;
      } 
      
      // STEP 2b: If predecessor's right already points to current node
      // This means we've already processed the left subtree and are back via the thread
      else {
        // Remove the thread (restore original tree structure)
        pred.right = null;
        
        // Now we can safely visit the current node
        result.push(curr.val);
        
        // Move to right subtree
        curr = curr.right;
      }
    }
  }
  
  return result;
}

module.exports = { TreeNode, morrisTraversal };