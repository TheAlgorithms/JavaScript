import { searchDFS, traverseDFS } from '../DepthFirstSearch'

describe('Depth First Tree Traversal', () => {
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

  //            6
  //           / \
  //          5   7
  //         / \   \
  //        3   4   9
  //       /       / \
  //      2       8   10
  //     /
  //    1

  it('should be null if given value is not present in the tree - DF Search', () => {
    const res = searchDFS(tree, 200)
    expect(res).toStrictEqual(null)
  })

  it('should return the node if given value is present in the tree - DF Search', () => {
    const res = searchDFS(tree, 9)
    expect(res).toStrictEqual({ value: 9, left: 7, right: 8 })
  })

  it('should return empty array if given root is not present in the tree - DF Traversal', () => {
    const traversal = traverseDFS(tree, 200)
    expect(traversal).toStrictEqual([])
  })

  it('should return DFT array of given tree from specified root if given root is present in the tree - DF Traversal', () => {
    const traversal = traverseDFS(tree, 6)
    expect(traversal).toStrictEqual([1, 2, 3, 4, 5, 8, 10, 9, 7, 6])
  })
})
