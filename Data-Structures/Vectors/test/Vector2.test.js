import { Vector2 } from '../Vector2.js'

describe('Vector2', () => {
  describe('#equalsExactly', () => {
    it('should compare equality correctly', () => {
      expect(new Vector2(1, 0).equalsExactly(new Vector2(1, 0))).toBe(true)

      expect(new Vector2(1.23, 4.56).equalsExactly(new Vector2(0, 0))).toBe(false)
    })
  })

  describe('#equalsApproximately', () => {
    it('should compare equality (approximately) correctly', () => {
      expect(new Vector2(1, 0).equalsApproximately(new Vector2(1, 0.0000001), 0.000001))
        .toBe(true)

      expect(new Vector2(1.23, 4.56).equalsApproximately(new Vector2(1.24, 4.56), 0.000001))
        .toBe(false)
    })
  })

  describe('#add', () => {
    it('should add two vectors correctly', () => {
      expect(new Vector2(1, 0).add(new Vector2(0, 1)).equalsApproximately(new Vector2(1, 1), 0.000001))
        .toBe(true)

      expect(new Vector2(-3.3, -9).add(new Vector2(-2.2, 3)).equalsApproximately(new Vector2(-5.5, -6), 0.000001))
        .toBe(true)
    })
  })

  describe('#subtract', () => {
    it('should subtract two vectors correctly', () => {
      expect(new Vector2(1, 0).subtract(new Vector2(0, 1)).equalsApproximately(new Vector2(1, -1), 0.000001))
        .toBe(true)

      expect(new Vector2(234.5, 1.7).subtract(new Vector2(3.3, 2.7)).equalsApproximately(new Vector2(231.2, -1), 0.000001))
        .toBe(true)
    })
  })

  describe('#multiply', () => {
    it('should multiply two vectors correctly', () => {
      expect(new Vector2(1, 0).multiply(5).equalsApproximately(new Vector2(5, 0), 0.000001))
        .toBe(true)

      expect(new Vector2(3.41, -7.12).multiply(-3.1).equalsApproximately(new Vector2(-10.571, 22.072), 0.000001))
        .toBe(true)
    })
  })

  describe('#length', () => {
    it('should calculate it\'s length correctly', () => {
      expect(new Vector2(1, 0).length()).toBe(1)

      expect(new Vector2(-1, 1).length()).toBe(Math.sqrt(2))
    })
  })

  describe('#normalize', () => {
    it('should normalize vectors correctly', () => {
      expect(new Vector2(1, 0).normalize().equalsApproximately(new Vector2(1, 0), 0.000001))
        .toBe(true)

      expect(new Vector2(1, -1).normalize().equalsApproximately(new Vector2(Math.sqrt(2) / 2, -Math.sqrt(2) / 2), 0.000001))
        .toBe(true)
    })
  })

  describe('#distance', () => {
    it('should calculate the distance between two vectors correctly', () => {
      expect(new Vector2(0, 0).distance(new Vector2(0, -1))).toBe(1)

      expect(new Vector2(1, 0).distance(new Vector2(0, 1))).toBe(Math.sqrt(2))
    })
  })

  describe('#dotProduct', () => {
    it('should calculate the dot product correctly', () => {
      expect(new Vector2(1, 0).dotProduct(new Vector2(0, 1))).toBe(0)

      expect(new Vector2(1, 2).dotProduct(new Vector2(3, 4))).toBe(11) // 1 * 3 + 2 * 4
    })
  })

  describe('#rotate', () => {
    it('should rotate a vector correctly', () => {
      expect(new Vector2(0, -1).rotate(Math.PI / 2).equalsApproximately(new Vector2(1, 0), 0.000001))
        .toBe(true)

      expect(new Vector2(1.23, -4.56).rotate(Math.PI).equalsApproximately(new Vector2(-1.23, 4.56), 0.000001))
        .toBe(true)
    })
  })

  describe('#angleBetween', () => {
    it('should calculate the angle between two vectors correctly', () => {
      expect(new Vector2(1, 0).angleBetween(new Vector2(0, 1))).toBe(Math.PI / 2)

      expect(new Vector2(1, 0).angleBetween(new Vector2(1, -1))).toBe(-Math.PI / 4)
    })
  })
})
