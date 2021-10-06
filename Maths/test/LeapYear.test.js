import { isLeapYear } from '../LeapYear'

describe('Leap Year', () => {
  it('Should return true on the year 2000', () => {
    expect(isLeapYear(2000)).toBe(true)
  })
  it('Should return false on the year 2001', () => {
    expect(isLeapYear(2001)).toBe(false)
  })
  it('Should return false on the year 2002', () => {
    expect(isLeapYear(2002)).toBe(false)
  })
  it('Should return false on the year 2003', () => {
    expect(isLeapYear(2003)).toBe(false)
  })
  it('Should return false on the year 2004', () => {
    expect(isLeapYear(2004)).toBe(true)
  })
  it('Should return false on the year 1900', () => {
    expect(isLeapYear(1900)).toBe(false)
  })
})
