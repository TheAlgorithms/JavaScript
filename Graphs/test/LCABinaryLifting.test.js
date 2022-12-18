import lcaBinaryLifting from '../LCABinaryLifting'

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
    [1, 3],
    [6, 5],
    [3, 6],
    [7, 10],
    [8, 10],
    [11, 2],
    [11, 10]
  ]
  const lowestCommonAncestors = lcaBinaryLifting(root, graph, queries)
  expect(lowestCommonAncestors).toEqual([0, 5, 0, 7, 8, 1, 7])
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
    [1, 2],
    [3, 4],
    [5, 4],
    [6, 7],
    [6, 8],
    [7, 8]
  ]
  const lowestCommonAncestors = lcaBinaryLifting(root, graph, queries)
  expect(lowestCommonAncestors).toEqual([0, 1, 0, 0, 0, 5])
})
