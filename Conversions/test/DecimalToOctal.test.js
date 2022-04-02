import { decimalToOctal } from '../DecimalToOctal'

test('The Octal representation of 8 is 10', () => {
  const res = decimalToOctal(8)
  expect(res).toBe(10)
})

test('The Octal representation of 1 is 1', () => {
  const res = decimalToOctal(1)
  expect(res).toBe(1)
})

test('The Octal representation of 0 is 0', () => {
  const res = decimalToOctal(0)
  expect(res).toBe(0)
})

test('The Octal representation of 100 is 144', () => {
  const res = decimalToOctal(100)
  expect(res).toBe(144)
})

test('The Octal representation of 111 is 157', () => {
  const res = decimalToOctal(111)
  expect(res).toBe(157)
})
