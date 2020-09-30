/*
  * @author cpunt
  * BFS Traversal
  * DFS inOrder, preOrder and postOrder traversal
  * https://en.wikipedia.org/wiki/Tree_traversal
*/
class TreeNode {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }
}
// Breadth First Search
function traverseBFS (root) {
  const queue = [root]
  let node = queue.shift()

  while (node) {
    console.log(node.data)

    if (node.left) {
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }

    node = queue.shift()
  }
}
// Depth First search
function inOrder (node) {
  if (node == null) {
    return
  }

  inOrder(node.left)
  console.log(node.data)
  inOrder(node.right)
}

function preOrder (node) {
  if (node == null) {
    return
  }

  console.log(node.data)
  inOrder(node.left)
  inOrder(node.right)
}

function postOrder (node) {
  if (node == null) {
    return
  }

  inOrder(node.left)
  inOrder(node.right)
  console.log(node.data)
}

const root = new TreeNode(10)
root.right = new TreeNode(20)
root.left = new TreeNode(4)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(7)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(24)
root.right.right.right = new TreeNode(30)

// 10, 4, 20, 3, 7, 15, 24, 30
traverseBFS(root)
// 3, 4, 7, 10, 15, 20, 24, 30
inOrder(root)
// 10, 3, 4, 7, 15, 20, 24, 30
preOrder(root)
// 3, 4, 7, 15, 20, 24, 30, 10
postOrder(root)

//            10
//          /   \
//         4     20
//        / \   / \
//       3  7  15  24
//                  \
//                  30
