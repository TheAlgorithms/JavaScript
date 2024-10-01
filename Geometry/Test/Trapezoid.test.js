import Trapezoid from '../Trapezoid'

describe('Trapezoid', () => {
  describe('Constructor', () => {
    test('creates a trapezoid with valid dimensions', () => {
      const trapezoid = new Trapezoid(5, 10, 7)
      expect(trapezoid).toBeInstanceOf(Trapezoid)
      expect(trapezoid.base1).toBe(5)
      expect(trapezoid.base2).toBe(10)
      expect(trapezoid.height).toBe(7)
      expect(trapezoid.sides).toEqual([null, null])
    })

    test('creates a trapezoid with all sides known', () => {
      const trapezoid = new Trapezoid(5, 10, 7, 3, 4)
      expect(trapezoid.sides).toEqual([3, 4])
    })

    test('throws an error if any dimension is invalid', () => {
      expect(() => new Trapezoid(-5, 10, 7)).toThrow(
        'base1 must be a positive number.'
      )
      expect(() => new Trapezoid(5, -10, -7)).toThrow(
        'base2 must be a positive number.'
      )
      expect(() => new Trapezoid(5, NaN, 7)).toThrow(
        'base2 must be a positive number.'
      )
      expect(() => new Trapezoid(5, 10, -7)).toThrow(
        'height must be a positive number.'
      )
    })
  })

  describe('Area Calculation', () => {
    test('calculates area correctly', () => {
      const trapezoid = new Trapezoid(5, 10, 7)
      expect(trapezoid.area()).toBe(52.5) // Area = ((5 + 10) / 2) * 7
    })
  })

  describe('Perimeter Calculation', () => {
    test('calculates perimeter correctly when all sides are known', () => {
      const trapezoid = new Trapezoid(5, 10, 7, 3, 4)
      expect(trapezoid.perimeter()).toBe(22) // Perimeter = base1 + base2 + sideA + sideB
    })

    test('throws an error if not all sides are known', () => {
      const trapezoid = new Trapezoid(5, 10, 7)
      expect(() => trapezoid.perimeter()).toThrow(
        'Cannot calculate perimeter: not all sides are known.'
      )
    })
  })

  describe('Getters', () => {
    test('base1 getter returns correct value', () => {
      const trapezoid = new Trapezoid(5, 10, 7)
      expect(trapezoid.base1).toBe(5)
    })

    test('base2 getter returns correct value', () => {
      const trapezoid = new Trapezoid(5, 10, 7)
      expect(trapezoid.base2).toBe(10)
    })

    test('height getter returns correct value', () => {
      const trapezoid = new Trapezoid(5, 10, 7)
      expect(trapezoid.height).toBe(7)
    })

    test('sides getter returns correct values', () => {
      const trapezoid = new Trapezoid(5, 10, 7, 3, 4)
      expect(trapezoid.sides).toEqual([3, 4])
    })
  })

  describe('String Representation', () => {
    test('returns correct string representation when sides are unknown', () => {
      const trapezoid = new Trapezoid(5, 10, 7)
      expect(trapezoid.toString()).toBe(
        'Trapezoid: base1 = 5, base2 = 10, height = 7, sideA = unknown, sideB = unknown, area = 52.5, perimeter = unknown'
      )
    })

    test('returns correct string representation when all sides are known', () => {
      const trapezoid = new Trapezoid(5, 10, 7, 3, 4)
      expect(trapezoid.toString()).toBe(
        'Trapezoid: base1 = 5, base2 = 10, height = 7, sideA = 3, sideB = 4, area = 52.5, perimeter = 22'
      )
    })
  })
})
