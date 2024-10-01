import Triangle from '../Triangle'

describe('Triangle', () => {
  describe('Triangle created with sides', () => {
    const triangle = new Triangle(3, 4, 5)

    test('The area of a triangle with sides 3, 4, 5', () => {
      expect(parseFloat(triangle.area().toFixed(2))).toEqual(6.0)
    })

    test('The perimeter of a triangle with sides 3, 4, 5', () => {
      expect(parseFloat(triangle.perimeter().toFixed(2))).toEqual(12.0)
    })
  })

  describe('Triangle created with base and height', () => {
    const triangle = new Triangle(6, 4)

    test('The area of a triangle with base 6 and height 4', () => {
      expect(parseFloat(triangle.area().toFixed(2))).toEqual(12.0)
    })

    test('The perimeter calculation throws an error for base-height triangle', () => {
      expect(() => triangle.perimeter()).toThrow(
        'Cannot calculate perimeter: not all sides are known.'
      )
    })
  })

  describe('Invalid triangle creation', () => {
    test('Creating a triangle with invalid sides throws an error', () => {
      expect(() => new Triangle(1, 1, 10)).toThrow(
        'Invalid triangle: The sum of any two sides must be greater than the third side.'
      )
    })

    test('Creating a triangle with invalid number of arguments throws an error', () => {
      expect(() => new Triangle(1)).toThrow(
        'Invalid number of arguments. Use either (base, height) or (sideA, sideB, sideC).'
      )
    })
  })
})
