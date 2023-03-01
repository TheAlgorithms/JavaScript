/*
 * Author: Surendra Kumar
 * DFS Algorithm implementation in JavaScript
 * DFS Algorithm for traversing or searching graph data structures.
*/

// traverses a give tree from specified root's value
function traverseDFS (tree, rootValue) {
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

function searchDFS (tree, value) {
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

const tree = [
  { value: 6, left: 1, right: 2 },
  { value: 5, left: 3, right: 4 },
  { value: 7, left: null, right: 5 },
  { value: 3, left: 6, right: null },
  { value: 4, left: null, right: null },
  { value: 9, left: 7, right: 8 },
  { value: 2, left: 9, right: null },
  { value: 8, left: null, right: null },
  { value: 10, left: null, right: null },
  { value: 1, left: null, right: null }
]
searchDFS(tree, 9) // { value: 9, left: 7, right: 8 }
searchDFS(tree, 200) // null
traverseDFS(tree, 6) // [ 1, 2, 3, 4, 5, 8, 10, 9, 7, 6 ]
traverseDFS(tree, 200) // []

//            6
//           / \
//          5   7
//         / \   \
//        3   4   9
//       /       / \
//      2       8   10
//     /
//    1
export { searchDFS, traverseDFS }
