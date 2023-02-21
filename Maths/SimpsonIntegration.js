/*
*
* @file
* @title Composite Simpson's rule for definite integral evaluation
* @author: [ggkogkou](https://github.com/ggkogkou)
* @brief Calculate definite integrals using composite Simpson's numerical method
*
* @details The idea is to split the interval in an EVEN number N of intervals and use as interpolation points the xi
* for which it applies that xi = x0 + i*h, where h is a step defined as h = (b-a)/N where a and b are the
* first and last points of the interval of the integration [a, b].
*
* We create a table of the xi and their corresponding f(xi) values and we evaluate the integral by the formula:
* I = h/3 * {f(x0) + 4*f(x1) + 2*f(x2) + ... + 2*f(xN-2) + 4*f(xN-1) + f(xN)}
*
* That means that the first and last indexed i f(xi) are multiplied by 1,
* the odd indexed f(xi) by 4 and the even by 2.
*
* N must be even number and a<b. By increasing N, we also increase precision
*
* More info: [Wikipedia link](https://en.wikipedia.org/wiki/Simpson%27s_rule#Composite_Simpson's_rule)
*
*/

import { logDataToTestFile } from '../util'

function integralEvaluation (N, a, b, func) {
  // Check if N is an even integer
  let isNEven = true
  // 1
  if (N % 2 !== 0) {
    logDataToTestFile('integralEvaluation-1', true)
    isNEven = false
  }

  // 2
  if (!Number.isInteger(N) || Number.isNaN(a) || Number.isNaN(b)) {
    logDataToTestFile('integralEvaluation-2', true)
    throw new TypeError('Expected integer N and finite a, b')
  }
  // 3
  if (!isNEven) {
    logDataToTestFile('integralEvaluation-3', true)
    throw Error('N is not an even number')
  }
  // 4
  if (N <= 0) {
    logDataToTestFile('integralEvaluation-4', true)
    throw Error('N has to be >= 2')
  }

  // Check if a < b
  // 5
  if (a > b) {
    logDataToTestFile('integralEvaluation-5', true)
    throw Error('a must be less or equal than b')
  }
  // 6
  if (a === b) {
    logDataToTestFile('integralEvaluation-6', true)
    return 0
  }

  // Calculate the step h
  const h = (b - a) / N

  // Find interpolation points
  let xi = a // initialize xi = x0
  const pointsArray = []

  // Find the sum {f(x0) + 4*f(x1) + 2*f(x2) + ... + 2*f(xN-2) + 4*f(xN-1) + f(xN)}
  let temp
  for (let i = 0; i < N + 1; i++) {
    // 7
    if (i === 0 || i === N) temp = func(xi)
    // 8
    else if (i % 2 === 0) temp = 2 * func(xi)
    else temp = 4 * func(xi)

    pointsArray.push(temp)
    xi += h
  }

  // Calculate the integral
  let result = h / 3
  temp = 0
  for (let i = 0; i < pointsArray.length; i++) temp += pointsArray[i]

  result *= temp

  // 9
  if (Number.isNaN(result)) {
    logDataToTestFile('integralEvaluation-9', true)
    throw Error(
      "Result is NaN. The input interval doesn't belong to the functions domain"
    )
  }

  return result
}

export { integralEvaluation }
