import { DateToDay } from '../DateToDay'

test('The date 18/02/2001 is Monday', () => {
  const res = DateToDay('18/02/2001')
  expect(res).toBe('Monday')
})

test('The date 18/12/2020 is Friday', () => {
  const res = DateToDay('18/12/2020')
  expect(res).toBe('Friday')
})

test('The date 12/12/2012 is Wednesday', () => {
  const res = DateToDay('12/12/2012')
  expect(res).toBe('Wednesday')
})
test('The date 01/01/2001 is Friday', () => {
  const res = DateToDay('01/01/2001')
  expect(res).toBe('Friday')
})
