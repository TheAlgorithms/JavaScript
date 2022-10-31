import { hornerScheme } from '../HornerScheme'

describe('Horner Scheme', () => {
  test('Case 1: testing conversion to the binary system', () => {
    expect(hornerScheme(210, 2)).toEqual('11010010')
    expect(hornerScheme(-210, 2)).toEqual('-11010010')
  })
  test('Case 2: testing conversion to the system with base 5', () => {
    expect(hornerScheme(210, 5)).toEqual('1320')
    expect(hornerScheme(-210, 5)).toEqual('-1320')
  })
  test('Case 3: testing conversion to the octal system', () => {
    expect(hornerScheme(210, 8)).toEqual('322')
    expect(hornerScheme(-210, 8)).toEqual('-322')
  })
  test('Case 4: testing 0', () => {
    expect(hornerScheme(0, 8)).toEqual('0')
    expect(hornerScheme(0, 8)).toEqual('0')
  })
  test('Case 5: testing throwing an exception', () => {
    expect(() => hornerScheme('string', 2)).toThrow()
    expect(() => hornerScheme(10, 'base')).toThrow()
    expect(() => hornerScheme(true, false)).toThrow()
  })
})
