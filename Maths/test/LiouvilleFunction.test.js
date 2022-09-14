import { liouvilleFunction } from '../LiouvilleFunction'

const expectedValuesArray = [1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, -1, -1, 1]

describe('Testing liouville function', () => {
  for (let i = 1; i <= 100; i++) {
    it('Testing for number = ' + i + ', should return ' + expectedValuesArray[i], () => {
      expect(liouvilleFunction(i)).toBe(expectedValuesArray[i - 1])
    })
  }

  it('should throw error when supplied negative numbers', () => {
    expect(() => { liouvilleFunction(-1) }).toThrow(Error)
  })

  it('should throw error when supplied zero', () => {
    expect(() => { liouvilleFunction(0) }).toThrow(Error)
  })
})
