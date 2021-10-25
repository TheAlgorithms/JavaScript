import { aliquotSum } from '../AliquotSum'

describe('Aliquot Sum of a Number', () => {
  it('Aliquot Sum of 6', () => {
    expect(aliquotSum(6)).toBe(6)
  })

  it('Aliquot Sum of 1', () => {
    expect(aliquotSum(1)).toBe(0)
  })

  it('Aliquot Sum of 28', () => {
    expect(aliquotSum(28)).toBe(28)
  })
})
