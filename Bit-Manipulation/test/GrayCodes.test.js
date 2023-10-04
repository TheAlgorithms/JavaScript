import { generateGrayCodes } from '../GrayCodes.js'

describe('Gray codes', () => {
  test.each([
    [0, [0b0]],
    [1, [0b0, 0b1]],
    [2, [0b00, 0b01, 0b11, 0b10]],
    [3, [0b000, 0b001, 0b011, 0b010, 0b110, 0b111, 0b101, 0b100]],
    [
      4,
      [
        0b0000, 0b0001, 0b0011, 0b0010, 0b0110, 0b0111, 0b0101, 0b0100, 0b1100,
        0b1101, 0b1111, 0b1110, 0b1010, 0b1011, 0b1001, 0b1000
      ]
    ]
  ])('n = %i -> %j', (n, expected) => {
    expect(generateGrayCodes(n)).toEqual(expected)
  })
})
