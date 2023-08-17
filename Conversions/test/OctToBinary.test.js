import { octalToBinary } from '../OctToBinary'

test('The Binary representation of Octal number 46 is 100110', () => {
  const res = octalToBinary('46')
  expect(res).toBe('100110')
})

test('The Decimal representation of Octal number 32 is 11010', () => {
  const res = octalToBinary('32')
  expect(res).toBe('11010')
})

test('The Decimal representation of Octal number 17 is 1111', () => {
  const res = octalToBinary('17')
  expect(res).toBe('1111')
})
