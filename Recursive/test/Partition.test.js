import { canPartition } from '../Partition'

describe('Partition (Recursive)', () => {
  it('expects to return true for an array that can be partitioned', () => {
    const result = canPartition([1, 5, 11, 5])
    expect(result).toBe(true)
  })

  it('expects to return false for an array that cannot be partitioned', () => {
    const result = canPartition([1, 2, 3, 5])
    expect(result).toBe(false)
  })

  it('expects to return true for an empty array (0 elements)', () => {
    const result = canPartition([])
    expect(result).toBe(true)
  })

  it('Throw Error for Invalid Input', () => {
    expect(() => canPartition(123)).toThrow('Invalid Input')
    expect(() => canPartition(null)).toThrow('Invalid Input')
    expect(() => canPartition(undefined)).toThrow('Invalid Input')
  })
})
