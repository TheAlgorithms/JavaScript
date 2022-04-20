import { decExp } from '../DecimalExpansion'

/**
 * Decimal
 */

describe('Finite Decimal Expansion', () => {
  it('1/2 = 0.5', () => {
    const [integer, decimals, cycleIndex] = decExp(1, 2)
    expect(integer).toBe(0)
    expect(decimals).toEqual([5])
    expect(cycleIndex).toBeUndefined()
  })

  it('1/5 = 0.2', () => {
    const [integer, decimals, cycleIndex] = decExp(1, 5)
    expect(integer).toBe(0)
    expect(decimals).toEqual([2])
    expect(cycleIndex).toBeUndefined()
  })

  it('1/8 = 0.125', () => {
    const [integer, decimals, cycleIndex] = decExp(1, 8)
    expect(integer).toBe(0)
    expect(decimals).toEqual([1, 2, 5])
    expect(cycleIndex).toBeUndefined()
  })

  it('255/40 = 6.375', () => {
    const [integer, decimals, cycleIndex] = decExp(255, 40)
    expect(integer).toBe(6)
    expect(decimals).toEqual([3, 7, 5])
    expect(cycleIndex).toBeUndefined()
  })
})

describe('Repeating Decimal Expansion', () => {
  it('1/3 = 0.(3)', () => {
    expect(decExp(1, 3)).toStrictEqual([0, [3], 0])
  })

  it('1/6 = 0.1(6)', () => {
    expect(decExp(1, 6)).toStrictEqual([0, [1, 6], 1])
  })

  it('1/7 = 0.(142857)', () => {
    expect(decExp(1, 7)).toStrictEqual([0, [1, 4, 2, 8, 5, 7], 0])
  })
})

/**
 * Binary
 */

describe('Finite Binary Expansion', () => {
  it('1/2 = 0.1₂', () => {
    const [integer, decimals, cycleIndex] = decExp(1, 2, 2)
    expect(integer).toBe(0)
    expect(decimals).toEqual([1])
    expect(cycleIndex).toBeUndefined()
  })

  it('1/8 = 0.001₂', () => {
    const [integer, decimals, cycleIndex] = decExp(1, 8, 2)
    expect(integer).toBe(0)
    expect(decimals).toEqual([0, 0, 1])
    expect(cycleIndex).toBeUndefined()
  })

  it('255/40 = 110.011₂', () => {
    const [integer, decimals, cycleIndex] = decExp(255, 40, 2)
    expect(integer).toBe(110)
    expect(decimals).toEqual([0, 1, 1])
    expect(cycleIndex).toBeUndefined()
  })
})

describe('Repeating Binary Expansion', () => {
  it('1/3 = 0.(01)₂', () => {
    expect(decExp(1, 3, 2)).toStrictEqual([0, [0, 1], 0])
  })

  it('1/5 = 0.(0011)₂', () => {
    expect(decExp(1, 5, 2)).toStrictEqual([0, [0, 0, 1, 1], 0])
  })

  it('1/6 = 0.0(01)₂', () => {
    expect(decExp(1, 6, 2)).toStrictEqual([0, [0, 0, 1], 1])
  })

  it('1/7 = 0.(001)₂', () => {
    expect(decExp(1, 7, 2)).toStrictEqual([0, [0, 0, 1], 0])
  })
})

/**
 * Octal
 */

describe('Finite Octal Expansion', () => {
  it('1/2 = 0.4₈', () => {
    const [integer, decimals, cycleIndex] = decExp(1, 2, 8)
    expect(integer).toBe(0)
    expect(decimals).toEqual([4])
    expect(cycleIndex).toBeUndefined()
  })

  it('1/8 = 0.1₈', () => {
    const [integer, decimals, cycleIndex] = decExp(1, 8, 8)
    expect(integer).toBe(0)
    expect(decimals).toEqual([1])
    expect(cycleIndex).toBeUndefined()
  })

  it('255/40 = 6.3₈', () => {
    const [integer, decimals, cycleIndex] = decExp(255, 40, 8)
    expect(integer).toBe(6)
    expect(decimals).toEqual([3])
    expect(cycleIndex).toBeUndefined()
  })
})

describe('Repeating Octal Expansion', () => {
  it('1/3 = 0.(25)₈', () => {
    expect(decExp(1, 3, 8)).toStrictEqual([0, [2, 5], 0])
  })

  it('1/5 = 0.(1463)₈', () => {
    expect(decExp(1, 5, 8)).toStrictEqual([0, [1, 4, 6, 3], 0])
  })

  it('1/6 = 0.1(25)₈', () => {
    expect(decExp(1, 6, 8)).toStrictEqual([0, [1, 2, 5], 1])
  })

  it('1/7 = 0.(1)₈', () => {
    expect(decExp(1, 7, 8)).toStrictEqual([0, [1], 0])
  })
})

/**
 * Integers
 */

describe('Integers', () => {
  it('1/1 = 1', () => {
    const [integer, decimals, cycleIndex] = decExp(1, 1)
    expect(integer).toBe(1)
    expect(decimals).toStrictEqual([])
    expect(cycleIndex).toBeUndefined()
  })

  it('5/5 = 1', () => {
    const [integer, decimals, cycleIndex] = decExp(5, 5)
    expect(integer).toBe(1)
    expect(decimals).toStrictEqual([])
    expect(cycleIndex).toBeUndefined()
  })

  it('2/1 = 2', () => {
    const [integer, decimals, cycleIndex] = decExp(2, 1)
    expect(integer).toBe(2)
    expect(decimals).toStrictEqual([])
    expect(cycleIndex).toBeUndefined()
  })

  it('9/3 = 3', () => {
    const [integer, decimals, cycleIndex] = decExp(9, 3)
    expect(integer).toBe(3)
    expect(decimals).toStrictEqual([])
    expect(cycleIndex).toBeUndefined()
  })
})

/**
 * Unsupported base
 */

describe('Throws on unsupported base', () => {
  it('negative base', () => {
    expect(() => decExp(1, 1, -2)).toThrow(RangeError)
  })
  it('base 0', () => {
    expect(() => decExp(1, 1, 0)).toThrow(RangeError)
  })
  it('base 1', () => {
    expect(() => decExp(1, 1, 1)).toThrow(RangeError)
  })
  it('base 11', () => {
    expect(() => decExp(1, 1, 11)).toThrow(RangeError)
  })
})
