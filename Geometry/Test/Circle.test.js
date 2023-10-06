import Circle from '../Circle'

const circle = new Circle(3)

test('The radius of the circle should be initialized to 3', () => {
  expect(circle.radius).toEqual(3)
})

test('The area of a circle with radius equal to 3', () => {
  expect(parseFloat(circle.area().toFixed(2))).toEqual(28.27)
})

test('The perimeter of a circle with radius equal to 3', () => {
  expect(parseFloat(circle.perimeter().toFixed(2))).toEqual(18.85)
})

test('The diameter of a circle with radius equal to 3', () => {
  expect(parseFloat(circle.diameter().toFixed(2))).toEqual(6.0)
})

test('Change radius and check if it reflects in calculations', () => {
  circle.changeRadius(4)
  expect(circle.radius).toEqual(4)
  expect(parseFloat(circle.area().toFixed(2))).toEqual(50.27)
})

test('The Lenght of arc in radian of the circle', () => {
  expect(parseFloat(circle.lenghtOfArc(2.1).toFixed(2))).toEqual(8.4)
})
