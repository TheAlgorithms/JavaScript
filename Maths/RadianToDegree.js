/*
 * Radian : https://en.wikipedia.org/wiki/Radian
 * Degree : https://en.wikipedia.org/wiki/Degree_(angle)
 *
 * Angle in Degree = ( Angle in Radian ) x ( 180 / pi )
 *
 * Example :
 * Question : Convert pi / 2 degree to radian
 * So, Angle in Radian = pi / 2
 *
 * Solution :
 * Angle in Degree = ( pi / 2 ) x ( 180 / pi ) = 90
 *
 * So, pi / 2 radian is equal to 90 degree
 */

/**
 * @param {number} radian
 * @return {number}
 */
export const radianToDegree = (radian) => {
  return radian * (180 / Math.PI)
}
