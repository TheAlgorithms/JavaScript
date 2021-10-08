import { calculateLargestProductInGrid } from '../Problem11'

describe('checkCalculateLargestProductInGrid', () => {
  it('Problem statement Example', () => {
    const largestProductInGrid = calculateLargestProductInGrid()
    expect(largestProductInGrid).toBe(70600674)
  })
})
