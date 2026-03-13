/**
 * Speed conversion
 *
 * This function converts speed units including kilometers per hour (km/h),
 * meters per second (m/s), miles per hour (mph), and knots (knot).
 *
 * https://en.wikipedia.org/wiki/Kilometres_per_hour
 * https://en.wikipedia.org/wiki/Miles_per_hour
 * https://en.wikipedia.org/wiki/Metre_per_second
 * https://en.wikipedia.org/wiki/Knot_(unit)
 *
 * chart for unit conversions.
 *
 * @constant {Object} speedChart
 * @property {number} speedChart['km/h'] - Conversion factor for kilometers per hour (km/h).
 * @property {number} speedChart['m/s'] - Conversion factor for meters per second (m/s).
 * @property {number} speedChart['mph'] - Conversion factor for miles per hour (mph).
 * @property {number} speedChart['knot'] - Conversion factor for knots (knot).
 */
const speedChart = {
  'km/h': 1.0,
  'm/s': 3.6,
  mph: 1.609344,
  knot: 1.852
}

/**
 * Inverse speed conversion chart for unit conversions.
 *
 * @constant {Object} speedChartInverse
 * @property {number} speedChartInverse['km/h'] - Inverse conversion factor for kilometers per hour (km/h).
 * @property {number} speedChartInverse['m/s'] - Inverse conversion factor for meters per second (m/s).
 * @property {number} speedChartInverse['mph'] - Inverse conversion factor for miles per hour (mph).
 * @property {number} speedChartInverse['knot'] - Inverse conversion factor for knots (knot).
 */
const speedChartInverse = {
  'km/h': 1.0,
  'm/s': 0.277777778,
  mph: 0.621371192,
  knot: 0.539956803
}

/**
 * Convert speed from one unit to another using the speedChart and speedChartInverse.
 *
 * @param {number} speed - The speed value to be converted.
 * @param {string} inputUnit - The source unit (e.g., 'km/h', 'm/s', 'mph', 'knot').
 * @param {string} outputUnit - The target unit (e.g., 'km/h', 'm/s', 'mph', 'knot').
 * @throws {Error} Throws an error if the source or target unit is not recognized.
 * @returns {number} The converted speed value.
 */
const convertSpeed = (speed, inputUnit, outputUnit) => {
  if (!(outputUnit in speedChart) || !(inputUnit in speedChartInverse)) {
    const validUnits = Object.keys(speedChartInverse).join(', ')
    throw new Error(
      `Incorrect 'inputUnit' or 'outputUnit' value: ${inputUnit}, ${outputUnit}\n Valid values are: ${validUnits}`
    )
  }

  return parseFloat(
    (speed * speedChart[inputUnit] * speedChartInverse[outputUnit]).toFixed(3)
  )
}

export { convertSpeed }
