import { Tree } from '../BinarySearchTree.js'

describe('Binary Search Tree', () => {
  let tree

  beforeEach(() => {
    tree = new Tree()
    tree.addValue(10)
    tree.addValue(5)
    tree.addValue(15)
    tree.addValue(3)
    tree.addValue(8)
  })

  test('should add values to the tree', () => {
    tree.addValue(12)

    expect(tree.search(12)).toBe(12)
    expect(tree.search(5)).toBe(5)
    expect(tree.search(15)).toBe(15)
  })

  test('should perform in-order traversal', () => {
    const values = []
    const output = (val) => values.push(val)
    tree.traverse(output)
    expect(values).toEqual([3, 5, 8, 10, 15])
  })

  test('should remove leaf nodes correctly', () => {
    tree.removeValue(5)
    expect(tree.search(5)).toBeNull()
  })

  test('should remove nodes with one child correctly', () => {
    tree.addValue(12)
    tree.removeValue(15)

    expect(tree.search(15)).toBeNull()
    expect(tree.search(12)).toBe(12)
  })

  test('should remove nodes with two children correctly', () => {
    tree.addValue(18)
    tree.removeValue(15)

    expect(tree.search(15)).toBeNull()
    expect(tree.search(18)).toBe(18)
  })

  test('should return null for non-existent values', () => {
    expect(tree.search(20)).toBeNull()
    expect(tree.search(0)).toBeNull()
  })

  test('should handle removal of root node correctly', () => {
    tree.removeValue(10)
    expect(tree.search(10)).toBeNull()
  })

  test('should handle empty tree gracefully', () => {
    const newTree = new Tree()
    newTree.removeValue(22) // Should not throw
    expect(newTree.search(22)).toBeNull()
  })
})
