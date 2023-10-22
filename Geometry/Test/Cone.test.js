import Cone from '../Cone'

const cone = new Cone(3, 5)

test('The Volume of a cone with base radius equal to 3 and height equal to 5', () => {
  expect(parseFloat(cone.volume().toFixed(2))).toEqual(47.12)
})

test('The Surface Area of a cone with base radius equal to 3 and height equal to 5', () => {
  expect(parseFloat(cone.surfaceArea().toFixed(2))).toEqual(83.23)
})
