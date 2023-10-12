import { hslToRgb } from '../HslToRgbConversion'
describe('HslToRgbConversion', () => {
  test.each([
    [
      [311, 84, 46],
      [216, 19, 180]
    ],
    [
      [119, 83, 41],
      [21, 191, 18]
    ],
    [
      [225, 33, 47],
      [80, 100, 159]
    ],
    [
      [349, 98, 16],
      [81, 1, 15]
    ],
    [
      [96, 100, 4],
      [8, 20, 0]
    ],
    [
      [0, 0, 0],
      [0, 0, 0]
    ],
    [
      [0, 0, 100],
      [255, 255, 255]
    ]
  ])('Should return the color in RGB format.', (colorHsl, expected) => {
    expect(hslToRgb(colorHsl)).toEqual(expected)
  })

  test.each([
    [[360, 180, 9], 'Input is not a valid HSL color.'],
    [[-90, 46, 8], 'Input is not a valid HSL color.'],
    [[1, 39, 900], 'Input is not a valid HSL color.'],
    [[1, 139, 100], 'Input is not a valid HSL color.']
  ])('Should return the error message.', (colorHsl, expected) => {
    expect(() => hslToRgb(colorHsl)).toThrowError(expected)
  })
})
