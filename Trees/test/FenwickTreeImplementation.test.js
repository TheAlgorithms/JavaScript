import { FenwickTree } from '../FenwickTreeImplementation'

describe('Fenwick Tree Implementation', () => {
  const fenwickTree = new FenwickTree()

  const fenwickArray = new Array(1000)

  const array = [3, 2, 0, 6, 5, -1, 2]
  const length = array.length
  fenwickTree.constructFenwickTree(fenwickArray, array, length)

  it('Fenwick Tree - Prefix sum of array', () => {
    const prefixSum = fenwickTree.getPrefixSum(fenwickArray, 6)
    expect(prefixSum).toBe(23)
  })

  array[2] += 6
  fenwickTree.updateFenwickTree(fenwickArray, length, 2, 6)

  it('Fenwick Tree - Prefix sum of Updated array', () => {
    const prefixSum = fenwickTree.getPrefixSum(fenwickArray, 6)
    expect(prefixSum).toBe(23)
  })
})
