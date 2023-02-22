import { hexToDecimal } from '../HexToDecimal'

test('The decimal value of b', () => {
  const res = hexToDecimal("b")
  expect(res).toEqual(NaN)
})

test('The decimal value of ABCDEF', () => {
  const res = hexToDecimal("ABCDEF")
  expect(res).toEqual(11259375)
})
test('The decimal value of 1111', () => {
  const res = hexToDecimal("1111")
  expect(res).toEqual(4369)
})
