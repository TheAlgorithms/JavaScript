import { mobiusFunction } from '../MobiusFunction'

const expectedValuesArray = [1, -1, -1, 0, -1, 1, -1, 0, 0, 1, -1, 0, -1, 1, 1, 0, -1, 0, -1, 0, 1, 1, -1, 0, 0, 1, 0, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 0, 1, -1, 0, 0, 0, 1, 0, -1, 0, 1, 0, 1, 1, -1, 0, -1, 1, 0, 0, 1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 0, 0, 1, -1, -1, 0, 0, 1, -1, 0, 1, 1, 1, 0, -1, 0, 1, 0, 1, 1, 1, 0, -1, 0, 0, 0]

describe('Testing mobius function', () => {
  for (let i = 1; i <= 100; i++) {
    it('Testing for number = '+i+', should return '+expectedValuesArray[i], () => {
      expect(mobiusFunction(i)).toBe(expectedValuesArray[i-1])
    })
  }

  it('should not support negative numbers', () => {
    const actualMessage = mobiusFunction(-1)
    expect(actualMessage).toBe('Number must be greater than zero.')
  })

  it('should not support zero', () => {
    const actualMessage = mobiusFunction(0)
    expect(actualMessage).toBe('Number must be greater than zero.')
  })
})