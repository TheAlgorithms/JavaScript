import { dateToMonth } from '../dateToMonth'

test('The date 10/01/2001 is January', () => {
  const res = dateToMonth('10/01/2001')
  expect(res).toBe('January')
})

test('The date 10/02/2001 is February', () => {
  const res = dateToMonth('10/02/2001')
  expect(res).toBe('February')
})

test('The date 10/03/2001 is March', () => {
  const res = dateToMonth('10/03/2001')
  expect(res).toBe('March')
})

test('The date 10/04/2001 is April', () => {
  const res = dateToMonth('10/04/2001')
  expect(res).toBe('April')
})

test('The date 10/05/2001 is May', () => {
  const res = dateToMonth('10/05/2001')
  expect(res).toBe('May')
})

test('The date 10/06/2001 is June', () => {
  const res = dateToMonth('10/06/2001')
  expect(res).toBe('June')
})

test('The date 10/07/2001 is July', () => {
  const res = dateToMonth('10/07/2001')
  expect(res).toBe('July')
})

test('The date 10/08/2001 is August', () => {
  const res = dateToMonth('10/08/2001')
  expect(res).toBe('August')
})

test('The date 10/09/2001 is September', () => {
  const res = dateToMonth('10/09/2001')
  expect(res).toBe('September')
})

test('The date 10/10/2001 is October', () => {
  const res = dateToMonth('10/10/2001')
  expect(res).toBe('October')
})

test('The date 10/11/2001 is November', () => {
  const res = dateToMonth('10/11/2001')
  expect(res).toBe('November')
})

test('The date 10/12/2001 is December', () => {
  const res = dateToMonth('10/12/2001')
  expect(res).toBe('December')
})
