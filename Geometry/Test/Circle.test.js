import Circle from '../Circle'

const circle = new Circle(3)

test('The area of a circle with radius equal to 3', () => {
  expect(parseFloat(circle.area().toFixed(2))).toEqual(28.27)
})

test('The perimeter of a circle with radius equal to 3', () => {
  expect(parseFloat(circle.perimeter().toFixed(2))).toEqual(18.85)
})
