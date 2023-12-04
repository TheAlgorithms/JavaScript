import { binaryEquivalent } from '../BinaryEquivalent'

const tests = [
  {
    test: 2,
    expectedValue: '10'
  },
  {
    test: 0,
    expectedValue: '0'
  },
  {
    test: 543,
    expectedValue: '1000011111'
  },
  {
    test: 4697621023,
    expectedValue: '100011000000000000000001000011111'
  }
]

describe('Binary Equivalent', () => {
  test.each(tests)(
    'of $test should be $expectedValue',
    ({ test, expectedValue }) => {
      expect(binaryEquivalent(test)).toBe(expectedValue)
    }
  )
})
