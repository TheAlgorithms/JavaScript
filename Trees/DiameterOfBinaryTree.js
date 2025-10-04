/**
 * Calculates the diameter of a binary tree.
 * The diameter is the length of the longest path between any two nodes.
 * This path does not necessarily need to pass through the root.
 * @param {TreeNode} root The root node of the tree.
 * @returns {number} The diameter of the tree.
 * @see {@link https://en.wikipedia.org/wiki/Tree_(graph_theory)#Properties}
 */
export function diameterOfBinaryTree(root) {
  let diameter = 0

  function height(node) {
    if (node === null) {
      return 0
    }

    const leftHeight = height(node.left)
    const rightHeight = height(node.right)

    diameter = Math.max(diameter, leftHeight + rightHeight)

    return 1 + Math.max(leftHeight, rightHeight)
  }

  height(root)
  return diameter
}
