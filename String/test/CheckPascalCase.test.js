import { CheckPascalCase } from '../CheckPascalCase'

test('CheckPascalCase(TheAlgorithms) -> true', () => {
  const word = 'TheAlgorithms'
  const res = CheckPascalCase(word)
  expect(res).toBeTruthy()
})

test('CheckPascalCase(theAlgorithms) -> false', () => {
  const word = 'theAlgorithms'
  const res = CheckPascalCase(word)
  expect(res).toBeFalsy()
})

test('CheckPascalCase(The Algorithms) -> false', () => {
  const word = 'The Algorithms'
  const res = CheckPascalCase(word)
  expect(res).toBeFalsy()
})

test('CheckPascalCase throws when input is not a string', () => {
  expect(() => CheckPascalCase(100)).toThrowError()
})
