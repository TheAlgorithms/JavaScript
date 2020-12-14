import { eulersTotientFunction } from '../EulersTotientFunction'

describe('eulersTotientFunction', () => {
  it('is a function', () => {
    expect(typeof eulersTotientFunction).toEqual('function')
  })
  it('should return the phi of a given number', () => {
    const phiOfNumber = eulersTotientFunction(10)
    expect(phiOfNumber).toBe(4)
  })
})
