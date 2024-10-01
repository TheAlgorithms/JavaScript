import Rectangle from '../Rectangle'

const rectangle = new Rectangle(3, 4)

test('The perimeter of rectangle with length equal to 3 and breadth equal to 4', () => {
  expect(parseFloat(rectangle.perimeter().toFixed(2))).toEqual(14.0)
})

test('The area of rectangle with length equal to 3 and breadth equal to 4', () => {
  expect(parseFloat(rectangle.area().toFixed(2))).toEqual(12.0)
})
