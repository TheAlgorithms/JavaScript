/*
 * Author: Sundaram Kumar Jha
 * DFS Algorithm implementation in JavaScript
 * DFS Algorithm for traversing or searching graph data structures.
*/

function dfs(tree) {
  if (!tree) return;
  console.log(tree.value);
  for (const child of tree.children) {
    dfs(child);
  }
}

// This function takes a tree node as an argument, and uses recursion to traverse 
// the tree in a depth-first manner. The function first logs the value of the current
//  node and then iterates through its children, calling the function on each child. 
// The function stops when it encounters a null node.

function searchDFS(tree, target) {
  if (tree.value === target) {
    return true;
  }

  for (let i = 0; i < tree.children.length; i++) {
    if (searchDFS(tree.children[i], target)) {
      return true;
    }
  }

  return false;
}

// This function takes two arguments: tree, which is the tree to be searched, and target, 
// which is the value you're searching for. The function uses a depth-first search algorithm to 
// traverse the tree and look for the target value.

// The function starts by checking if the current node has the target value. 
// If it does, it returns true to indicate that the target value has been found. 
// If not, the function loops over the children of the current node and calls itself recursively on each child. 
// If any of the recursive calls returns true, the function also returns true to indicate that the target value 
// has been found. If none of the recursive calls returns true, the function returns false to indicate that the 
// target value was not found in the tree

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 4,
          children: [
            {
              value: 8,
              children: [
                {
                  value: 16,
                  children: [],
                },
              ],
            },
            {
              value: 9,
              children: [
                {
                  value: 17,
                  children: [],
                },
                {
                  value: 18,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          value: 5,
          children: [
            {
              value: 10,
              children: [
                {
                  value: 19,
                  children: [],
                },
                {
                  value: 20,
                  children: [],
                },
              ],
            },
            {
              value: 11,
              children: [
                {
                  value: 21,
                  children: [],
                },
                {
                  value: 22,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: 3,
      children: [
        {
          value: 6,
          children: [
            {
              value: 12,
              children: [
                {
                  value: 23,
                  children: [],
                },
                {
                  value: 24,
                  children: [],
                },
              ],
            },
            {
              value: 13,
              children: [
                {
                  value: 25,
                  children: [],
                },
                {
                  value: 26,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          value: 7,
          children: [
            {
              value: 14,
              children: [
                {
                  value: 27,
                  children: [],
                },
                {
                  value: 28,
                  children: [],
                },
              ],
            },
            {
              value: 15,
              children: [
                {
                  value: 29,
                  children: [],
                },
                {
                  value: 30,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

console.log(dfs(tree));

const target = 275;
const result = searchDFS(tree, target);
console.log(result); // true or false


// The tree argument is an object that represents a tree data structure, 
// where each node has a value and an array of child nodes. In this particular example, 
// the tree has a root node with value 1. The root node has two child nodes, represented by objects with values 2 and 3. 
// These child nodes each have two child nodes, and so on.

// Each node in the tree is represented as an object with two properties: value and children. 
// The value property holds the value of the node, and the children property is an array of child nodes. 
// If a node has no children, its children property is an empty array [].

// Here's a visual representation of the tree argument:

//       1
//       / \
//      2   3
//     / \ / \
//   4  5 6  7
//   /\  /\ /\ /\
//  8 9 10 11 12 13 14 15
//  /\ /\ /\ /\ /\ /\ /\ /\
// 161718192021 22222324252627282930

// This tree can be traversed using the dfs function provided earlier, 
// which visits nodes in a depth-first order. The dfs function uses recursion 
// to traverse the tree, starting from the root node and visiting each child node 
// in turn before moving on to the next sibling node.

