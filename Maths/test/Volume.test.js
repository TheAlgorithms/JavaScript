import * as volume from '../Volume'

test('Testing on volCuboid', () => {
  const volCuboid = volume.volCuboid(2.0, 5.0, 3)
  expect(volCuboid).toBe(30.0)
})

test('Testing on volCube', () => {
  const volCube = volume.volCube(2.0)
  expect(volCube).toBe(8.0)
})

test('Testing on volCone', () => {
  const volCone = volume.volCone(3.0, 8.0)
  expect(volCone).toBe(75.39822368615503)
})

test('Testing on volPyramid', () => {
  const volPyramid = volume.volPyramid(2.0, 3.0, 8.0)
  expect(volPyramid).toBe(16.0)
})

test('Testing on volCylinder', () => {
  const volCylinder = volume.volCylinder(3.0, 8.0)
  expect(volCylinder).toBe(226.1946710584651)
})

test('Testing on volTriangularPrism', () => {
  const volTriangularPrism = volume.volTriangularPrism(3.0, 6.0, 8.0)
  expect(volTriangularPrism).toBe(72.0)
})

test('Testing on volPentagonalPrism', () => {
  const volPentagonalPrism = volume.volPentagonalPrism(1.0, 4.0, 8.0)
  expect(volPentagonalPrism).toBe(80.0)
})

test('Testing on volSphere', () => {
  const volSphere = volume.volSphere(4.0)
  expect(volSphere).toBe(268.082573106329)
})

test('Testing on volHemisphere', () => {
  const volHemisphere = volume.volHemisphere(4.0)
  expect(volHemisphere).toBe(134.0412865531645)
})
