/*
 * Author: Surendra Kumar
 * DFS Algorithm implementation in JavaScript
 * DFS Algorithm for traversing or searching graph data structures.
 */

/**
 * Traverses a given tree using Depth-First Search (DFS) algorithm from the specified root's value.
 * @param {Array} tree The tree data structure represented as an array of nodes.
 * @param {number} rootValue The value of the root node from which traversal starts.
 * @returns {Array} An array containing the values of nodes traversed in DFS order.
 */
function traverseDFS(tree, rootValue) {
  const stack = []
  const res = []
  stack.push(searchDFS(tree, rootValue))
  // if root is not present in the tree, returning empty array
  if (!stack[0]) return res
  while (stack.length) {
    const curr = stack.pop()
    res.push(curr.value)
    if (curr.left) {
      stack.push(tree[curr.left])
    }
    if (curr.right) {
      stack.push(tree[curr.right])
    }
  }
  return res.reverse()
}
/**
 * Searches for a node with the specified value in the given tree using Depth-First Search (DFS) algorithm.
 * @param {Array} tree The tree data structure represented as an array of nodes.
 * @param {number} value The value to search for in the tree nodes.
 * @returns {Object|null} The node object if found, or null if the value is not found in the tree.
 */
function searchDFS(tree, value) {
  const stack = []
  stack.push(tree[0])
  while (stack.length !== 0) {
    for (let i = 0; i < stack.length; i++) {
      const node = stack.pop()
      if (node.value === value) {
        return node
      }
      if (node.right) {
        stack.push(tree[node.right])
      }
      if (node.left) {
        stack.push(tree[node.left])
      }
    }
  }
  return null
}

export { searchDFS, traverseDFS }
