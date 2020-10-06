import {
  areaCircle,
  areaTriangle,
  areaTrapezium,
  areaSquare,
  areaRhombus,
  areaRectangle,
  areaParallelogram,
  surfaceAreaCube,
  surfaceAreaSphere,
  surfaceAreaCylinder,
  curvedSurfaceAreaCylinder
} from '../Area'

describe('Area', () => {
  it('should return the area of a circle', () => {
    expect(Math.round(areaCircle(10))).toBe(314)
  })

  it('should throw an error when given negative values', () => {
    expect(() => areaCircle(-10)).toThrow()
  })

  it('should return the area of a parallelogram', () => {
    expect(areaParallelogram(10, 20)).toBe(200)
  })

  it('should throw an error when given negative values', () => {
    expect(() => areaParallelogram(-10, -21)).toThrow()
  })

  it('should return the area of a rectangle', () => {
    expect(areaRectangle(10, 20)).toBe(200)
  })

  it('should throw an error when given negative values', () => {
    expect(() => areaRectangle(-2, -3)).toThrow()
  })

  it('should return the area of a rhombus', () => {
    expect(areaRhombus(10, 10)).toBe(50)
  })

  it('should throw an error when given negative values', () => {
    expect(() => areaRhombus(-2, -4)).toThrow()
  })

  it('should return the area of a square', () => {
    expect(areaSquare(2)).toBe(4)
  })

  it('should throw an error when given negative values', () => {
    expect(() => areaSquare(-2)).toThrow()
  })

  it('should return the area of a trapezium', () => {
    expect(areaTrapezium(2, 3, 4)).toBe(10)
  })

  it('should throw an error when given negative values', () => {
    expect(() => areaTrapezium(-2, -3, -4)).toThrow()
  })

  it('should return the area of a triangle', () => {
    expect(areaTriangle(5, 10)).toBe(25)
  })

  it('should throw an error when given negative values', () => {
    expect(() => areaTriangle(-2, -4)).toThrow()
  })

  it('should return the surface area of a cube', () => {
    expect(surfaceAreaCube(2)).toBe(24)
  })

  it('should throw an error when given negative values', () => {
    expect(() => surfaceAreaCube(-2)).toThrow()
  })

  it('should return the  surface area of a cylinder', () => {
    expect(Math.round(surfaceAreaCylinder(10, 20))).toBe(1885)
  })

  it('should throw an error when given negative values', () => {
    expect(() => surfaceAreaCylinder(-2)).toThrow()
  })

  it('should return the surface area of a sphere', () => {
    expect(Math.round(surfaceAreaSphere(2))).toBe(50)
  })

  it('should throw an error when given negative values', () => {
    expect(() => surfaceAreaSphere(-2)).toThrow()
  })

  it('should return the curved surface area of a cylinder', () => {
    expect(Math.round(curvedSurfaceAreaCylinder(5, 10))).toBe(314)
  })

  it('should throw an error when given negative values', () => {
    expect(() => curvedSurfaceAreaCylinder(-2)).toThrow()
  })
})
