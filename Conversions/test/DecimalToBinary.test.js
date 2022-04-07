import { decimalToBinary } from '../DecimalToBinary'

test('The Binary representation of 35 is 100011', () => {
  const res = decimalToBinary(35)
  expect(res).toBe('100011')
})

test('The Binary representation of 1 is 1', () => {
  const res = decimalToBinary(1)
  expect(res).toBe('1')
})

test('The Binary representation of 1000 is 1111101000', () => {
  const res = decimalToBinary(1000)
  expect(res).toBe('1111101000')
})

test('The Binary representation of 2 is 10', () => {
  const res = decimalToBinary(2)
  expect(res).toBe('10')
})

test('The Binary representation of 17 is 10001', () => {
  const res = decimalToBinary(17)
  expect(res).toBe('10001')
})
