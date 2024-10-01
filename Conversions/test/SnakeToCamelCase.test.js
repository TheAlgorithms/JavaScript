import { snakeToCamelCase } from '../SnakeToCamelCase'

describe('snakeToCamelCase', () => {
  it.each([
    ['hello_world', 'helloWorld'],
    ['snake_case_example', 'snakeCaseExample'],
    ['_leading_underscore', 'leadingUnderscore'],
    ['trailing_underscore_', 'trailingUnderscore'],
    ['__multiple__underscores__', 'multipleUnderscores'],
    ['snake_case@example', 'snakeCaseexample'],
    ['_leading_underscore_#', 'leadingUnderscore'],
    ['trailing_underscore_&', 'trailingUnderscore'],
    ['', '']
  ])('converts %s to snake_case %s', (input, expected) => {
    expect(snakeToCamelCase(input)).toBe(expected)
  })

  it('throws an error when the input is not a string', () => {
    expect(() => snakeToCamelCase(123)).toThrow('Expected string as input')
  })
})
