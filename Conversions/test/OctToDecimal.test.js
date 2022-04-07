import { octalToDecimal } from '../OctToDecimal'

test('The Decimal representation of Octal number 56 is 46', () => {
  const res = octalToDecimal(56)
  expect(res).toBe(46)
})

test('The Decimal representation of Octal number 99 is 81', () => {
  const res = octalToDecimal(99)
  expect(res).toBe(81)
})

test('The Decimal representation of Octal number 17 is 15', () => {
  const res = octalToDecimal(17)
  expect(res).toBe(15)
})

test('The Decimal representation of Octal number 100 is 64', () => {
  const res = octalToDecimal(100)
  expect(res).toBe(64)
})

test('The Decimal representation of Octal number 0 is 0', () => {
  const res = octalToDecimal(0)
  expect(res).toBe(0)
})
