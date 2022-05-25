import { isPronic } from '../IsPronic'

describe('Testing isPronic function', () => {
  it('should return if the number is pronic or not for even number', () => {
    const isPronicNumber = isPronic(2)
    expect(isPronicNumber).toBe(true)
  })

  it('should return if the number is pronic or not for even number', () => {
    const isPronicNumber = isPronic(4)
    expect(isPronicNumber).toBe(false)
  })

  it('should return false for odd number', () => {
    const isPronicNumber = isPronic(7)
    expect(isPronicNumber).toBe(false)
  })
})
