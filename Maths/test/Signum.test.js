import { signum } from '../Signum'

describe('The sign of a number', () => {
  it('Sign of 10', () => {
    expect(signum(10)).toBe(1)
  })

  it('Sign of 0', () => {
    expect(signum(0)).toBe(0)
  })

  it('Sign of -420', () => {
    expect(signum(-420)).toBe(-1)
  })

  it('Sign of NaN', () => {
    expect(signum(NaN)).toBe(NaN)
  })
})
