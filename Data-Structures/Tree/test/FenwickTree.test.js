import FenwickTree from '../FenwickTree'

describe('Fenwick Tree', () => {
  describe('Basic Operations', () => {
    test('should handle point updates and prefix queries', () => {
      const ft = new FenwickTree(5)
      ft.update(0, 1)
      ft.update(1, 2)
      ft.update(2, 3)
      ft.update(3, 4)
      ft.update(4, 5)

      expect(ft.query(0)).toBe(1)
      expect(ft.query(1)).toBe(3)
      expect(ft.query(2)).toBe(6)
      expect(ft.query(3)).toBe(10)
      expect(ft.query(4)).toBe(15)
    })

    test('should handle range queries', () => {
      const ft = new FenwickTree(5)
      ft.update(0, 10)
      ft.update(1, 20)
      ft.update(2, 30)
      ft.update(3, 40)
      ft.update(4, 50)

      expect(ft.rangeQuery(1, 3)).toBe(90)
      expect(ft.rangeQuery(0, 2)).toBe(60)
      expect(ft.rangeQuery(2, 4)).toBe(120)
    })
  })

  describe('Edge Cases', () => {
    test('should handle empty tree', () => {
      const ft = new FenwickTree(3)
      expect(ft.query(0)).toBe(0)
      expect(ft.query(1)).toBe(0)
      expect(ft.query(2)).toBe(0)
    })

    test('should handle single element', () => {
      const ft = new FenwickTree(1)
      ft.update(0, 42)
      expect(ft.query(0)).toBe(42)
      expect(ft.rangeQuery(0, 0)).toBe(42)
    })

    test('should handle negative values', () => {
      const ft = new FenwickTree(3)
      ft.update(0, 5)
      ft.update(1, -2)
      ft.update(2, 3)

      expect(ft.rangeQuery(0, 2)).toBe(6)
      expect(ft.rangeQuery(0, 1)).toBe(3)
    })
  })

  describe('Get and Set', () => {
    test('should get value at specific index', () => {
      const ft = new FenwickTree(3)
      ft.update(0, 5)
      ft.update(1, 10)
      ft.update(2, 15)

      expect(ft.get(0)).toBe(5)
      expect(ft.get(1)).toBe(10)
      expect(ft.get(2)).toBe(15)
    })

    test('should set value at specific index', () => {
      const ft = new FenwickTree(3)
      ft.update(0, 5)
      ft.update(1, 10)
      ft.update(2, 15)

      ft.set(1, 20)
      expect(ft.get(1)).toBe(20)
      expect(ft.rangeQuery(0, 2)).toBe(40)
    })
  })

  describe('Static Methods', () => {
    test('should build from array', () => {
      const arr = [1, 2, 3, 4, 5]
      const ft = FenwickTree.fromArray(arr)

      expect(ft.query(4)).toBe(15)
      expect(ft.rangeQuery(1, 3)).toBe(9)
    })
  })
})
