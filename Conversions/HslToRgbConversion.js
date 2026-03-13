/**
 * Given a color in HSL format, convert it to RGB format.
 *
 * @see
 * For more info: https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
 *
 * @param {number[]} colorHsl - One dimensional array of integers (HSL color format).
 * @returns {number[]} - One dimensional array of integers (RGB color format).
 *
 * @example
 * const colorHsl = [120, 50, 15]
 *
 * const result = hslToRgb(colorHsl)
 *
 * // The function returns the corresponding color in RGB format:
 * // result = [19, 57, 19]
 */

const checkHslFormat = (colorHsl) => {
  return (
    colorHsl[0] >= 0 &&
    colorHsl[0] <= 360 &&
    colorHsl[1] >= 0 &&
    colorHsl[1] <= 100 &&
    colorHsl[2] >= 0 &&
    colorHsl[2] <= 100
  )
}

const hslToRgb = (colorHsl) => {
  if (!checkHslFormat(colorHsl)) {
    throw new Error('Input is not a valid HSL color.')
  }

  let luminance = colorHsl[2] / 100

  // Check if color is a shade of grey
  if (colorHsl[1] === 0) {
    let colorRgb = new Array(3).fill(255 * luminance)
    return colorRgb
  }

  let firstFormula = 0

  if (luminance < 0.5) {
    firstFormula = luminance * (1 + colorHsl[1] / 100)
  } else {
    firstFormula =
      luminance + colorHsl[1] / 100 - (luminance * colorHsl[1]) / 100
  }

  let secondFormula = 2 * luminance - firstFormula

  // Normalize Hue
  let hue = colorHsl[0] / 360
  let colorRgb = colorHsl
  colorRgb[0] = hue + 1 / 3
  colorRgb[1] = hue
  colorRgb[2] = hue - 1 / 3

  for (let i = 0; i <= 2; i++) {
    if (colorRgb[i] < 0) {
      colorRgb[i] += 1
    } else if (colorRgb[i] > 1) {
      colorRgb[i] -= 1
    }

    if (6 * colorRgb[i] < 1) {
      colorRgb[i] =
        secondFormula + (firstFormula - secondFormula) * 6 * colorRgb[i]
    } else if (2 * colorRgb[i] < 1) {
      colorRgb[i] = firstFormula
    } else if (3 * colorRgb[i] < 2) {
      colorRgb[i] =
        secondFormula +
        (firstFormula - secondFormula) * 6 * (2 / 3 - colorRgb[i])
    } else {
      colorRgb[i] = secondFormula
    }
    colorRgb[i] = Math.round(colorRgb[i] * 255)
  }
  return colorRgb
}

export { hslToRgb }
