/*
  Calculate the area of various shapes
*/

/**
 * @function surfaceAreaCube
 * @description Calculate the Surface Area of a Cube.
 * @param {Number} side - Number
 * @return {Number} - 6 * side ** 2
 * @see [surfaceAreaCube](https://en.wikipedia.org/wiki/Area#Surface_area)
 * @example surfaceAreaCube(1) = 6
 */
const surfaceAreaCube = (side) => {
  validateNumericParam(side, 'side')
  return 6 * side ** 2
}

/**
 * @function surfaceAreaSphere
 * @description Calculate the Surface Area of a Sphere.
 * @param {Number} radius - Number
 * @return {Number} - 4 * pi * r^2
 * @see [surfaceAreaSphere](https://en.wikipedia.org/wiki/Sphere)
 * @example surfaceAreaSphere(5) = 314.1592653589793
 */
const surfaceAreaSphere = (radius) => {
  validateNumericParam(radius, 'radius')
  return 4.0 * Math.PI * radius ** 2.0
}

/**
 * @function areaRectangle
 * @description Calculate the area of a rectangle.
 * @param {Number} length - Number
 * @param {Number} width - Number
 * @return {Number} - width * length
 * @see [areaRectangle](https://en.wikipedia.org/wiki/Area#Quadrilateral_area)
 * @example areaRectangle(4) = 16
 */
const areaRectangle = (length, width) => {
  validateNumericParam(length, 'Length')
  validateNumericParam(width, 'Width')
  return width * length
}

/**
 * @function areaSquare
 * @description Calculate the area of a square.
 * @param {Number} side - Number
 * @return {Number} - side ** 2.
 * @see [areaSquare](https://en.wikipedia.org/wiki/Square)
 * @example areaSquare(4) = 16
 */
const areaSquare = (side) => {
  validateNumericParam(side, 'square side')
  return side ** 2
}

/**
 * @function areaTriangle
 * @description Calculate the area of a triangle.
 * @param {Number} base - Number
 * @param {Number} height - Number
 * @return {Number} - base * height / 2.
 * @see [areaTriangle](https://en.wikipedia.org/wiki/Area#Triangle_area)
 * @example areaTriangle(1.66, 3.44) = 2.8552
 */
const areaTriangle = (base, height) => {
  validateNumericParam(base, 'Base')
  validateNumericParam(height, 'Height')
  return (base * height) / 2.0
}

/**
 * @function areaTriangleWithAllThreeSides
 * @description Calculate the area of a triangle with the all three sides given.
 * @param {Number} side1 - Number
 * @param {Number} side2 - Number
 * @param {Number} side3 - Number
 * @return {Number} - area of triangle.
 * @see [areaTriangleWithAllThreeSides](https://en.wikipedia.org/wiki/Heron%27s_formula)
 * @example areaTriangleWithAllThreeSides(5, 6, 7) = 14.7
 */
const areaTriangleWithAllThreeSides = (side1, side2, side3) => {
  validateNumericParam(side1, 'side1')
  validateNumericParam(side2, 'side2')
  validateNumericParam(side3, 'side3')
  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    throw new TypeError('Invalid Triangle sides.')
  }
  // Finding Semi perimeter of the triangle using formula
  const semi = (side1 + side2 + side3) / 2

  // Calculating the area of the triangle
  const area = Math.sqrt(
    semi * (semi - side1) * (semi - side2) * (semi - side3)
  )
  return Number(area.toFixed(2))
}

/**
 * @function areaParallelogram
 * @description Calculate the area of a parallelogram.
 * @param {Number} base - Number
 * @param {Number} height - Number
 * @return {Number} - base * height
 * @see [areaParallelogram](https://en.wikipedia.org/wiki/Area#Dissection,_parallelograms,_and_triangles)
 * @example areaParallelogram(5, 6) = 24
 */
const areaParallelogram = (base, height) => {
  validateNumericParam(base, 'Base')
  validateNumericParam(height, 'Height')
  return base * height
}

/**
 * @function areaTrapezium
 * @description Calculate the area of a trapezium.
 * @param {Number} base1 - Number
 * @param {Number} base2 - Number
 * @param {Number} height - Number
 * @return {Number} - (1 / 2) * (base1 + base2) * height
 * @see [areaTrapezium](https://en.wikipedia.org/wiki/Trapezoid)
 * @example areaTrapezium(5, 12, 10) = 85
 */
const areaTrapezium = (base1, base2, height) => {
  validateNumericParam(base1, 'Base One')
  validateNumericParam(base2, 'Base Two')
  validateNumericParam(height, 'Height')
  return (1 / 2) * (base1 + base2) * height
}

/**
 * @function areaCircle
 * @description Calculate the area of a circle.
 * @param {Number} radius - Number
 * @return {Number} - Math.PI * radius ** 2
 * @see [areaCircle](https://en.wikipedia.org/wiki/Area_of_a_circle)
 * @example areaCircle(5, 12, 10) = 85
 */
const areaCircle = (radius) => {
  validateNumericParam(radius, 'Radius')
  return Math.PI * radius ** 2
}

/**
 * @function areaRhombus
 * @description Calculate the area of a rhombus.
 * @param {Number} diagonal1 - Number
 * @param {Number} diagonal2 - Number
 * @return {Number} - (1 / 2) * diagonal1 * diagonal2
 * @see [areaRhombus](https://en.wikipedia.org/wiki/Rhombus)
 * @example areaRhombus(12, 10) = 60
 */
const areaRhombus = (diagonal1, diagonal2) => {
  validateNumericParam(diagonal1, 'diagonal one')
  validateNumericParam(diagonal2, 'diagonal two')
  return (1 / 2) * diagonal1 * diagonal2
}

const validateNumericParam = (param, paramName = 'param') => {
  if (typeof param !== 'number') {
    throw new TypeError('The ' + paramName + ' should be type Number')
  } else if (param < 0) {
    throw new Error('The ' + paramName + ' only accepts non-negative values')
  }
}

export {
  surfaceAreaCube,
  surfaceAreaSphere,
  areaRectangle,
  areaSquare,
  areaTriangle,
  areaParallelogram,
  areaTrapezium,
  areaCircle,
  areaRhombus,
  areaTriangleWithAllThreeSides
}
