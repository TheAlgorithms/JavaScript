import { convertBase } from '../ConvertBase'

test('Converting number 10010 from base 4 to base 10 should be 260', () => {
  const res = convertBase(10010, 4, 10)
  expect(res).toBe(260)
})

test('Converting number 1101 from base 2 to base 10 should be 13', () => {
  const res = convertBase(1101, 2, 10)
  expect(res).toBe(13)
})

test('Converting number 213 from base 5 to base 8 should be 53', () => {
  const res = convertBase(213, 5, 8)
  expect(res).toBe(72)
})

test('Converting number 37 from base 8 to base 3 should be 2111', () => {
  const res = convertBase(37, 8, 3)
  expect(res).toBe(1011)
})

test('Converting number 123 from base 6 to base 4 should be 33', () => {
  const res = convertBase(123, 6, 4)
  expect(res).toBe(303)
})

test('Converting number 1010 from base 2 to base 9 should be 74', () => {
  const res = convertBase(1010, 2, 9)
  expect(res).toBe(11)
})

test('Converting number 731 from base 7 to base 5 should be 2121', () => {
  const res = convertBase(731, 7, 5)
  expect(res).toBe(2430)
})

test('Converting number 345 from base 9 to base 10 should be 344', () => {
  const res = convertBase(345, 9, 10)
  expect(res).toBe(284)
})
