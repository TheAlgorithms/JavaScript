import { getMonthDays } from '../GetMonthDays'

describe('Get the Days of a Month', () => {
  it('expects to return 28', () => {
    expect(getMonthDays(2, 2018)).toEqual(28)
  })

  it('expects to return 30', () => {
    expect(getMonthDays(6, 254)).toEqual(30)
  })

  it('expects to return 29', () => {
    expect(getMonthDays(2, 2024)).toEqual(29)
  })

  it('expects to throw a type error', () => {
    expect(() => { getMonthDays(13, 2020) }).toThrow('Invalid Month Number.')
  })
})
