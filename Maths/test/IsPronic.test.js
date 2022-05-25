import { isPronic } from '../IsPronic'

describe('Testing isPronic function', () => {
  it('should return if the number is pronic or not', () => {
    const isPronicNumber = isPronic(2)
    expect(isPronicNumber).toBe(true)
  })

  it('should return if the number is pronic or not', () => {
    const isPronicNumber = isPronic(7)
    expect(isPronicNumber).toBe(false)
  })
})
