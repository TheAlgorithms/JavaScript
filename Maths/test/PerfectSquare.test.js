import { perfectSquare } from '../PerfectSquare'

describe('PerfectSquare', () => {
  it('should return true for a perfect square', () => {
    expect(perfectSquare(16)).toBeTruthy()
  })
  it('should return false for a non perfect square', () => {
    expect(perfectSquare(10)).toBeFalsy()
    expect(perfectSquare(Infinity)).toBeFalsy()
  })
})
