import { intToBase } from '../IntToBase'

describe('Int to Base', () => {
  test('Conversion to the binary system', () => {
    expect(intToBase(210, 2)).toEqual('11010010')
    expect(intToBase(-210, 2)).toEqual('-11010010')
  })
  test('Conversion to the system with base 5', () => {
    expect(intToBase(210, 5)).toEqual('1320')
    expect(intToBase(-210, 5)).toEqual('-1320')
  })
  test('Conversion to the octal system', () => {
    expect(intToBase(210, 8)).toEqual('322')
    expect(intToBase(-210, 8)).toEqual('-322')
  })
  test('Output is 0', () => {
    expect(intToBase(0, 8)).toEqual('0')
    expect(intToBase(0, 8)).toEqual('0')
  })
  test('Throwing an exception', () => {
    expect(() => intToBase('string', 2)).toThrow()
    expect(() => intToBase(10, 'base')).toThrow()
    expect(() => intToBase(true, false)).toThrow()
  })
})
