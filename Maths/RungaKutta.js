/**
 * @function rungeKuttaStep
 * @description Runge-Kutta step function to calculate the next y-value based on the current x-value, y-value, step size and differential equation.
 * @param {number} xCurrent - The current x-value
 * @param {number} stepSize - The step size
 * @param  {number} yCurrent - The current y-value
 * @param  {function} differentialEquation - The differential equation to solve
 * @returns {number} - The next y-value
 * @example rungeKuttaStep(0, 0.1, 1, function (x, y) { return Math.sin(x) + y; }); // returns 1.10517
 * @example rungeKuttaStep(0.5, 0.1, 1, function (x, y) { return Math.exp(x) - y; }); // returns 1.15233
 */
export function rungeKuttaStep(
  xCurrent,
  stepSize,
  yCurrent,
  differentialEquation
) {
  // Calculate the four slopes: k1, k2, k3, k4
  const k1 = stepSize * differentialEquation(xCurrent, yCurrent)
  const k2 =
    stepSize * differentialEquation(xCurrent + stepSize / 2, yCurrent + k1 / 2)
  const k3 =
    stepSize * differentialEquation(xCurrent + stepSize / 2, yCurrent + k2 / 2)
  const k4 = stepSize * differentialEquation(xCurrent + stepSize, yCurrent + k3)

  // Calculate the next y-value using the weighted average of the four slopes
  return yCurrent + (1 / 6) * (k1 + 2 * k2 + 2 * k3 + k4)
}

/**
 * @description Runge-Kutta method for solving ordinary differential equations (ODEs) with a given initial value. It is a numerical procedure for solving ODEs. The method proceeds in a series of steps. At each step the y-value is calculated by evaluating the differential equation at the previous step, multiplying the result with the step-size and adding it to the last y-value.
 * @param {number} xStart - The starting x-value
 * @param {number} xEnd - The ending x-value
 * @param {number} stepSize - The step size
 * @param {number} yStart - The starting y-value
 * @param {function} differentialEquation - The differential equation to solve
 * @returns {Array} - An array of points (x, y) for the complete iteration from xStart to xEnd
 * @see https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods
 * @example rungeKuttaFull(0, 1, 0.2, 1, function (x, y) { return Math.sin(x) + y; });
 *              [{ x: 0, y: 1 },
 *              { x: 0.2, y: 1.22140 },
 *              { x: 0.4, y: 1.53659 },
 *              { x: 0.6, y: 1.95837 },
 *              { x: 0.8, y: 2.50487 },
 *              { x: 1.0, y: 3.20155 }]
 */
export function rungeKuttaFull(
  xStart,
  xEnd,
  stepSize,
  yStart,
  differentialEquation
) {
  // Collect all the points (x, y) for the complete iteration from xStart to xEnd
  const points = [{ x: xStart, y: yStart }]
  let yCurrent = yStart
  let xCurrent = xStart

  while (xCurrent < xEnd) {
    // Runge-Kutta method for the next step

    // Check if the next step will exceed xEnd and adjust the stepSize accordingly
    if (xCurrent + stepSize > xEnd) {
      stepSize = xEnd - xCurrent
    }

    yCurrent = rungeKuttaStep(
      xCurrent,
      stepSize,
      yCurrent,
      differentialEquation
    )
    xCurrent += stepSize

    // Push the new point to the points array
    points.push({ x: xCurrent, y: yCurrent })
  }

  return points
}
