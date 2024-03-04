import { DateDayDifference } from '../DateDayDifference'

describe('DateDayDifference', () => {
  it.each([
    ['17/08/2002', '10/10/2020', 6629],
    ['18/02/2001', '16/03/2022', 7696],
    ['11/11/2011', '12/12/2012', 397],
    ['01/01/2001', '16/03/2011', 3726],
    ['04/03/2024', '04/03/2024', 0],
    ['03/03/2024', '04/03/2024', 1],
    ['02/03/2024', '04/03/2024', 2],
    ['01/03/2024', '04/03/2024', 3],
    ['29/02/2024', '04/03/2024', 4],
    ['04/03/2024', '04/03/2025', 365],
    ['04/03/2023', '04/03/2024', 366]
  ])(
    'The difference between %s and %s is %i',
    (firstDate, secondDate, expected) => {
      expect(DateDayDifference(firstDate, secondDate)).toBe(expected)
      expect(DateDayDifference(secondDate, firstDate)).toBe(expected)
    }
  )

  it('should throw when any input is not a string', () => {
    expect(() => DateDayDifference(10102024, '11/10/2024')).toThrowError()
    expect(() => DateDayDifference('11/10/2024', 10102024)).toThrowError()
  })

  it.each(['32/01/2000', '00/01/2000', '15/00/2000', '15/13/2000'])(
    'should throw when input is not a correct date %s',
    (wrongDate) => {
      expect(() => DateDayDifference(wrongDate, '04/03/2024')).toThrowError()
      expect(() => DateDayDifference('04/03/2024', wrongDate)).toThrowError()
    }
  )
})
