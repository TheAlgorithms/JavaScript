/**
Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const isSymmetric = function (root) {
  function resolve(n1, n2) {
    if (!n1 && !n2) return true
    if (n1?.val !== n2?.val) return false
  
    return resolve(n1.left, n2.right) && resolve(n1.right, n2.left)
  }
  
  return resolve(root?.left, root?.right)
}

export { isSymmetric }
