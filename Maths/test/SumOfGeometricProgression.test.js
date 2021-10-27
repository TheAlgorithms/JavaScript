import { sumOfGeometricProgression } from '../SumOfGeometricProgression'

describe('Sum Of Geometric Progression', () => {
  it('should return the sum of a finite GP', () => {
    expect(sumOfGeometricProgression(100, 1.5, 4)).toBe(812.5)
  })

  it('should return the sum of an infinite GP', () => {
    expect(sumOfGeometricProgression(2, 0.5, Infinity)).toBe(4)
  })
})
