import { perfectCube } from '../PerfectCube'

describe('PerfectCube', () => {
  it('should return true for a perfect cube', () => {
    expect(perfectCube(125)).toBeTruthy()
    expect(perfectCube(-125)).toBeTruthy()
  })
  it('should return false for a non perfect cube', () => {
    expect(perfectCube(100)).toBeFalsy()
    expect(perfectCube(Infinity)).toBeFalsy()
  })
})
