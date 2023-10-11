import { EuclideanDistance } from '../EuclideanDistance.js'

describe('EuclideanDistance', () => {
  it('should calculate the distance correctly for 2D vectors', () => {
    expect(EuclideanDistance([0, 0], [2, 2])).toBeCloseTo(
      2.8284271247461903,
      10
    )
  })

  it('should calculate the distance correctly for 3D vectors', () => {
    expect(EuclideanDistance([0, 0, 0], [2, 2, 2])).toBeCloseTo(
      3.4641016151377544,
      10
    )
  })

  it('should calculate the distance correctly for 4D vectors', () => {
    expect(EuclideanDistance([1, 2, 3, 4], [5, 6, 7, 8])).toBeCloseTo(8.0, 10)
  })

  it('should calculate the distance correctly for different 2D vectors', () => {
    expect(EuclideanDistance([1, 2], [4, 6])).toBeCloseTo(5.0, 10)
  })
})
