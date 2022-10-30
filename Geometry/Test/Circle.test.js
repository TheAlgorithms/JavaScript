import Circle from '../Circle'

const circle = new Circle(3)

test('The area of a circle with radius equal to 3', () => {
  const area = circle.area().toFixed(2)
  expect(parseFloat(area)).toEqual(28.27)
})

test('The perimeter of a circle with radius equal to 3', () => {
  const perimeter = circle.perimeter().toFixed(2)
  expect(parseFloat(perimeter)).toEqual(18.85)
})
