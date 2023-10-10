import { binaryToBcd } from '../BinaryToBcd'
describe('Binary To BCD', () => {
  test.each([
    ['1101101001', '100001110011'],
    ['11101111', '1000111001'],
    ['1010100010110', '101001110011000'],
    ['1111101000', '1000000000000'],
    ['111111111111111', '110010011101100111']
  ])(
    'Should return the equivalent BCD of the binary number.',
    (binaryNum, expected) => {
      expect(binaryToBcd(binaryNum)).toEqual(expected)
    }
  )

  test.each([
    ['111100001230', 'Input is not a valid binary number.'],
    ['781df', 'Input is not a valid binary number.'],
    ['0897111', 'Input is not a valid binary number.'],
    ['Dsd1022', 'Input is not a valid binary number.'],
    ['00000000000@#$%', 'Input is not a valid binary number.']
  ])('Should return the error message.', (binaryNum, expected) => {
    expect(() => binaryToBcd(binaryNum)).toThrowError(expected)
  })
})
