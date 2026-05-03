🌳 Breadth-First Traversal (BFT) in JavaScript
🚀 Overview

Breadth-First Traversal visits nodes level by level from top to bottom using a queue (FIFO).

🧠 Intuition
Start at the root
Visit all nodes at current level
Move to next level

👉 Example:

        1
       / \
      2   3
     / \   \
    4   5   6

BFT Output:

1 → 2 → 3 → 4 → 5 → 6
💻 Implementation in JavaScript
function bft(root) {
  if (!root) return;

  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
🧪 Example Tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Create tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

// Run
bft(root);
⚡ Optimized Version (Avoid shift)
function bftOptimized(root) {
  if (!root) return;

  let queue = [root];
  let i = 0;

  while (i < queue.length) {
    let node = queue[i++];
    console.log(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
⏱ Complexity
Time: O(n)
Space: O(n)
🎯 When to Use BFT
Level order traversal
Finding shortest path in trees
Problems like:
Binary Tree Level Order Traversal
Minimum depth of tree
Right/Left view of tree
