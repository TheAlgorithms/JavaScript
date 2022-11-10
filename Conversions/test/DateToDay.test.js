import { DateToDay } from '../DateToDay'

test('The date 18/02/2001 is Sunday', () => {
  const res = DateToDay('18/02/2001')
  expect(res).toBe('Sunday')
})

test('The date 18/12/2020 is Friday', () => {
  const res = DateToDay('18/12/2020')
  expect(res).toBe('Friday')
})

test('The date 12/12/2012 is Wednesday', () => {
  const res = DateToDay('12/12/2012')
  expect(res).toBe('Wednesday')
})
test('The date 01/01/2001 is Monday', () => {
  const res = DateToDay('01/01/2001')
  expect(res).toBe('Monday')
})

test('The date 1/1/2020 is Wednesday', () => {
  const res = DateToDay('1/1/2020')
  expect(res).toBe('Wednesday')
})

test('The date 2/3/2014 is Sunday', () => {
  const res = DateToDay('2/3/2014')
  expect(res).toBe('Sunday')
})

test('The date 28/2/2017 is Tuesday', () => {
  const res = DateToDay('28/2/2017')
  expect(res).toBe('Tuesday')
})
