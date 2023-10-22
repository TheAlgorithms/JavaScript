/**
 * Given a color in RGB format, convert it to HSL format.
 *
 * For more info: https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
 *
 * @param {number[]} colorRgb - One dimensional array of integers (RGB color format).
 * @returns {number[]} - One dimensional array of integers (HSL color format).
 *
 * @example
 * const colorRgb = [24, 98, 118]
 *
 * const result = rgbToHsl(colorRgb)
 *
 * // The function returns the corresponding color in HSL format:
 * // result = [193, 66, 28]
 */

const checkRgbFormat = (colorRgb) => colorRgb.every((c) => c >= 0 && c <= 255)

const rgbToHsl = (colorRgb) => {
  if (!checkRgbFormat(colorRgb)) {
    throw new Error('Input is not a valid RGB color.')
  }

  let colorHsl = colorRgb

  let red = Math.round(colorRgb[0])
  let green = Math.round(colorRgb[1])
  let blue = Math.round(colorRgb[2])

  const limit = 255

  colorHsl[0] = red / limit
  colorHsl[1] = green / limit
  colorHsl[2] = blue / limit

  let minValue = Math.min(...colorHsl)
  let maxValue = Math.max(...colorHsl)

  let channel = 0

  if (maxValue === colorHsl[1]) {
    channel = 1
  } else if (maxValue === colorHsl[2]) {
    channel = 2
  }

  let luminance = (minValue + maxValue) / 2

  let saturation = 0

  if (minValue !== maxValue) {
    if (luminance <= 0.5) {
      saturation = (maxValue - minValue) / (maxValue + minValue)
    } else {
      saturation = (maxValue - minValue) / (2 - maxValue - minValue)
    }
  }

  let hue = 0

  if (saturation !== 0) {
    if (channel === 0) {
      hue = (colorHsl[1] - colorHsl[2]) / (maxValue - minValue)
    } else if (channel === 1) {
      hue = 2 + (colorHsl[2] - colorHsl[0]) / (maxValue - minValue)
    } else {
      hue = 4 + (colorHsl[0] - colorHsl[1]) / (maxValue - minValue)
    }
  }

  hue *= 60

  if (hue < 0) {
    hue += 360
  }

  colorHsl[0] = Math.round(hue)
  colorHsl[1] = Math.round(saturation * 100)
  colorHsl[2] = Math.round(luminance * 100)

  return colorHsl
}

export { rgbToHsl }
