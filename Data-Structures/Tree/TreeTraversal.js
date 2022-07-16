/* eslint no-use-before-define: 0 */ // --> OFF
// O(n) Time and O(n) Space Complexity

inOrderTraverse=function (tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array)
    array.push(tree.value)
    inOrderTraverse(tree.right, array)
  }
  return array
}
preOrderTraverse =function (tree, array) {
  if (tree !== null) {
    array.push(tree.value)
    preOrderTraverse(tree.left, array)
    preOrderTraverse(tree.right, array)
  }
}

postOrderTraverse =function(tree, array) {
  if (tree !== null) {
    postOrderTraverse(tree.left, array)
    postOrderTraverse(tree.right, array)
    array.push(tree.value)
  }
}

export {preOrderTraverse};
export{inOrderTraverse};
export{postOrderTraverse}

