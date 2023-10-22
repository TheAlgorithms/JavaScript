import { hexagonalNumber } from '../HexagonalNumber'

const expectedValuesArray = [
  1, 6, 15, 28, 45, 66, 91, 120, 153, 190, 231, 276, 325, 378, 435, 496, 561,
  630, 703, 780, 861, 946
]

describe('Testing hexagonalNumber', () => {
  for (let i = 1; i <= 22; i++) {
    it(
      'Testing for number = ' + i + ', should return ' + expectedValuesArray[i],
      () => {
        expect(hexagonalNumber(i)).toBe(expectedValuesArray[i - 1])
      }
    )
  }

  it('should throw error when supplied negative numbers', () => {
    expect(() => {
      hexagonalNumber(-1)
    }).toThrow(Error)
  })

  it('should throw error when supplied zero', () => {
    expect(() => {
      hexagonalNumber(0)
    }).toThrow(Error)
  })
})
