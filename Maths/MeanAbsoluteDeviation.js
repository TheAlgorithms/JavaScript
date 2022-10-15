import { mean } from './AverageMean.js'
/**
 *@function meanAbsoluteDeviation
 *@description Calculates the mean absolute deviation of list of numbers
 * @param {Integer} data
 * @returns meanAbsoluteDeviation([2,34,5,0,-2]) = 10.480
 * @url https://en.wikipedia.org/wiki/Average_absolute_deviation
 */
function meanAbsoluteDeviation (data) {
  if (!Array.isArray(data)) {
    throw new TypeError('Invalid Input')
  }
  let absoluteSum = 0
  const meanValue = mean(data)
  for (const dataPoint of data) {
    absoluteSum += Math.abs(dataPoint - meanValue)
  }
  return absoluteSum / data.length
}

export {
  meanAbsoluteDeviation
}
