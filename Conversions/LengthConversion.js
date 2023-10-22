/**
 * Converts a length from one unit to another.
 *
 * @param {number} length - The length to convert.
 * @param {string} fromUnit - The unit to convert from (e.g., "km", "m", "cm").
 * @param {string} toUnit - The unit to convert to (e.g., "km", "m", "cm").
 * @returns {number} The converted length.
 * @throws {Error} If the units are invalid or not found in the conversion dictionary.
 */

const lengthConversion = (length, fromUnit, toUnit) => {
  // Define a dictionary to map units to meters
  const meters = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    inch: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
    mi: 1609.34
  }

  // Check if the units are in the dictionary, otherwise, throw an error
  if (!(fromUnit in meters) || !(toUnit in meters)) {
    throw new Error('Invalid units')
  }

  // Perform the conversion
  const metersFrom = length * meters[fromUnit]
  const convertedLength = metersFrom / meters[toUnit]

  return convertedLength
}

export { lengthConversion }
