import { aliquotSum } from '../AliquotSum'

describe('Aliquot Sum of a Number', () => {
  it('Aliquot Sum of 6', () => {
    expect(aliquotSum(6)).toBe(6)
  })

  it('Aliquot Sum of -1', () => {
    expect(aliquotSum(-1)).toThrow()
  })

  it('Aliquot Sum of 10.5', () => {
    expect(aliquotSum(10.5)).toThrow()
  })
})
