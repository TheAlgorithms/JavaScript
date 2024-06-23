import { preOrder } from '../PreOrder'

describe('preOrder function', () => {
  test('should return an empty array for an empty tree', () => {
    const tree = null
    expect(preOrder(tree)).toEqual([])
  })

  test('should return an array with the root value for a tree with only one node', () => {
    const tree = {
      value: 5,
      left: null,
      right: null
    }
    expect(preOrder(tree)).toEqual([5])
  })

  test('should return the correct array for a tree with multiple nodes', () => {
    const tree = {
      value: 5,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null
        },
        right: {
          value: 4,
          left: null,
          right: null
        }
      },
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null
        },
        right: {
          value: 8,
          left: null,
          right: null
        }
      }
    }
    expect(preOrder(tree)).toEqual([5, 3, 2, 4, 7, 6, 8])
  })

  test('should return the correct array for a tree with a single branch to the left', () => {
    const tree = {
      value: 5,
      left: {
        value: 4,
        left: {
          value: 3,
          left: {
            value: 2,
            left: null,
            right: null
          },
          right: null
        },
        right: null
      },
      right: null
    }
    expect(preOrder(tree)).toEqual([5, 4, 3, 2])
  })

  test('should return the correct array for a tree with a single branch to the right', () => {
    const tree = {
      value: 5,
      left: null,
      right: {
        value: 6,
        left: null,
        right: {
          value: 7,
          left: null,
          right: {
            value: 8,
            left: null,
            right: null
          }
        }
      }
    }
    expect(preOrder(tree)).toEqual([5, 6, 7, 8])
  })
})
