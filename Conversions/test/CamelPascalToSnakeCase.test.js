import { camelPascalToSnakeCase } from '../CamelPascalToSnakeCase'

describe('camelToSnakeCase', () => {
  it.each([
    ['someRandomString', 'some_random_string'],
    ['SomeRandomStr#ng', 'some_random_str_ng'],
    ['123someRandom123String123', '123some_random123_string123'],
    ['123SomeRandom123String123', '123_some_random123_string123'],
    ['123SomeRandom123String123', '123_some_random123_string123'],
    ['', '']
  ])('converts %s to snake_case %s', (input, expected) => {
    expect(camelPascalToSnakeCase(input)).toBe(expected)
  })

  it('throws an error when the input is not a string', () => {
    expect(() => camelPascalToSnakeCase(123)).toThrow(
      'Expected string as input'
    )
  })
})
