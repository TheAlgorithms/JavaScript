import Rectangle from '../Rectangle'

const rectangle = new Rectangle(5, 4)

test('Calculate the area of a rectangle', () => {
  expect(parseFloat(rectangle.calculateArea().toFixed(2))).toEqual(20.00)
})

test('Calculate the perimeter of a rectangle', () => {
  expect(parseFloat(rectangle.calculatePerimeter().toFixed(2))).toEqual(18.00)
})

test('Invalid input for rectangle', () => {
  expect(() => new Rectangle(0, 4)).toThrowError('Invalid input. Length and width must be greater than 0.')
})
