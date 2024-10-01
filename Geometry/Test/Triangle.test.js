import Triangle from '../Triangle'

describe('Triangle', () => {
  describe('Constructor', () => {
    test('creates a triangle with base and height', () => {
      const triangle = new Triangle(5, 10)
      expect(triangle).toBeInstanceOf(Triangle)
      expect(triangle.base).toBe(5)
      expect(triangle.height).toBe(10)
      expect(triangle.sides).toEqual([5, null, null])
    })

    test('creates a triangle with three sides', () => {
      const triangle = new Triangle(3, 4, 5)
      expect(triangle).toBeInstanceOf(Triangle)
      expect(triangle.sides).toEqual([3, 4, 5])
      expect(triangle.base).toBe(3) // Assuming base is one of the sides
      expect(triangle.height).toBe(null)
    })

    test('throws an error if invalid number of arguments', () => {
      expect(() => new Triangle()).toThrow(
        'Invalid number of arguments. Use either (base, height) or (sideA, sideB, sideC).'
      )
      expect(() => new Triangle(1)).toThrow(
        'Invalid number of arguments. Use either (base, height) or (sideA, sideB, sideC).'
      )
    })

    test('throws an error if the triangle is invalid', () => {
      expect(() => new Triangle(1, 2, 3)).toThrow(
        'Invalid triangle: The sum of any two sides must be greater than the third side.'
      )
    })
  })

  describe('Area Calculation', () => {
    test('calculates area correctly using base and height', () => {
      const triangle = new Triangle(5, 10)
      expect(triangle.area()).toBe(25)
    })

    test("calculates area correctly using Heron's formula", () => {
      const triangle = new Triangle(3, 4, 5)
      expect(triangle.area()).toBe(6) // Area of a 3-4-5 triangle
    })
  })

  describe('Perimeter Calculation', () => {
    test('calculates perimeter correctly for three sides', () => {
      const triangle = new Triangle(3, 4, 5)
      expect(triangle.perimeter()).toBe(12) // 3 + 4 + 5
    })

    test('throws an error if not all sides are known', () => {
      const triangle = new Triangle(5, 10)
      expect(() => triangle.perimeter()).toThrow(
        'Cannot calculate perimeter: not all sides are known.'
      )
    })
  })

  describe('Getters', () => {
    test('base getter returns correct value', () => {
      const triangle = new Triangle(5, 10)
      expect(triangle.base).toBe(5)
    })

    test('height getter returns correct value', () => {
      const triangle = new Triangle(5, 10)
      expect(triangle.height).toBe(10)
    })

    test('sides getter returns correct values', () => {
      const triangle = new Triangle(3, 4, 5)
      expect(triangle.sides).toEqual([3, 4, 5])
    })
  })

  describe('String Representation', () => {
    test('returns correct string representation for base and height', () => {
      const triangle = new Triangle(5, 10)
      expect(triangle.toString()).toBe(
        'Triangle: base = 5, height = 10, sides = 5, unknown, unknown, area = 25, perimeter = unknown'
      )
    })

    test('returns correct string representation for three sides', () => {
      const triangle = new Triangle(3, 4, 5)
      expect(triangle.toString()).toBe(
        'Triangle: base = 3, height = unknown, sides = 3, 4, 5, area = 6, perimeter = 12'
      )
    })
  })
})
