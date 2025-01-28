import { josephus } from '../Josephus'

describe('Josephus', () => {
  const collection = [1, 2, 3, 4, 5, 6, 7]
  const collection1 = [1]
  const collection2 = []

  it('should return 4 for step size of 3', () => {
    const step = 3
    expect(josephus([...collection], step)).toBe(4)
  })

  it('should return 4 for a step size of 10', () => {
    const step = 10
    expect(josephus([...collection], step)).toBe(4)
  })

  it('should return null for a step size of 0 as it is invalid', () => {
    const step = 0
    expect(josephus([...collection], step)).toBeNull()
  })

  it('should return 7 for a step size of 1000', () => {
    const step = 1000
    expect(josephus([...collection], step)).toBe(7)
  })

  it('should return null for a step size of -1 as it is invalid', () => {
    const step = -1
    expect(josephus([...collection], step)).toBeNull()
  })
  it('should return 1 for a collection with just 1', () => {
    const step = 2
    expect(josephus([...collection1], step)).toBe(1)
  })
  it('should return null for an empty collection as it is invalid', () => {
    const step = 3
    expect(josephus([...collection2], step)).toBeNull()
  })
})
