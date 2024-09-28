import { getMonthDays } from '../GetMonthDays'

describe('Get the Days of a Month', () => {
  it.each([
    [1, 2024, 31],
    [2, 2024, 29],
    [3, 2024, 31],
    [4, 2024, 30],
    [5, 2024, 31],
    [6, 2024, 30],
    [7, 2024, 31],
    [8, 2024, 31],
    [9, 2024, 30],
    [10, 2024, 31],
    [11, 2024, 30],
    [12, 2024, 31],
    [1, 2023, 31],
    [2, 2023, 28],
    [3, 2023, 31],
    [4, 2023, 30],
    [5, 2023, 31],
    [6, 2023, 30],
    [7, 2023, 31],
    [8, 2023, 31],
    [9, 2023, 30],
    [10, 2023, 31],
    [11, 2023, 30],
    [12, 2023, 31]
  ])('Month %i in year %i has %i days', (month, year, expected) => {
    expect(getMonthDays(month, year)).toBe(expected)
  })

  it('expects to throw a type error', () => {
    expect(() => {
      getMonthDays(13, 2020)
    }).toThrow('Invalid Month Number.')
  })
})
