import { TreeNode, morrisTraversal } from '../MorrisTraversal'

describe('Morris Traversal', () => {
  it('Empty tree case', () => {
    expect(morrisTraversal(null)).toStrictEqual([])
  })

  it('Single node tree', () => {
    const root = new TreeNode(42)
    expect(morrisTraversal(root)).toStrictEqual([42])
  })

  it('Simple inorder traversal', () => {
    // Tree structure:
    //     2
    //    / \
    //   1   3
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3))
    expect(morrisTraversal(root)).toStrictEqual([1, 2, 3])
  })

  it('Complex tree traversal - Example from documentation', () => {
    // Tree structure:
    //         7
    //        / \
    //       5   8
    //      / \
    //     3   6
    //          \
    //           9
    const root = new TreeNode(
      7,
      new TreeNode(5, new TreeNode(3), new TreeNode(6, null, new TreeNode(9))),
      new TreeNode(8)
    )
    expect(morrisTraversal(root)).toStrictEqual([3, 5, 6, 9, 7, 8])
  })

  it('Left skewed tree', () => {
    // Tree structure:
    //     3
    //    /
    //   2
    //  /
    // 1
    const root = new TreeNode(3, new TreeNode(2, new TreeNode(1)))
    expect(morrisTraversal(root)).toStrictEqual([1, 2, 3])
  })

  it('Right skewed tree', () => {
    // Tree structure:
    // 1
    //  \
    //   2
    //    \
    //     3
    const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)))
    expect(morrisTraversal(root)).toStrictEqual([1, 2, 3])
  })

  it('Larger tree with mixed structure', () => {
    // Tree structure:
    //         10
    //        /  \
    //       5   15
    //      / \    \
    //     3   7   18
    //    /   / \
    //   1   6   8
    const root = new TreeNode(
      10,
      new TreeNode(
        5,
        new TreeNode(3, new TreeNode(1)),
        new TreeNode(7, new TreeNode(6), new TreeNode(8))
      ),
      new TreeNode(15, null, new TreeNode(18))
    )
    expect(morrisTraversal(root)).toStrictEqual([1, 3, 5, 6, 7, 8, 10, 15, 18])
  })

  it('Tree with duplicate values', () => {
    // Tree structure:
    //     5
    //    / \
    //   5   5
    //  /     \
    // 3       7
    const root = new TreeNode(
      5,
      new TreeNode(5, new TreeNode(3)),
      new TreeNode(5, null, new TreeNode(7))
    )
    expect(morrisTraversal(root)).toStrictEqual([3, 5, 5, 5, 7])
  })
})
