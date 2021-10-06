/**
 * Method to generate the image of the Mandelbrot set.
 *
 * Two types of coordinates are used: image-coordinates that refer to the pixels and figure-coordinates that refer to
 * the complex numbers inside and outside the Mandelbrot set. The figure-coordinates in the arguments of this method
 * determine which section of the Mandelbrot set is viewed. The main area of the Mandelbrot set is roughly between
 * "-1.5 < x < 0.5" and "-1 < y < 1" in the figure-coordinates.
 *
 * The Mandelbrot set is the set of complex numbers "c" for which the series "z_(n+1) = z_n * z_n + c" does not diverge,
 * i.e. remains bounded. Thus, a complex number "c" is a member of the Mandelbrot set if, when starting with "z_0 = 0"
 * and applying the iteration repeatedly, the absolute value of "z_n" remains bounded for all "n > 0". Complex numbers
 * can be written as "a + b*i": "a" is the real component, usually drawn on the x-axis, and "b*i" is the imaginary
 * component, usually drawn on the y-axis. Most visualizations of the Mandelbrot set use a color-coding to indicate
 * after how many steps in the series the numbers outside the set cross the divergence threshold. Images of the
 * Mandelbrot set exhibit an elaborate and infinitely complicated boundary that reveals progressively ever-finer
 * recursive detail at increasing magnifications, making the boundary of the Mandelbrot set a fractal curve.
 *
 * (description adapted from https://en.wikipedia.org/wiki/Mandelbrot_set)
 * @see https://en.wikipedia.org/wiki/Plotting_algorithms_for_the_Mandelbrot_set
 *
 * @param {number} imageWidth The width of the rendered image.
 * @param {number} imageHeight The height of the rendered image.
 * @param {number} figureCenterX The x-coordinate of the center of the figure.
 * @param {number} figureCenterY The y-coordinate of the center of the figure.
 * @param {number} figureWidth The width of the figure.
 * @param {number} maxStep Maximum number of steps to check for divergent behavior.
 * @param {boolean} useDistanceColorCoding Render in color or black and white.
 * @return {object} The RGB-data of the rendered Mandelbrot set.
 */
export function getRGBData (
  imageWidth = 800,
  imageHeight = 600,
  figureCenterX = -0.6,
  figureCenterY = 0,
  figureWidth = 3.2,
  maxStep = 50,
  useDistanceColorCoding = true) {
  if (imageWidth <= 0) {
    throw new Error('imageWidth should be greater than zero')
  }

  if (imageHeight <= 0) {
    throw new Error('imageHeight should be greater than zero')
  }

  if (maxStep <= 0) {
    throw new Error('maxStep should be greater than zero')
  }

  const rgbData = []
  const figureHeight = figureWidth / imageWidth * imageHeight

  // loop through the image-coordinates
  for (let imageX = 0; imageX < imageWidth; imageX++) {
    rgbData[imageX] = []
    for (let imageY = 0; imageY < imageHeight; imageY++) {
      // determine the figure-coordinates based on the image-coordinates
      const figureX = figureCenterX + (imageX / imageWidth - 0.5) * figureWidth
      const figureY = figureCenterY + (imageY / imageHeight - 0.5) * figureHeight

      const distance = getDistance(figureX, figureY, maxStep)

      // color the corresponding pixel based on the selected coloring-function
      rgbData[imageX][imageY] =
        useDistanceColorCoding
          ? colorCodedColorMap(distance)
          : blackAndWhiteColorMap(distance)
    }
  }

  return rgbData
}

/**
 * Black and white color-coding that ignores the relative distance.
 *
 * The Mandelbrot set is black, everything else is white.
 *
 * @param {number} distance Distance until divergence threshold
 * @return {object} The RGB-value corresponding to the distance.
 */
function blackAndWhiteColorMap (distance) {
  return distance >= 1 ? [0, 0, 0] : [255, 255, 255]
}

/**
 * Color-coding taking the relative distance into account.
 *
 * The Mandelbrot set is black.
 *
 * @param {number} distance Distance until divergence threshold
 * @return {object} The RGB-value corresponding to the distance.
 */
function colorCodedColorMap (distance) {
  if (distance >= 1) {
    return [0, 0, 0]
  } else {
    // simplified transformation of HSV to RGB
    // distance determines hue
    const hue = 360 * distance
    const saturation = 1
    const val = 255
    const hi = (Math.floor(hue / 60)) % 6
    const f = hue / 60 - Math.floor(hue / 60)

    const v = val
    const p = 0
    const q = Math.floor(val * (1 - f * saturation))
    const t = Math.floor(val * (1 - (1 - f) * saturation))

    switch (hi) {
      case 0:
        return [v, t, p]
      case 1:
        return [q, v, p]
      case 2:
        return [p, v, t]
      case 3:
        return [p, q, v]
      case 4:
        return [t, p, v]
      default:
        return [v, p, q]
    }
  }
}

/**
 * Return the relative distance (ratio of steps taken to maxStep) after which the complex number
 * constituted by this x-y-pair diverges.
 *
 * Members of the Mandelbrot set do not diverge so their distance is 1.
 *
 * @param {number} figureX The x-coordinate within the figure.
 * @param {number} figureY The y-coordinate within the figure.
 * @param {number} maxStep Maximum number of steps to check for divergent behavior.
 * @return {number} The relative distance as the ratio of steps taken to maxStep.
 */
function getDistance (figureX, figureY, maxStep) {
  let a = figureX
  let b = figureY
  let currentStep = 0
  for (let step = 0; step < maxStep; step++) {
    currentStep = step
    const aNew = a * a - b * b + figureX
    b = 2 * a * b + figureY
    a = aNew

    // divergence happens for all complex number with an absolute value
    // greater than 4 (= divergence threshold)
    if (a * a + b * b > 4) {
      break
    }
  }
  return currentStep / (maxStep - 1)
}
