/**
 * Converts RGB color values to a hexadecimal color code.
 *
 * @param {number} r - The red color value (0-255).
 * @param {number} g - The green color value (0-255).
 * @param {number} b - The blue color value (0-255).
 * @returns {string} The hexadecimal color code representing the RGB values.
 * @throws {TypeError} If any of the arguments is not a number.
 */
function RGBToHex(r, g, b) {
  if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') {
    throw new TypeError('argument is not a Number')
  }

  const toHex = (n) => (n || '0').toString(16).padStart(2, '0')

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export { RGBToHex }

// > RGBToHex(255, 255, 255)
// '#ffffff'

// > RGBToHex(255, 99, 71)
// '#ff6347'
