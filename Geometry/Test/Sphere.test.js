import Sphere from '../Sphere'

const sphere = new Sphere(3)

test('The Volume of a sphere with base radius equal to 3 and height equal to 5', () => {
  expect(parseFloat(sphere.volume().toFixed(2))).toEqual(113.1)
})

test('The Surface Area of a sphere with base radius equal to 3 and height equal to 5', () => {
  expect(parseFloat(sphere.surfaceArea().toFixed(2))).toEqual(113.1)
})
