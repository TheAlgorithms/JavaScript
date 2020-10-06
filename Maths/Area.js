/**
 * Author: dephraiim
 * License: GPL-3.0 or later
 *
 * More on Area:
 *      https://en.wikipedia.org/wiki/Area
 *
 */

const areaSquare = (length) => {
  if (length < 0)
    throw new Error('areaSquare() does not accept negative values')

  return length ** 2
}

const areaRectangle = (length, width) => {
  if (length < 0 || width < 0)
    throw new Error('areaRectangle() does not accept negative values')
  return length * width
}

const areaTriangle = (base, height) => {
  if (base < 0 || height < 0)
    throw new Error('areaTriangle() does not accept negative values')
  return (base * height) / 2
}

const areaParallelogram = (base, height) => {
  if (base < 0 || height < 0)
    throw new Error('areaParallelogram() does not accept negative values')

  return base * height
}

const areaTrapezium = (base1, base2, height) => {
  if (base1 < 0 || base2 < 0 || height < 0)
    throw new Error('areaTrapezium() does not accept negative values')

  return (1 / 2) * (base1 + base2) * height
}

const areaRhombus = (diagonal1, diagonal2) => {
  if (diagonal1 < 0 || diagonal2 < 0)
    throw new Error('areaRhombus() does not accept negative values')

  return (1 / 2) * diagonal1 * diagonal2
}

const areaCircle = (radius) => {
  if (radius < 0)
    throw new Error('areaCircle() does not accept negative values')

  return Math.PI * radius ** 2
}

const surfaceAreaSphere = (radius) => {
  if (radius < 0)
    throw new Error('surfaceAreaSphere() does not accept negative values')

  return 4 * Math.PI * radius ** 2
}

const surfaceAreaCube = (length) => {
  if (length < 0)
    throw new Error('surfaceAreaCube() does not accept negative values')

  return 6 * length ** 2
}

const surfaceAreaCylinder = (radius, height) => {
  if (height < 0 || radius < 0)
    throw new Error('surfaceAreaCylinder() does not accept negative values')

  return 2 * Math.PI * radius * (height + radius) // 2πr(h+r)
}

const curvedSurfaceAreaCylinder = (radius, height) => {
  if (height < 0 || radius < 0)
    throw new Error(
      'curvedSurfaceAreaCylinder() does not accept negative values'
    )

  return 2 * Math.PI * radius * height
}

export {
  areaCircle,
  areaTriangle,
  areaTrapezium,
  areaSquare,
  areaRhombus,
  areaRectangle,
  areaParallelogram,
  surfaceAreaCube,
  surfaceAreaSphere,
  surfaceAreaCylinder,
  curvedSurfaceAreaCylinder
}
