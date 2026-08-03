import { babyStepGiantStep } from '../BabyStepGiantStep'

describe('babyStepGiantStep', () => {
  it.each([
    [2, 1, 5, 0],
    [2, 3, 5, 3], // 2^3 = 8 ≡ 3 (mod 5)
    [5, 8, 13, 3], // 5^3 = 125 ≡ 8 (mod 13)
    [3, 13, 17, 4] // 3^4 = 81 ≡ 13 (mod 17)
  ])('solves %i^x ≡ %i (mod %i)', (base, target, modulus, expected) => {
    expect(babyStepGiantStep(base, target, modulus)).toBe(expected)
  })

  it('throws when no solution exists', () => {
    expect(() => babyStepGiantStep(2, 0, 5)).toThrow(RangeError)
  })

  it('throws for non-integer inputs', () => {
    expect(() => babyStepGiantStep('2', 3, 5)).toThrow(TypeError)
  })
})
