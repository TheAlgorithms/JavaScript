import Kite from '../Kite'

describe('Kite', () => {
  describe('Constructor', () => {
    test('creates a kite with valid dimensions', () => {
      const kite = new Kite(5, 7, 10, 12)
      expect(kite).toBeInstanceOf(Kite)
      expect(kite.sideA).toBe(5)
      expect(kite.sideB).toBe(7)
      expect(kite.diagonal1).toBe(10)
      expect(kite.diagonal2).toBe(12)
    })

    test('throws an error if any dimension is invalid', () => {
      expect(() => new Kite(-5, 7, 10, 12)).toThrow(
        'sideA must be a positive number.'
      )
      expect(() => new Kite(5, -7, -10, null)).toThrow(
        'sideB must be a positive number.'
      )
      expect(() => new Kite(5, 7, null, null)).toThrow(
        'diagonal1 must be a positive number.'
      )
      expect(() => new Kite(5, 7, 10, undefined)).toThrow(
        'diagonal2 must be a positive number.'
      )
    })
  })

  describe('Area Calculation', () => {
    test('calculates area correctly', () => {
      const kite = new Kite(5, 7, 10, 12)
      expect(kite.area()).toBe(60) // Area = (10 * 12) / 2
    })
  })

  describe('Perimeter Calculation', () => {
    test('calculates perimeter correctly', () => {
      const kite = new Kite(5, 7, 10, 12)
      expect(kite.perimeter()).toBe(24) // Perimeter = 2 * (5 + 7)
    })
  })

  describe('Getters', () => {
    test('sideA getter returns correct value', () => {
      const kite = new Kite(5, 7, 10, 12)
      expect(kite.sideA).toBe(5)
    })

    test('sideB getter returns correct value', () => {
      const kite = new Kite(5, 7, 10, 12)
      expect(kite.sideB).toBe(7)
    })

    test('diagonal1 getter returns correct value', () => {
      const kite = new Kite(5, 7, 10, 12)
      expect(kite.diagonal1).toBe(10)
    })

    test('diagonal2 getter returns correct value', () => {
      const kite = new Kite(5, 7, 10, 12)
      expect(kite.diagonal2).toBe(12)
    })
  })

  describe('String Representation', () => {
    test('returns correct string representation', () => {
      const kite = new Kite(5, 7, 10, 12)
      expect(kite.toString()).toBe(
        'Kite: sideA = 5, sideB = 7, diagonal1 = 10, diagonal2 = 12, area = 60, perimeter = 24'
      )
    })
  })
})
