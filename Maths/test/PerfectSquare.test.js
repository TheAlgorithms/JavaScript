import { perfectSquare } from '../PerfectSquare'

describe('PerfectSquare', () => {
  it('should return true for a perfect cube', () => {
    expect(perfectSquare(16)).toBeTruthy()
  })
  it('should return false for a non perfect cube', () => {
    expect(perfectSquare(10)).toBeFalsy()
  })
})
