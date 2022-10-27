import binaryLifting from '../BinaryLifting'

// The graph for Test Case 1 looks like this:
//
//         0
//        /|\
//       / | \
//      1  3  5
//     / \     \
//    2   4     6
//         \
//          7
//         / \
//        11  8
//             \
//              9
//               \
//                10

test('Test case 1', () => {
  const root = 0
  const graph = [
    [0, 1],
    [0, 3],
    [0, 5],
    [5, 6],
    [1, 2],
    [1, 4],
    [4, 7],
    [7, 11],
    [7, 8],
    [8, 9],
    [9, 10]
  ]
  const queries = [
    [2, 1],
    [6, 1],
    [7, 2],
    [8, 2],
    [10, 2],
    [10, 3],
    [10, 5],
    [11, 3]
  ]
  const kthAncestors = binaryLifting(root, graph, queries)
  expect(kthAncestors).toEqual([1, 5, 1, 4, 8, 7, 1, 1])
})

// The graph for Test Case 2 looks like this:
//
//         0
//        / \
//       1   2
//      / \   \
//     3   4   5
//    /       / \
//   6       7   8

test('Test case 2', () => {
  const root = 0
  const graph = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [3, 6],
    [5, 7],
    [5, 8]
  ]
  const queries = [
    [2, 1],
    [3, 1],
    [3, 2],
    [6, 2],
    [7, 3],
    [8, 2],
    [8, 3]
  ]
  const kthAncestors = binaryLifting(root, graph, queries)
  expect(kthAncestors).toEqual([0, 1, 0, 1, 0, 2, 0])
})
