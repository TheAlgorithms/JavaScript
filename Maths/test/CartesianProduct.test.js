import { cartesianProduct } from '../CartesianProduct'

describe('cartesianProduct', () => {
  it('should return null if not enough info for calculation', () => {
    const product1 = cartesianProduct([1], null)
    const product2 = cartesianProduct([], null)

    expect(product1).toBeNull()
    expect(product2).toBeNull()
  })

  it('should calculate the product of two sets', () => {
    const product1 = cartesianProduct([1], [1])
    const product2 = cartesianProduct([1, 2], [3])
    const product3 = cartesianProduct([1, 2], [3, 4])

    expect(product1).toEqual([[1, 1]])
    expect(product2).toEqual([[1, 3], [2, 3]])
    expect(product3).toEqual([[1, 3], [1, 4], [2, 3], [2, 4]])
  })
})
