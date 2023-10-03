import { mobiusFunction } from '../MobiusFunction'

const expectedValuesArray = [
  1, -1, -1, 0, -1, 1, -1, 0, 0, 1, -1, 0, -1, 1, 1, 0, -1, 0, -1, 0, 1, 1, -1,
  0, 0, 1, 0, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 0, 1,
  -1, 0, 0, 0, 1, 0, -1, 0, 1, 0, 1, 1, -1, 0, -1, 1, 0, 0, 1, -1, -1, 0, 1, -1,
  -1, 0, -1, 1, 0, 0, 1, -1, -1, 0, 0, 1, -1, 0, 1, 1, 1, 0, -1, 0, 1, 0, 1, 1,
  1, 0, -1, 0, 0, 0
]

describe('Testing mobius function', () => {
  for (let i = 1; i <= 100; i++) {
    it(
      'Testing for number = ' + i + ', should return ' + expectedValuesArray[i],
      () => {
        expect(mobiusFunction(i)).toBe(expectedValuesArray[i - 1])
      }
    )
  }

  it('should throw error when supplied negative numbers', () => {
    expect(() => {
      mobiusFunction(-1)
    }).toThrow(Error)
  })

  it('should throw error when supplied zero', () => {
    expect(() => {
      mobiusFunction(0)
    }).toThrow(Error)
  })
})
