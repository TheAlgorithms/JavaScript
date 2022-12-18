import Pyramid from '../Pyramid'

const pyramid = new Pyramid(3, 5)

test('The Volume of a cone with base radius equal to 3 and height equal to 5', () => {
  expect(parseFloat(pyramid.volume().toFixed(2))).toEqual(15)
})

test('The Surface Area of a cone with base radius equal to 3 and height equal to 5', () => {
  expect(parseFloat(pyramid.surfaceArea().toFixed(2))).toEqual(40.32)
})
