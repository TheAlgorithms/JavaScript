/**
 * In mathematics and computational science, the Euler method (also called forward Euler method) is a first-order
 * numerical procedure for solving ordinary differential equations (ODEs) with a given initial value. It is the most
 * basic explicit method for numerical integration of ordinary differential equations. The method proceeds in a series
 * of steps. At each step the y-value is calculated by evaluating the differential equation at the previous step,
 * multiplying the result with the step-size and adding it to the last y-value: y_n+1 = y_n + stepSize * f(x_n, y_n).
 *
 * (description adapted from https://en.wikipedia.org/wiki/Euler_method)
 * @see https://www.geeksforgeeks.org/euler-method-solving-differential-equation/
 */
export function eulerStep(xCurrent, stepSize, yCurrent, differentialEquation) {
  // calculates the next y-value based on the current value of x, y and the stepSize
  return yCurrent + stepSize * differentialEquation(xCurrent, yCurrent)
}

export function eulerFull(
  xStart,
  xEnd,
  stepSize,
  yStart,
  differentialEquation
) {
  // loops through all the steps until xEnd is reached, adds a point for each step and then returns all the points
  const points = [{ x: xStart, y: yStart }]
  let yCurrent = yStart
  let xCurrent = xStart

  while (xCurrent < xEnd) {
    // Euler method for next step
    yCurrent = eulerStep(xCurrent, stepSize, yCurrent, differentialEquation)
    xCurrent += stepSize
    points.push({ x: xCurrent, y: yCurrent })
  }

  return points
}
