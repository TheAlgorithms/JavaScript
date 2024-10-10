import { subsetSum } from '../SubsetSum'

const tests = [
  {
    test: {
      arr: [10, 5, 2, 3, 6],
      sum: 8
    },
    expectedValue: 2
  },
  {
    test: {
      arr: [-1, -1, -1],
      sum: -3
    },
    expectedValue: 1
  },
  {
    test: {
      arr: [40, 9, 77],
      sum: 3
    },
    expectedValue: 0
  }
]

describe('SubsetSum', () => {
  test.each(tests)(
    'should return $expectedValue when input is $test.arr and sum is $test.sum',
    ({ test, expectedValue }) => {
      expect(subsetSum(test.arr, test.sum)).toBe(expectedValue)
    }
  )

  //Empty array cases
  it('should return 1 when input is an empty array and sum is 0', () => {
    const result = subsetSum([], 0)
    expect(result).toBe(1) // Empty subset ([]) sums to 0
  })

  it('should return 0 when input is an empty array and sum is not 0', () => {
    const result = subsetSum([], 5)
    expect(result).toBe(0) // No subsets available to sum to 5
  })

  // Test invalid cases for errors
  describe('Invalid input cases', () => {
    it('should throw a TypeError when arr is not an array', () => {
      expect(() => subsetSum('invalid array', 5)).toThrow(TypeError)
    })

    it('should throw a TypeError when arr contains non-number elements', () => {
      expect(() => subsetSum([1, 2, 'three', 4], 5)).toThrow(TypeError)
    })

    it('should throw a TypeError when sum is not a number', () => {
      expect(() => subsetSum([1, 2, 3], 'five')).toThrow(TypeError)
    })
  })

  // Edge case
  it('should handle large arrays correctly', () => {
    const largeArray = Array.from({ length: 20 }, (_, i) => i + 1) // [1, 2, ..., 20]
    const result = subsetSum(largeArray, 10)
    expect(result).toBeGreaterThan(0) // Ensure this works for large inputs
  })
})
