import Rectangle from '../Rectangle'

const rectangle = new Rectangle(4, 2)

test('The area of a rectangle with length equal to 4 and width equal to 2', () => {
  expect(parseFloat(rectangle.area().toFixed(2))).toEqual(8.00)
})

test('The perimeter of a rectangle with length equal to 4 and width equal to 2', () => {
  expect(parseFloat(rectangle.perimeter().toFixed(2))).toEqual(12.00)
})

test('The length of each diagonal in a rectangle with length equal to 4 and width equal to 2', () => {
  expect(parseFloat(rectangle.diagonalLength().toFixed(2))).toEqual(4.47)
})

test('A rectangle with length equal to 4 and width equal to 2 is square ? : ', () => {
  expect(rectangle.isSquare()).toEqual(false)
})
