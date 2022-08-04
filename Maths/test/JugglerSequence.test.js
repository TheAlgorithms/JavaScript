import { jugglerSequence } from '../JugglerSequence'

describe('Testing jugglerSequence function', () => {
  it('should return [3, 5, 11, 36, 6, 2, 1 ] if the number is 3', () => {
    expect(jugglerSequence(3)).toEqual(
      expect.arrayContaining([3, 5, 11, 36, 6, 2, 1])
    )
  })

  it('should return [9, 27, 140, 11, 36, 6, 2, 1] if the number is 9', () => {
    expect(jugglerSequence(9)).toEqual(
      expect.arrayContaining([9, 27, 140, 11, 36, 6, 2, 1])
    )
  })

  it('should return [15, 58, 7, 18, 4, 2, 1] if the number is 15', () => {
    expect(jugglerSequence(15)).toEqual(
      expect.arrayContaining([15, 58, 7, 18, 4, 2, 1])
    )
  })
})
