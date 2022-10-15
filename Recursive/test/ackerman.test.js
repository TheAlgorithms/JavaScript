import { ackerman } from '../Ackerman'

describe('Ackerman', () => {
  it('should return 1', () => {
    expect(ackerman(0,0)).toBe(1)
  })

  it('should return 2', () => {
    expect(ackerman(1,0)).toBe(2)
  })

  it('should return 2', () => {
    expect(ackerman(1,0)).toBe(2)
  })

  it('should return 3', () => {
    expect(ackerman(1,1)).toBe(3)
  })

  it('should return 4', () => {
    expect(ackerman(1,2)).toBe(4)
  })
})