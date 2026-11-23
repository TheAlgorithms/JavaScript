import { Softmax } from '../Softmax'

describe('Softmax', () => {
  it.each([1000, -1000])(
    'should normalize finite logits with a common offset of %i',
    (offset) => {
      const expected = Softmax([0, 1, 2])
      const actual = Softmax([offset, offset + 1, offset + 2])
      actual.forEach((value, index) => {
        expect(Number.isFinite(value)).toBe(true)
        expect(value).toBeCloseTo(expected[index], 14)
      })
      expect(actual.reduce((sum, value) => sum + value, 0)).toBeCloseTo(1, 14)
    }
  )

  it('should return equal distribution of 1 for equal input values', () => {
    expect(Softmax([1, 1])).toEqual([0.5, 0.5])
    expect(Softmax([1, 1, 1, 1])).toEqual([0.25, 0.25, 0.25, 0.25])
  })

  it('should return values which sum to the value of 1', () => {
    expect(Softmax([1, 2, 3, 4]).reduce((a, b) => a + b, 0)).toEqual(1)
  })
})
