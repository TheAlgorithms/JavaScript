import { morrisTraversal, TreeNode } from '../MorrisTraversal'

describe('morrisTraversal (Inorder)', () => {
  it('should return an empty array for an empty tree', () => {
    expect(morrisTraversal(null)).toEqual([])
  })

  it('should return a single node when tree has only one node', () => {
    const root = new TreeNode(10)
    expect(morrisTraversal(root)).toEqual([10])
  })

  it('should correctly traverse a simple balanced tree', () => {
    /**
     *    2
     *   / \
     *  1   3
     */
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3))
    expect(morrisTraversal(root)).toEqual([1, 2, 3])
  })

  it('should handle a left-skewed tree', () => {
    /**
     *   3
     *  /
     * 2
     * /
     *1
     */
    const root = new TreeNode(3, new TreeNode(2, new TreeNode(1)))
    expect(morrisTraversal(root)).toEqual([1, 2, 3])
  })

  it('should handle a right-skewed tree', () => {
    /**
     * 1
     *  \
     *   2
     *    \
     *     3
     */
    const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)))
    expect(morrisTraversal(root)).toEqual([1, 2, 3])
  })

  it('should correctly traverse a larger tree', () => {
    /**
     *        4
     *       / \
     *      2   5
     *     / \
     *    1   3
     */
    const root = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(5)
    )
    expect(morrisTraversal(root)).toEqual([1, 2, 3, 4, 5])
  })
})
