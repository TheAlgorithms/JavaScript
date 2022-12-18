import { ModRing } from '../ModularArithmetic'

describe('Modular Arithmetic', () => {
  const MOD = 10000007
  let ring
  beforeEach(() => {
    ring = new ModRing(MOD)
  })

  describe('add', () => {
    it('Should return 9999993 for 10000000 and 10000000', () => {
      expect(ring.add(10000000, 10000000)).toBe(9999993)
    })
    it('Should return 9999986 for 10000000 and 20000000', () => {
      expect(ring.add(10000000, 20000000)).toBe(9999986)
    })
  })

  describe('subtract', () => {
    it('Should return 1000000 for 10000000 and 9000000', () => {
      expect(ring.subtract(10000000, 9000000)).toBe(1000000)
    })
    it('Should return 7 for 10000000 and 20000000', () => {
      expect(ring.subtract(10000000, 20000000)).toBe(7)
    })
  })

  describe('multiply', () => {
    it('Should return 1000000 for 100000 and 10000', () => {
      expect(ring.multiply(100000, 10000)).toBe(9999307)
    })
    it('Should return 7 for 100000 and 10000100', () => {
      expect(ring.multiply(10000000, 20000000)).toBe(98)
    })
  })

  describe('divide', () => {
    it('Should return 4 for 3 and 11', () => {
      expect(ring.divide(3, 11)).toBe(4)
    })
    it('Should return 2 for 18 and 7', () => {
      expect(ring.divide(18, 7)).toBe(2)
    })
  })
})
