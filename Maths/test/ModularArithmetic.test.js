import { add, subtract, multiply, divide } from '../ModularArithmetic'

describe('Modular Arithmetic', () => {
  describe('add', () => {
    it('Should return 9999993 for 10000000 and 10000000', () => {
      expect(add(10000000, 10000000)).toBe(9999993)
    })
    it('Should return 9999986 for 10000000 and 20000000', () => {
      expect(add(10000000, 20000000)).toBe(9999986)
    })
  })

  describe('subtract', () => {
    it('Should return 1000000 for 10000000 and 9000000', () => {
      expect(subtract(10000000, 9000000)).toBe(1000000)
    })
    it('Should return 7 for 10000000 and 20000000', () => {
      expect(subtract(10000000, 20000000)).toBe(7)
    })
  })

  describe('multiply', () => {
    it('Should return 1000000 for 100000 and 10000', () => {
      expect(multiply(100000, 10000)).toBe(9999307)
    })
    it('Should return 7 for 100000 and 10000100', () => {
      expect(multiply(10000000, 20000000)).toBe(98)
    })
  })

  describe('divide', () => {
    it('Should return 4 for 3 and 11', () => {
      expect(divide(3, 11)).toBe(4)
    })
    it('Should return 2 for 18 and 7', () => {
      expect(divide(18, 7)).toBe(2)
    })
  })
})
