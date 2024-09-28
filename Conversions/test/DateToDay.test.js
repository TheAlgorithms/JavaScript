import { DateToDay } from '../DateToDay'

describe('DateToDay', () => {
  it.each([
    ['18/02/2001', 'Sunday'],
    ['18/12/2020', 'Friday'],
    ['12/12/2012', 'Wednesday'],
    ['01/01/2001', 'Monday'],
    ['1/1/2020', 'Wednesday'],
    ['2/3/2014', 'Sunday'],
    ['28/2/2017', 'Tuesday'],
    ['02/03/2024', 'Saturday'],
    ['29/02/2024', 'Thursday']
  ])('%s is %s', (date, day) => {
    expect(DateToDay(date)).toBe(day)
  })

  it('should throw when input is not a string', () => {
    expect(() => DateToDay(100)).toThrowError()
  })

  it.each(['32/01/2000', '00/01/2000', '15/00/2000', '15/13/2000'])(
    'should throw when input is not a correct date %s',
    (wrongDate) => {
      expect(() => DateToDay(wrongDate)).toThrowError()
    }
  )
})
