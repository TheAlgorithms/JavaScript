import Rectangle from '../Rectangle'

describe('Rectangle', () => {
  describe('Constructor', () => {
    test('creates a rectangle with valid dimensions', () => {
      const rectangle = new Rectangle(5, 3)
      expect(rectangle).toBeInstanceOf(Rectangle)
      expect(rectangle.length).toBe(5)
      expect(rectangle.breadth).toBe(3)
    })

    test('throws an error if length is not a positive number', () => {
      expect(() => new Rectangle(-1, 3)).toThrow(
        'length must be a positive number.'
      )
      expect(() => new Rectangle(0, 3)).toThrow(
        'length must be a positive number.'
      )
      expect(() => new Rectangle('5', 3)).toThrow(
        'length must be a positive number.'
      )
    })

    test('throws an error if breadth is not a positive number', () => {
      expect(() => new Rectangle(5, -1)).toThrow(
        'breadth must be a positive number.'
      )
      expect(() => new Rectangle(5, 0)).toThrow(
        'breadth must be a positive number.'
      )
      expect(() => new Rectangle(5, '3')).toThrow(
        'breadth must be a positive number.'
      )
    })
  })

  describe('Perimeter Calculation', () => {
    test('calculates perimeter correctly', () => {
      const rectangle = new Rectangle(5, 3)
      expect(rectangle.perimeter()).toBe(16)
    })

    test('calculates perimeter correctly for a square', () => {
      const square = new Rectangle(4, 4)
      expect(square.perimeter()).toBe(16)
    })
  })

  describe('Area Calculation', () => {
    test('calculates area correctly', () => {
      const rectangle = new Rectangle(5, 3)
      expect(rectangle.area()).toBe(15)
    })

    test('calculates area correctly for a square', () => {
      const square = new Rectangle(4, 4)
      expect(square.area()).toBe(16)
    })
  })

  describe('Getters', () => {
    test('length getter returns correct value', () => {
      const rectangle = new Rectangle(5, 3)
      expect(rectangle.length).toBe(5)
    })

    test('breadth getter returns correct value', () => {
      const rectangle = new Rectangle(5, 3)
      expect(rectangle.breadth).toBe(3)
    })
  })

  describe('toString Method', () => {
    test('returns correct string representation', () => {
      const rectangle = new Rectangle(5, 3)
      expect(rectangle.toString()).toBe(
        'Rectangle: length = 5, breadth = 3, area = 15, perimeter = 16'
      )
    })
  })
})
