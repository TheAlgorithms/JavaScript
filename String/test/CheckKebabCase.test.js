import { CheckKebabCase } from '../CheckKebabCase'

test('CheckKebabCase(The-Algorithms) -> true', () => {
  const word = 'The-Algorithms'
  const res = CheckKebabCase(word)
  expect(res).toBeTruthy()
})

test('CheckKebabCase(The Algorithms) -> false', () => {
  const word = 'The Algorithms'
  const res = CheckKebabCase(word)
  expect(res).toBeFalsy()
})

test('CheckKebabCase throws when input is not a string', () => {
  expect(() => CheckKebabCase(100)).toThrowError()
})
