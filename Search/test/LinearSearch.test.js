import { Search as linearSearch } from '../LinearSearch'

const tests = [
  {
    test: {
      arr: [1, 2, 300, 401, 450, 504, 800, 821, 855, 900, 1002],
      target: 900
    },
    expectedValue: 9
  },
  {
    test: {
      arr: [1, 104, 110, 4, 44, 55, 56, 78],
      target: 104
    },
    expectedValue: 1
  },
  {
    test: {
      arr: [-4, 5, 50, 77, 821, 85, 99, 100],
      target: 192
    },
    expectedValue: -1
  }
]

describe('Linear Search', () => {
  it.each(tests)(
    'linearSearch($test.arr, $test.target) => $expectedValue',
    ({ test, expectedValue }) => {
      const { arr, target } = test
      expect(linearSearch(arr, target)).toBe(expectedValue)
    }
  )
})
