import { rgbToHsl } from '../RgbHslConversion'
describe('RgbHslConversion', () => {
  test.each([
    [
      [215, 19, 180],
      [311, 84, 46]
    ],
    [
      [21, 190, 18],
      [119, 83, 41]
    ],
    [
      [80, 100, 160],
      [225, 33, 47]
    ],
    [
      [80, 1, 16],
      [349, 98, 16]
    ],
    [
      [8, 20, 0],
      [96, 100, 4]
    ],
    [
      [0, 0, 0],
      [0, 0, 0]
    ],
    [
      [255, 255, 255],
      [0, 0, 100]
    ]
  ])('Should return the color in HSL format.', (colorRgb, expected) => {
    expect(rgbToHsl(colorRgb)).toEqual(expected)
  })

  test.each([
    [[256, 180, 9], 'Input is not a valid RGB color.'],
    [[-90, 46, 8], 'Input is not a valid RGB color.'],
    [[1, 39, 900], 'Input is not a valid RGB color.']
  ])('Should return the error message.', (colorRgb, expected) => {
    expect(() => rgbToHsl(colorRgb)).toThrowError(expected)
  })
})
