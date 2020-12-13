import { EulersTotientFunction } from '../EulersTotientFunction';

describe('eulersTotientFunction', () => {
  it('is a function', () => {
    expect(typeof EulersTotientFunction).toEqual('function')
  })
  it('should return the phi of a given number', () => {
    const phiOfNumber = EulersTotientFunction(10)
    expect(phiOfNumber).toBe(4)
  })
})
