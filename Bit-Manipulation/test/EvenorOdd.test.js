import { evenOrOdd } from '../EvenorOdd'

test('check evenOrOdd of 25 is odd', () => {
  const res = evenOrOdd(25)
  expect(res).toBe('odd')
})

test('check evenOrOdd of 36 is even', () => {
  const res = evenOrOdd(36)
  expect(res).toBe('even')
})

test('check evenOrOdd of 0 is even', () => {
  const res = evenOrOdd(0)
  expect(res).toBe('even')
})

test('check evenOrOdd of -13 is odd', () => {
  const res = evenOrOdd(-13)
  expect(res).toBe('odd')
})

test('check evenOrOdd of 4294967295 is odd', () => {
  const res = evenOrOdd(4294967295)
  expect(res).toBe('odd')
})

test('check evenOrOdd of -36 is even', () => {
  const res = evenOrOdd(-36)
  expect(res).toBe('even')
})

test('check evenOrOdd of 21.1 throws error', () => {
  expect(() => evenOrOdd(21.1)).toThrow()
})

test('check evenOrOdd of {} throws error', () => {
  expect(() => evenOrOdd({})).toThrow()
})
