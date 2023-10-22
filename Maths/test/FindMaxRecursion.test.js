import { findMaxRecursion } from '../FindMaxRecursion'

describe('Test findMaxRecursion function', () => {
  const positiveAndNegativeArray = [1, 2, 4, 5, -1, -2, -4, -5]
  const positiveAndNegativeArray1 = [10, 40, 100, 20, -10, -40, -100, -20]

  const positiveArray = [1, 2, 4, 5]
  const positiveArray1 = [10, 40, 100, 20]

  const negativeArray = [-1, -2, -4, -5]
  const negativeArray1 = [-10, -40, -100, -20]

  const zeroArray = [0, 0, 0, 0]
  const emptyArray = []

  it('Testing with positive arrays', () => {
    expect(findMaxRecursion(positiveArray, 0, positiveArray.length - 1)).toBe(5)
    expect(findMaxRecursion(positiveArray1, 0, positiveArray1.length - 1)).toBe(
      100
    )
  })

  it('Testing with negative arrays', () => {
    expect(findMaxRecursion(negativeArray, 0, negativeArray.length - 1)).toBe(
      -1
    )
    expect(findMaxRecursion(negativeArray1, 0, negativeArray1.length - 1)).toBe(
      -10
    )
  })

  it('Testing with positive and negative arrays', () => {
    expect(
      findMaxRecursion(
        positiveAndNegativeArray,
        0,
        positiveAndNegativeArray.length - 1
      )
    ).toBe(5)
    expect(
      findMaxRecursion(
        positiveAndNegativeArray1,
        0,
        positiveAndNegativeArray1.length - 1
      )
    ).toBe(100)
  })

  it('Testing with zero arrays', () => {
    expect(findMaxRecursion(zeroArray, 0, zeroArray.length - 1)).toBe(0)
  })

  it('Testing with empty arrays', () => {
    expect(findMaxRecursion(emptyArray, 0, emptyArray.length - 1)).toBe(
      undefined
    )
  })
})
