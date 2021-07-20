import * as volume from '../Volume'

test('Testing on volCuboid', () => {
  it('with correct args', () => {
    const volCuboid = volume.volCuboid(2.0, 5.0, 3)
    expect(volCuboid).toBe(30.0)
  })
  it('with incorrect args', () => {
    expect(() => volume.volCuboid(-1, 5.0, 3)).toThrow()
    expect(() => volume.volCuboid(2.0, -1, 3)).toThrow()
    expect(() => volume.volCuboid(2.0, 5.0, -1)).toThrow()
    expect(() => volume.volCuboid('2.0', 5.0, 3)).toThrow()
    expect(() => volume.volCuboid(2.0, '5.0', 3)).toThrow()
    expect(() => volume.volCuboid(2.0, 5.0, '3')).toThrow()
    expect(() => volume.volCuboid(2000000000000000, 5.0, 3)).toThrow()
    expect(() => volume.volCuboid(2.0, 500000000000000000, 3)).toThrow()
    expect(() => volume.volCuboid(2.0, 5.0, 30000000000000000000)).toThrow()
  })
})

test('Testing on volCube', () => {
  it('with correct args', () => {
    const volCube = volume.volCube(2.0)
    expect(volCube).toBe(8.0)
  })
  it('with incorrect args', () => {
    expect(() => volume.volCube(-2.0)).toThrow()
    expect(() => volume.volCube('2.0')).toThrow()
    expect(() => volume.volCube(2000000000000000000000000)).toThrow()
  })
})

test('Testing on volCone', () => {
  it('with correct args', () => {
    const volCone = volume.volCone(2.0, 8.0)
    expect(volCone).toBe(33.5103)
  })
  it('with incorrect args', () => {
    expect(() => volume.volCone(-2.0, 8.0)).toThrow()
    expect(() => volume.volCone(2.0, -8.0)).toThrow()
    expect(() => volume.volCone('2.0', 8.0)).toThrow()
    expect(() => volume.volCone(2.0, '8.0')).toThrow()
    expect(() => volume.volCone(2000000000000000000000000, 8.0)).toThrow()
    expect(() => volume.volCone(2.0, 8000000000000000000000000000)).toThrow()
  })
})

test('Testing on volPyramid', () => {
  it('with correct args', () => {
    const volPyramid = volume.volPyramid(2.0, 3.0, 8.0)
    expect(volPyramid).toBe(16.0)
  })
  it('with incorrect args', () => {
    expect(() => volume.volPyramid(-2.0, 3.0, 8.0)).toThrow()
    expect(() => volume.volPyramid(2.0, -3.0, 8.0)).toThrow()
    expect(() => volume.volPyramid(2.0, 3.0, -8.0)).toThrow()
    expect(() => volume.volPyramid('2.0', 3.0, 8.0)).toThrow()
    expect(() => volume.volPyramid(2.0, '3.0', 8.0)).toThrow()
    expect(() => volume.volPyramid(2.0, 3.0, '8.0')).toThrow()
    expect(() => volume.volPyramid(2000000000000000000000000, 3.0, 8.0)).toThrow()
    expect(() => volume.volPyramid(2.0, 3000000000000000000000000000, 8.0)).toThrow()
    expect(() => volume.volPyramid(2.0, 3.0, 8000000000000000000000000000)).toThrow()
  })
})

test('Testing on volCylinder', () => {
  it('with correct args', () => {
    const volCylinder = volume.volCylinder(2.0, 8.0)
    expect(volCylinder).toBe(100.5310)
  })
  it('with incorrect args', () => {
    expect(() => volume.volCylinder(-2.0, 8.0)).toThrow()
    expect(() => volume.volCylinder(2.0, -8.0)).toThrow()
    expect(() => volume.volCylinder('2.0', 8.0)).toThrow()
    expect(() => volume.volCylinder(2.0, '8.0')).toThrow()
    expect(() => volume.volCylinder(2000000000000000000000000, 8.0)).toThrow()
    expect(() => volume.volCylinder(2.0, 8000000000000000000000000000)).toThrow()
  })
})

test('Testing on volTriangularPrism', () => {
  it('with correct args', () => {
    const volTriangularPrism = volume.volTriangularPrism(3.0, 6.0, 8.0)
    expect(volTriangularPrism).toBe(72.0)
  })
  it('with incorrect args', () => {
    expect(() => volume.volTriangularPrism(-3.0, 6.0, 8.0)).toThrow()
    expect(() => volume.volTriangularPrism(3.0, -6.0, 8.0)).toThrow()
    expect(() => volume.volTriangularPrism(3.0, 6.0, -8.0)).toThrow()
    expect(() => volume.volTriangularPrism('3.0', 6.0, 8.0)).toThrow()
    expect(() => volume.volTriangularPrism(3.0, '6.0', 8.0)).toThrow()
    expect(() => volume.volTriangularPrism(3.0, 6.0, '8.0')).toThrow()
    expect(() => volume.volTriangularPrism(3000000000000000000000000, 6.0, 8.0)).toThrow()
    expect(() => volume.volTriangularPrism(3.0, 6000000000000000000000000000, 8.0)).toThrow()
    expect(() => volume.volTriangularPrism(3.0, 6.0, 8000000000000000000000000000)).toThrow()
  })
})

test('Testing on volPentagonalPrism', () => {
  it('with correct args', () => {
    const volPentagonalPrism = volume.volPentagonalPrism(1.0, 4.0, 8.0)
    expect(volPentagonalPrism).toBe(80.0)
  })
  it('with incorrect args', () => {
    expect(() => volume.volPentagonalPrism(-1.0, 4.0, 8.0)).toThrow()
    expect(() => volume.volPentagonalPrism(1.0, -4.0, 8.0)).toThrow()
    expect(() => volume.volPentagonalPrism(1.0, 4.0, -8.0)).toThrow()
    expect(() => volume.volPentagonalPrism('1.0', 4.0, 8.0)).toThrow()
    expect(() => volume.volPentagonalPrism(1.0, '4.0', 8.0)).toThrow()
    expect(() => volume.volPentagonalPrism(1.0, 4.0, '8.0')).toThrow()
    expect(() => volume.volPentagonalPrism(1000000000000000000000000, 4.0, 8.0)).toThrow()
    expect(() => volume.volPentagonalPrism(1.0, 4000000000000000000000000000, 8.0)).toThrow()
    expect(() => volume.volPentagonalPrism(1.0, 4.0, 8000000000000000000000000000)).toThrow()
  })
})

test('Testing on volSphere', () => {
  it('with correct args', () => {
    const volSphere = volume.volSphere(4.0)
    expect(volSphere).toBe(268.0826)
  })
  it('with incorrect args', () => {
    expect(() => volume.volSphere(-4.0)).toThrow()
    expect(() => volume.volSphere('4.0')).toThrow()
    expect(() => volume.volSphere(4000000000000000000000000)).toThrow()
  })
})

test('Testing on volHemisphere', () => {
  it('with correct args', () => {
    const volHemisphere = volume.volHemisphere(4.0)
    expect(volHemisphere).toBe(134.0413)
  })
  it('with incorrect args', () => {
    expect(() => volume.volHemisphere(-4.0)).toThrow()
    expect(() => volume.volHemisphere('4.0')).toThrow()
    expect(() => volume.volHemisphere(4000000000000000000000000)).toThrow()
  })
})
