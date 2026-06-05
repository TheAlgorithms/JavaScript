/**
 * @function returnOnInvestment
 * @description Calculates Return on Investment (ROI) as a percentage.
 * ROI measures the profitability of an investment relative to its cost.
 * Formula: ROI = (Gain - Cost) / Cost * 100
 * @param {number} gainFromInvestment - Total value gained from the investment
 * @param {number} costOfInvestment - Total cost of the investment
 * @return {number} ROI as a percentage
 * @see https://www.investopedia.com/terms/r/returnoninvestment.asp
 * @example returnOnInvestment(1000, 500) = 100
 * @example returnOnInvestment(500, 500) = 0
 * @example returnOnInvestment(200, 500) = -60
 */
const returnOnInvestment = (gainFromInvestment, costOfInvestment) => {
  if (
    typeof gainFromInvestment !== 'number' ||
    typeof costOfInvestment !== 'number'
  ) {
    throw new TypeError('Arguments must be numbers')
  }
  if (costOfInvestment <= 0) {
    throw new RangeError('costOfInvestment must be greater than 0')
  }
  return ((gainFromInvestment - costOfInvestment) / costOfInvestment) * 100
}

export { returnOnInvestment }
