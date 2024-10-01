import Ellipse from '../Ellipse'

describe('Ellipse', () => {
  describe('Constructor', () => {
    test('creates an ellipse with valid dimensions', () => {
      const ellipse = new Ellipse(5, 10)
      expect(ellipse).toBeInstanceOf(Ellipse)
      expect(ellipse.radiusX).toBe(5)
      expect(ellipse.radiusY).toBe(10)
    })

    test('throws an error if any dimension is invalid', () => {
      expect(() => new Ellipse(-5, 10)).toThrow(
        'radiusX must be a positive number.'
      )
      expect(() => new Ellipse(5, -10)).toThrow(
        'radiusY must be a positive number.'
      )
      expect(() => new Ellipse(NaN, 10)).toThrow(
        'radiusX must be a positive number.'
      )
      expect(() => new Ellipse(5, undefined)).toThrow(
        'radiusY must be a positive number.'
      )
    })
  })

  describe('Area Calculation', () => {
    test('calculates area correctly', () => {
      const ellipse = new Ellipse(5, 10)
      expect(ellipse.area()).toBeCloseTo(Math.PI * 5 * 10) // Area = π * rX * rY
    })
  })

  describe('Circumference Calculation', () => {
    test('calculates circumference correctly', () => {
      const ellipse = new Ellipse(5, 10)
      expect(ellipse.circumference()).toBeCloseTo(
        Math.PI * (3 * (5 + 10) - Math.sqrt((3 * 5 + 10) * (5 + 3 * 10)))
      ) // Circumference using Ramanujan's approximation
    })
  })

  describe('Getters', () => {
    test('radiusX getter returns correct value', () => {
      const ellipse = new Ellipse(5, 10)
      expect(ellipse.radiusX).toBe(5)
    })

    test('radiusY getter returns correct value', () => {
      const ellipse = new Ellipse(5, 10)
      expect(ellipse.radiusY).toBe(10)
    })
  })

  describe('String Representation', () => {
    test('returns correct string representation', () => {
      const ellipse = new Ellipse(5, 10)
      expect(ellipse.toString()).toBe(
        `Ellipse: radiusX = 5, radiusY = 10, area = ${
          Math.PI * 5 * 10
        }, circumference = ${
          Math.PI * (3 * (5 + 10) - Math.sqrt((3 * 5 + 10) * (5 + 3 * 10)))
        }`
      )
    })
  })
})
