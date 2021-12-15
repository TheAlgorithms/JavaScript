import * as area from '../Area'

describe('Testing surfaceAreaCube calculations', () => {
  it('with natural number', () => {
    const surfaceAreaOfOne = area.surfaceAreaCube(1.2)
    const surfaceAreaOfThree = area.surfaceAreaCube(3)
    expect(surfaceAreaOfOne).toBe(8.64)
    expect(surfaceAreaOfThree).toBe(54)
  })
  it('with negative argument, expect throw', () => {
    expect(() => area.surfaceAreaCube(-1)).toThrow()
  })
  it('with non-numeric argument, expect throw', () => {
    expect(() => area.surfaceAreaCube('199')).toThrow()
  })
})

describe('Testing surfaceAreaSphere calculations', () => {
  it('with correct value', () => {
    const calculateArea = area.surfaceAreaSphere(5)
    const expected = 314.1592653589793
    expect(calculateArea).toBe(expected)
  })
  it('with negative value, expect throw', () => {
    expect(() => area.surfaceAreaSphere(-1)).toThrow()
  })
})

describe('Testing areaRectangle calculations', () => {
  it('with correct args', () => {
    const areaRectangle = area.areaRectangle(2.5, 2)
    expect(areaRectangle).toBe(5.0)
  })
  it('with incorrect args, expect throw', () => {
    expect(() => area.areaRectangle(-1, 20)).toThrow()
    expect(() => area.areaRectangle('1', 0)).toThrow()
    expect(() => area.areaRectangle(23, -1)).toThrow()
    expect(() => area.areaRectangle(23, 'zero')).toThrow()
  })
})

describe('Testing areaSquare calculations', () => {
  it('with correct args', () => {
    const areaSquare = area.areaSquare(2.5)
    expect(areaSquare).toBe(6.25)
  })
  it('with incorrect side length, expect throw', () => {
    expect(() => area.areaSquare(-1)).toThrow()
    expect(() => area.areaSquare('zero')).toThrow()
  })
})

describe('Testing areaTriangle calculations', () => {
  it('with correct args', () => {
    const areaTriangle = area.areaTriangle(1.66, 3.44)
    expect(areaTriangle).toBe(2.8552)
  })
  it('with incorrect base and height, expect throw', () => {
    expect(() => area.areaTriangle(-1, 1)).toThrow()
    expect(() => area.areaTriangle(9, 'zero')).toThrow()
  })
})

describe('Testing areaTriangleWithAllThreeSides calculations', () => {
  it('with correct args', () => {
    const areaTriangle = area.areaTriangleWithAllThreeSides(5, 6, 7)
    expect(areaTriangle).toBe(14.7)
  })
  it('with incorrect sides, expect throw', () => {
    expect(() => area.areaTriangleWithAllThreeSides(-1, 1, 10)).toThrow()
    expect(() => area.areaTriangleWithAllThreeSides(9, 'zero', 2)).toThrow()
    expect(() => area.areaTriangleWithAllThreeSides(1, 10, 12)).toThrow()
  })
})

describe('Testing areaParallelogram calculations', () => {
  it('with correct args', () => {
    const areaParallelogram = area.areaParallelogram(1.66, 3.44)
    expect(areaParallelogram).toBe(5.7104)
  })
  it('with incorrect base and height, expect throw', () => {
    expect(() => area.areaParallelogram(-1, 1)).toThrow()
    expect(() => area.areaParallelogram(9, 'zero')).toThrow()
  })
})

describe('Testing areaTrapezium calculations', () => {
  it('with correct args', () => {
    const areaTrapezium = area.areaTrapezium(1.66, 2.41, 4.1)
    expect(areaTrapezium).toBe(8.3435)
  })
  it('with incorrect bases and height, expect throw', () => {
    expect(() => area.areaTrapezium(-1, 1, 0)).toThrow()
    expect(() => area.areaTrapezium(9, 'zero', 2)).toThrow()
    expect(() => area.areaTrapezium(9, 1, 'seven')).toThrow()
  })
})

describe('Testing areaCircle calculations', () => {
  it('with correct args', () => {
    const areaCircle = area.areaCircle(3.456)
    expect(areaCircle).toBe(37.52298159254666)
  })
  it('with incorrect diagonal, expect throw', () => {
    expect(() => area.areaCircle(-1)).toThrow()
    expect(() => area.areaCircle('zero')).toThrow()
  })
})

describe('Testing areaRhombus calculations', () => {
  it('with correct args', () => {
    const areaRhombus = area.areaRhombus(2.5, 2.0)
    expect(areaRhombus).toBe(2.5)
  })
  it('with incorrect diagonals, expect throw', () => {
    expect(() => area.areaRhombus(7, -1)).toThrow()
    expect(() => area.areaRhombus('zero', 2)).toThrow()
  })
})
