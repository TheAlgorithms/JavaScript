import { DateDayDifference } from '../DateDayDifference'

test('The difference between 17/08/2002 & 10/10/2020 is 6630', () => {
  const res = DateDayDifference('17/08/2002', '10/10/2020')
  expect(res).toBe(6630)
})

test('The difference between 18/02/2001 & 16/03/2022 is 7696', () => {
  const res = DateDayDifference('18/02/2001', '16/03/2022')
  expect(res).toBe(7696)
})

test('The difference between 11/11/2011 & 12/12/2012 is 398', () => {
  const res = DateDayDifference('11/11/2011', '12/12/2012')
  expect(res).toBe(398)
})

test('The difference between 01/01/2001 & 16/03/2011 is 3727', () => {
  const res = DateDayDifference('01/01/2001', '16/03/2011')
  expect(res).toBe(3727)
})
