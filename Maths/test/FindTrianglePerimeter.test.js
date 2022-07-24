import { findTrianglePerimeter } from '../FindTrianglePerimeter'

describe('findTrianglePerimeter', () => {
  it('should return the perimeter of a triangle', () => {
    expect(findTrianglePerimeter(5, 6, 4)).toBe(15)
  })

  it('should return the perimeter of a triangle', () => {
    expect(findTrianglePerimeter(2, 6, 5)).toBe(13)
  })

  it('should return the perimeter of a triangle', () => {
    expect(findTrianglePerimeter(7, 2, 6)).toBe(15)
  })

  it('should return the perimeter of a triangle', () => {
    expect(findTrianglePerimeter(6, 3, 8)).toBe(17)
  })
})
