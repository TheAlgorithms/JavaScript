/*
 * Radian : https://en.wikipedia.org/wiki/Radian
 * Degree : https://en.wikipedia.org/wiki/Degree_(angle)
 *
 * Angle in Radian = ( Angle in Degree ) x ( pi / 180 )
 *
 * Example :
 * Question : Convert 90 degree to radian
 * So, Angle in Degree = 90
 *
 * Solution :
 * Angle in Radian = ( 90 ) x ( pi / 180 ) = pi / 2
 *
 * So, 90 degree is equal to pi / 2 radian
 */

/**
 * @param {number} degree
 * @return {number}
 */
export function degreeToRadian(degree) {
  return degree * (Math.PI / 180)
}
