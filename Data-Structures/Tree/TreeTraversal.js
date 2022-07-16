
// O(n) Time and O(n) Space Complexity

function inOrderTraverse (tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array)
    array.push(tree.value)
    inOrderTraverse(tree.right, array)
  }
  return array
}
function preOrderTraverse (tree, array) {
  if (tree !== null) {
    array.push(tree.value)
    preOrderTraverse(tree.left, array)
    preOrderTraverse(tree.right, array)
  }
}

function postOrderTraverse (tree, array) {
  if (tree !== null) {
    postOrderTraverse(tree.left, array)
    postOrderTraverse(tree.right, array)
    array.push(tree.value)
  }
}

export { preOrderTraverse }
export { inOrderTraverse }
export { postOrderTraverse }
